/**
 * @type {String}
 * @properties={typeid:35,uuid:"D437E477-1C1E-4337-A974-D09B1917FF53"}
*/
var VERSION = '1.0.0';


/**
 * Kicks off the entire process
 *
 * @param {String} sCLDRPath Folder path containing all CLDR locale data
 * @param {String} sCodePath File path for cldr.js file to write to
 * @param {String} sMessagePath Folder path pointing containing i18n message files
 * @param {String} aToProcess Set of Locales to process ("en", "es", "ru")
 * @param {String} sDefaultLocale Locale to be used as default i18n format
 *
 * @properties={typeid:24,uuid:"D86A51DA-6CD4-464C-B5D0-0598CF8063CC"}
 */
function run(sCLDRPath, sCodePath, sMessagePath, aToProcess, sDefaultLocale){

	// Grab all the files in the cldr folder
	var aCLDRFiles = plugins.file.getFolderContents(sCLDRPath);

	// Build a data map by looping through the array of files and extracting only those folders we wish to make available. (Some folders are cldr utils)
	var oLocaleFileMap = {};

	// Organize all cldr folders by name to avoid nested looping below
	aCLDRFiles.forEach(function(oFile){
		var sName = oFile.getName();
		if (oFile.isDirectory() && sName.indexOf("supplemental", 0) < 0 && sName.indexOf("root", 0) < 0) {
			oLocaleFileMap[sName] = oFile;
			return true;
		}
	});

	// Loop through the locales to process
	for (var f = 0, nOfLocales = aToProcess.length; f < nOfLocales; f++) {
		var sCodeFile = null;
		if (sDefaultLocale == aToProcess[f]) {
			sCodeFile = sCodePath;
		}
		processLocale(oLocaleFileMap[aToProcess[f]], aToProcess[f], sMessagePath, sCodeFile);
	}
}

/**
 * Processes an individual locale for messages and, if the default locale, to reset code constants
 *
 * @param {plugins.file.JSFile} oDir
 * @param {String} sLocale
 * @param {String} sMsgDir
 * @param {String} [sCodeFile]
 *
 * @properties={typeid:24,uuid:"DA677C2B-BA55-43B1-85CB-1321D1F13E9E"}
 */
function processLocale(oDir, sLocale, sMsgDir, sCodeFile){
	var aMessages = [];

	// Get the Gregorian calendar file json
	var oGC = getGregorianCalendarFileJSON(oDir, sLocale);
	// Get all the i18n messages from the gregorian calendar file
	aMessages = aMessages.concat(getGregorianCalendarMessages(oGC));


	// Get the number file json
	var oNumberJSON = getNumberFileJSON(oDir, sLocale);
	// Get all the i18n messages from the numbers file
	aMessages = aMessages.concat(getNumberMessages(oNumberJSON));


	// Get the currency file json
	var oCurrencyJSON = getCurrencyFileJSON(oDir, sLocale);
	// Use the currency json and number json to build currency messages
	aMessages = aMessages.concat(getCurrencyMessages(oCurrencyJSON, oNumberJSON));


	// Rebuild locale specific messages
	rebuildMessages(sMsgDir, aMessages, sLocale);
	// If this is our default locale, write to cldr.js and rebuild the default i18n messages
	if (sCodeFile) {
		rebuildMessages(sMsgDir, aMessages);
		rebuildCLDRConstants(sCodeFile, oNumberJSON, oCurrencyJSON);
	}
}

/**
 * Takes a message set and either replaces entries in an existing i18n resource file or builds a new messages file for a particular locale
 *
 * @param {String}	sMsgDir
 * @param {Array}	aMessages
 * @param {String}	[sLocale]
 *
 * @properties={typeid:24,uuid:"2FA29D03-C897-4870-9983-D5EAAA038736"}
 */
function rebuildMessages(sMsgDir, aMessages, sLocale) {
	var oPassedFile = plugins.file.convertToJSFile(sMsgDir);

	var sFilePrefix = "cldr";
	var sResourcesPath = sMsgDir;

	if (oPassedFile.isFile()) {
		sFilePrefix = utils.stringReplace(oPassedFile.getName(), ".properties", "");
		sResourcesPath = oPassedFile.getParent();
	}

	// Grab all the files in the i18n messages folder
	var aFiles = plugins.file.getFolderContents(sResourcesPath);

	var sFileSearcher = sFilePrefix;

	if (sLocale) {
		sFileSearcher += "." + sLocale;
	}
	sFileSearcher += ".properties";

	// Try to locate the file we want to set
	var aToSet = aFiles.filter(function(oFile){
		if (oFile.isFile()) {
			var sName = oFile.getName();
			if ( sName.indexOf(sFileSearcher, 0) > -1 ) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
	});

	var sFileToSet;
	var sFinal = "";
	var aTransitory;

	// If the file we wish to set actually exists, set it
	if (aToSet && aToSet.length > 0) {
		sFileToSet = aToSet[0];
		var sMessageText = plugins.file.readTXTFile(sFileToSet, "ISO-8859-1");
		var aExistingMessages = sMessageText.split("\n");

		// Parse all the existing messages into an object array
		var aExistingAsObjs = aExistingMessages.map(function (sRow){
			var aRow = sRow.split("=");
			return {
				key : aRow.shift(),
				value : aRow.join("=")
			};
		});

		aMessages.forEach(function(oRow){
			var bNeedIt = true;
			for (var i = 0, nLength = aExistingAsObjs.length; i < nLength; i++) 			{
				if (oRow.key == aExistingAsObjs[i].key)	{
					aExistingAsObjs[i].value = oRow.value;
					bNeedIt = false;
					break;
				}
			}

			// If the code gets here the message didn't exist so we must add it
			if (bNeedIt) {
				aExistingAsObjs.push(oRow);
			}
		});

		aTransitory = aExistingAsObjs.map(function(oRow){
			return oRow.key + "=" + transcodeCharFromUTFToLatin(oRow.value);
		});
		aTransitory.sort();
		sFinal = aTransitory.join("\n");
	}
	// Otherwise, make a brand new file
	else {
		sFileToSet = sResourcesPath + java.io.File.separator + sFileSearcher;
		aTransitory = aMessages.map(function(oRow){
			return oRow.key + "=" + transcodeCharFromUTFToLatin(oRow.value);
		});
		aTransitory.sort();
		sFinal = aTransitory.join("\n");
	}

	plugins.file.writeTXTFile(sFileToSet, sFinal, "ISO-8859-1");
}

/**
 * Changes a given string from utf-8 to iso-8859-1
 *
 * @param {String}	sUTF
 *
 * @properties={typeid:24,uuid:"EB3609CB-0F14-4CD8-9861-6C83E408A40F"}
 */
function transcodeCharFromUTFToLatin(sUTF){
	var sLatin = "";

	if (!sUTF || sUTF.length < 1) {
		return "";
	}
	for (var i = 0; i < sUTF.length; i++) {
		if (sUTF.charCodeAt(i) > 255) {
			sLatin += "\\u" + pad(sUTF.charCodeAt(i).toString(16).toUpperCase());
		}
		else {
			sLatin += sUTF.charAt(i);
		}
	}
	return sLatin;

	function pad(s) {
		switch (s.length) {
			case 0:
				return '0000';
			case 1:
				return '000' + s;
			case 2:
				return '00' + s;
			case 3:
				return '0' + s;
			default:
				return s;
		}
	}
}

/**
 * Transforms the cldr json into a set of constants with name/value pairs for the i18n formatting keys
 *
 * @param sCodeFile
 * @param oNumberJSON
 * @param oCurrencyJSON
 *
 * @properties={typeid:24,uuid:"2B59BD67-A784-403D-B10E-6E567AF9A900"}
 */
function rebuildCLDRConstants(sCodeFile, oNumberJSON, oCurrencyJSON){
	var oCode = {
		DATE : [],
		TIME : [],
		DATETIME : [],
		NUMBER : [],
		CURRENCY : []
	};

	// Build the various calendar code components
	oCode.DATE = getGregorianDateCode();
	oCode.TIME = getGregorianTimeCode();
	oCode.DATETIME = getGregorianDateTimeCode();

	oCode.NUMBER = getNumberCode(oNumberJSON);
	oCode.CURRENCY = getCurrencyCode(oCurrencyJSON);

	var sJSText = plugins.file.readTXTFile(sCodeFile);

	for ( var sConstant in oCode) {
		var nVarStart = sJSText.indexOf("var " + sConstant);
		var nOpenIndex = sJSText.indexOf("{", nVarStart);
		var nCloseIndex = locateMatchingBracket(sJSText, nOpenIndex);
		sJSText = sJSText.substr(0, nOpenIndex+1) + "\n" + oCode[sConstant].join(",\n") + "\n" + sJSText.substr(nCloseIndex);
	}

	plugins.file.writeTXTFile(sCodeFile, sJSText);
}

/**
 * Finds a closing } in a string given the index of the opening bracket {
 *
 * @param sText
 * @param nStartIndex
 *
 * @properties={typeid:24,uuid:"7656C948-F446-4094-AE2E-6E0EFAEFD986"}
 */
function locateMatchingBracket(sText, nStartIndex){
	var nCount = 1;
	var nCurIndex = nStartIndex;
	var nMax = sText.length;

	while (nCount > 0 && nCurIndex <= nMax) {
		nCurIndex++;
		var sCurChar = sText.charAt(nCurIndex);

		if (sCurChar == "}") {
			nCount--;
		}
		else if (sCurChar == "{") {
			nCount++;
		}
	}

	if (0 === nCount) {
		return nCurIndex;
	}
}

/**
 * Utility method to form an i18n key for this system
 *
 * @param sTree
 * @param sPattern
 *
 * @properties={typeid:24,uuid:"9F9C6810-0814-4371-BA82-4E450FAA27EC"}
 */
function geti18nKey(sTree, sPattern) {
	var sBase = "cldr";
	var sKey = sBase + "." + sTree + ".";
	sKey = sKey.toLowerCase();
	sKey += sPattern;
	return sKey;
}

/**
 * Obtains JSON for processing from a locale specific gregorian calendar cldr file
 *
 * @param {plugins.file.JSFile} oDir specifically a directory file
 * @param {String} sLocale
 *
 * @return {Object}
 *
 * @properties={typeid:24,uuid:"3FEB030A-E714-4BBB-8FF2-9D925DD148F6"}
 */
function getGregorianCalendarFileJSON(oDir, sLocale){
	var oGregorian;

	var sPath = oDir.getAbsolutePath() + java.io.File.separator + "ca-gregorian.json";
	var oFile = plugins.file.convertToJSFile(sPath);

	if (oFile && oFile.exists()) {
		var sData = plugins.file.readTXTFile(sPath, "UTF-8");
		var jData = plugins.serialize.fromJSON(sData);

		if (jData.main[sLocale]) {
			oGregorian = jData.main[sLocale].dates.calendars.gregorian;
		}
	}
	else {
		application.output('Gregorian calendar file not found.');
	}
	return oGregorian;
}

/**
 * Obtains JSON for processing from a locale specific numbers cldr file
 *
 * @param {plugins.file.JSFile} oDir specifically a directory file
 * @param {String} sLocale
 *
 * @return {Object}
 *
 * @properties={typeid:24,uuid:"4E754FC4-88BB-4D20-9857-D81AD0B7BB6B"}
 */
function getNumberFileJSON(oDir, sLocale){
	var oNumbers;

	var sPath = oDir.getAbsolutePath() + java.io.File.separator + "numbers.json";
	var oFile = plugins.file.convertToJSFile(sPath);

	if (oFile && oFile.exists()) {
		var sData = plugins.file.readTXTFile(sPath, "UTF-8");
		var jData = plugins.serialize.fromJSON(sData);

		if (jData.main[sLocale]) {
			oNumbers = jData.main[sLocale].numbers;
		}
	}
	else {
		application.output('Number file not found.');
	}
	return oNumbers;
}

/**
 * Obtains JSON for processing from a locale specific numbers cldr file
 *
 * @param {plugins.file.JSFile} oDir specifically a directory file
 * @param {String} sLocale
 *
 * @return {Object}
 *
 * @properties={typeid:24,uuid:"024908D1-ED11-4633-83B4-98EDBC978896"}
 */
function getCurrencyFileJSON(oDir, sLocale){
	var oCurrency;

	var sPath = oDir.getAbsolutePath() + java.io.File.separator + "currencies.json";
	var oFile = plugins.file.convertToJSFile(sPath);

	if (oFile && oFile.exists()) {
		var sData = plugins.file.readTXTFile(sPath, "UTF-8");
		var jData = plugins.serialize.fromJSON(sData);

		if (jData.main[sLocale]) {
			oCurrency = jData.main[sLocale].numbers.currencies;
		}
	}
	else {
		application.output('Currency file not found.');
	}
	return oCurrency;
}

/**
 * Obtains the Date patternsobject used to obtain desired data from any gregorian calendar file
 *
 * @return {Object<function>}
 *
 * @note To add formats to the library edit the pattern
 *
 * @properties={typeid:24,uuid:"71159264-3D66-4FD4-AB48-6EFB632E4B8B"}
 */
function getGregorianDatePatterns(){
	var oPatterns = {
		FULL : function (oG){return oG.dateFormats.full;},
		LONG : function (oG){return oG.dateFormats.long;},
		MEDIUM : function (oG){return oG.dateFormats.medium;},
		SHORT : function (oG){return oG.dateFormats.short;},
		SHORTFULLYEAR : function (oG){return oG.dateFormats.short.replace(/(y+)/gi, "yyyy"); }, //Finds any group of one or many Y's (ignoring casing) and replaces them with 4 y's. This makes sure that a full year is present for this format
		yM : function(oG){return oG.dateTimeFormats.availableFormats.yM;},
		yMM : function(oG){
			if (oG.dateTimeFormats.availableFormats.yMM){
				return oG.dateTimeFormats.availableFormats.yMM;
			}
			else if (oG.dateTimeFormats.availableFormats.yM){
				return oG.dateTimeFormats.availableFormats.yM;
			}
			else {
				return "yM";
			}
		},
		yMMM : function(oG){
			if (oG.dateTimeFormats.availableFormats.yMMM) {
				return oG.dateTimeFormats.availableFormats.yMMM;
			}
			else {
				return "MMM y";
			}},
		yMMMM : function(oG){
			if (oG.dateTimeFormats.availableFormats.yMMMM) {
				return oG.dateTimeFormats.availableFormats.yMMMM;
			}
			else if (oG.dateTimeFormats.availableFormats.yMMM) {
				return utils.stringReplace(oG.dateTimeFormats.availableFormats.yMMM, "MMM", "MMMM");
			}
			else {
				return "MMMM y";
			}
		},
		yyMMdd : function(oG){return ((oG.dateTimeFormats.availableFormats.yMd.replace(/(y+)/gi, "yy")).replace(/(M+)/gi, "MM")).replace(/(d+)/gi, "dd");},
		yMMMd : function(oG){return oG.dateTimeFormats.availableFormats.yMMMd;},
		Md : function(oG){return oG.dateTimeFormats.availableFormats.Md || "M/d";},
		MMMEd : function(oG){return oG.dateTimeFormats.availableFormats.MMMEd;},
		MMMMd : function(oG){
			if (oG.dateTimeFormats.availableFormats.MMMMd){
				return oG.dateTimeFormats.availableFormats.MMMMd;
			}
			else if (oG.dateTimeFormats.availableFormats.MMMd){
				return utils.stringReplace(oG.dateTimeFormats.availableFormats.MMMd, "MMM", "MMMM");
			}
			else {
				return "MMMM d";
			}
		}
	};
	return oPatterns;
}

/**
 * Obtains the Time patterns object used to obtain desired data from any Gregorian calendar file
 *
 * @return {Object<function>}
 *
 * @note To add formats to the library edit the pattern
 *
 * @properties={typeid:24,uuid:"5D2844E9-DCC0-4DA9-AD52-C117EF44A49D"}
 */
function getGregorianTimePatterns(){
	var oPatterns = {
		FULL : function (oG){return oG.timeFormats.full;},
		LONG : function (oG){return oG.timeFormats.long;},
		MEDIUM : function (oG){return oG.timeFormats.medium;},
		SHORT : function (oG){return oG.timeFormats.short;}
	};
	return oPatterns;
}

/**
 * Obtains the DateTime pattern sobject used to obtain desired data from any gregorian calendar file
 *
 * @return {Object<function>}
 *
 * @note To add formats to the library edit the pattern
 *
 * @properties={typeid:24,uuid:"8F257E20-8526-49A8-8F73-33CB806DE16D"}
 */
function getGregorianDateTimePatterns(){
	var oPatterns = {
		FULL : function (oG){return utils.stringReplace(utils.stringReplace(oG.dateTimeFormats.full, "{0}", oG.timeFormats.full), "{1}", oG.dateFormats.full);},
		LONG : function (oG){return utils.stringReplace(utils.stringReplace(oG.dateTimeFormats.long, "{0}", oG.timeFormats.long), "{1}", oG.dateFormats.long);},
		MEDIUM : function (oG){return utils.stringReplace(utils.stringReplace(oG.dateTimeFormats.medium, "{0}", oG.timeFormats.medium), "{1}", oG.dateFormats.medium);},
		SHORT : function (oG){return utils.stringReplace(utils.stringReplace(oG.dateTimeFormats.short, "{0}", oG.timeFormats.short), "{1}", oG.dateFormats.short);}
	};
	return oPatterns;
}

/**
 * Obtains the Number patterns object used to obtain desired data from any cldr numbers file
 *
 * @return {Object<function>}
 *
 * @note To add formats to the library edit the pattern
 *
 * @properties={typeid:24,uuid:"4DB5B4C2-1852-45AB-809E-B4684CF73CFF"}
 */
function getNumberPatterns() {
	var oPatterns = {
		STANDARD : function (oN, sSys){return oN["decimalFormats-numberSystem-" + sSys].standard;},
		PERCENT : function (oN, sSys){return oN["percentFormats-numberSystem-" + sSys].standard;},
		SCIENTIFIC : function (oN, sSys){return oN["scientificFormats-numberSystem-" + sSys].standard;}
	};
	return oPatterns;
}

/**
 * Obtains the NumberCount patterns object used to obtain desired data from any cldr numbers file
 *
 * @return {Object<function>}
 *
 * @note To add formats to the library edit the pattern
 *
 * @properties={typeid:24,uuid:"FE312143-C250-4585-BD69-18499809ECB1"}
 */
function getNumberCountPatterns() {
	var oPatterns = {
		ONE : function (oJSON, sNum){return oJSON[sNum + "-count-one"];},
		OTHER : function (oJSON, sNum){return oJSON[sNum + "-count-other"] || oJSON[sNum + "-count-one"];},
		FEW : function (oJSON, sNum){return oJSON[sNum + "-count-few"] || oJSON[sNum + "-count-other"] || oJSON[sNum + "-count-one"];},
		MANY : function (oJSON, sNum){return oJSON[sNum + "-count-many"] || oJSON[sNum + "-count-other"] || oJSON[sNum + "-count-one"];}
	};
	return oPatterns;
}

/**
 * Obtains the CurrencyNumber patterns object used to obtain desired data from any cldr numbers file
 *
 * @return {{STANDARD:function({standard:String}):String, NOFRACTION:function({standard:String}):String, ACCOUNTING:function({accounting}):String}}
 *
 * @note To add formats to the library edit the pattern
 *
 * @properties={typeid:24,uuid:"F0571083-79A9-40FB-93F2-D0500F96D656"}
 */
function getCurrencyNumberPatterns(){
	var oPatterns = {
		STANDARD : function (oJSON){return oJSON.standard;},
		NOFRACTION : function (oJSON) {
			// Removes decimal segment of a number format
			// Replace period followed by zero or more characters that are either (# or 0)
			// @example "###,###.00$".replace(/\.[#0]*/, '') == "###,###$"
			// @example "###,###.## $".replace(/\.[#0]*/, '') == "###,### $"
			return oJSON.standard.replace(/\.[#0]*/, '');
		},
		ACCOUNTING : function (oJSON){return oJSON.accounting;}
	};
	return oPatterns;
}

/**
 * Wrapper method for putting together all the Gregorian Calendar Date/Time messages
 *
 * @param {Object} oJSON
 *
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"3612C9D0-E944-4525-A47A-1DB5F3BFA04E"}
 */
function getGregorianCalendarMessages(oJSON){
	var aMessages = [].concat(getGregorianDateMessages(oJSON), getGregorianTimeMessages(oJSON), getGregorianDateTimeMessages(oJSON));

	return aMessages;
}

/**
 * Creates an array of Date formats from the Gregorian Calendar JSON
 *
 * @param {Object}	oJSON
 *
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"340C8046-5F28-4EEC-8595-0F5D02B2F534"}
 */
function getGregorianDateMessages(oJSON) {
	var aMessages = [];
	var oPatterns = getGregorianDatePatterns();

	for (var sPat in oPatterns) {
		var sKey = geti18nKey("date", sPat);
		aMessages.push({
			key : sKey,
			value : oPatterns[sPat](oJSON)
		});
	}
	return aMessages;
}

/**
 * Creates an array of Time formats from the Gregorian Calendar JSON
 *
 * @param {Object}	oJSON
 *
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"FB06CE28-E96C-4AD3-894B-2505209E5193"}
 */
function getGregorianTimeMessages(oJSON) {
	var aMessages = [];
	var oPatterns = getGregorianTimePatterns();

	for (var sPat in oPatterns) {
		var sKey = geti18nKey("time", sPat);
		aMessages.push({
			key : sKey,
			value : oPatterns[sPat](oJSON)
		});
	}
	return aMessages;
}

/**
 * Creates an array of DateTime formats from the Gregorian Calendar JSON
 *
 * @param {Object}	oJSON
 *
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"EBAD0819-FB1C-4B14-966F-098B08BC9F77"}
 */
function getGregorianDateTimeMessages(oJSON) {
	var aMessages = [];
	var oPatterns = getGregorianDateTimePatterns();

	for (var sPat in oPatterns) {
		var sKey = geti18nKey("datetime", sPat);
		aMessages.push({
			key : sKey,
			value : oPatterns[sPat](oJSON)
		});
	}
	return aMessages;
}

/**
 * Creates an array of number formats from the Gregorian Calendar JSON
 *
 * @param {Object}	oJSON
 *
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"6EB8152A-9541-4085-B2DA-835A2D6C30BD"}
 */
function getNumberMessages(oJSON) {
	var aMessages = [];
	var oPatterns = getNumberPatterns();
	var sSystem = oJSON.defaultNumberingSystem;

	for (var sPat in oPatterns) {
		var sKey = geti18nKey("number", sPat);
		aMessages.push({
			key : sKey,
			value : oPatterns[sPat](oJSON, sSystem)
		});
	}

	aMessages = aMessages.concat(getNumberCountMessages(oJSON, sSystem, "long"), getNumberCountMessages(oJSON, sSystem, "short"));
	return aMessages;
}

/**
 * Creates an array of NumberCount formats from the numbers JSON
 *
 * @param {Object}	oJSON
 * @param {String}	sSystem
 * @param {String}	sSize
 *
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"44A08799-A803-40E3-BEDA-E67F81FF4350"}
 */
function getNumberCountMessages(oJSON, sSystem, sSize) {
	var aMessages = [];
	var oPatterns = getNumberCountPatterns();
	var oSet = oJSON["decimalFormats-numberSystem-" + sSystem][sSize.toLowerCase()].decimalFormat;
	var aNums = [];

	for (var sRow in oSet) {
		if (sRow.indexOf("-count-one") > -1) {
			aNums.push(utils.stringReplace(sRow, "-count-one", ""));
		}
	}

	aNums.sort();

	for (var i = 0; i < aNums.length; i++) {
		for (var sPat in oPatterns) {
			var sKey = geti18nKey("number.count." + sSize.toLowerCase() + "." + aNums[i], sPat);
			aMessages.push({
				key : sKey,
				value : oPatterns[sPat](oSet, aNums[i])
			});
		}
	}
	return aMessages;
}

/**
  * Wrapper method for putting together all the Currency format messages
 *
 * @param {Object}	oCurrencyJSON
 * @param {Object}	oNumberJSON
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"1170EF85-66D8-4515-8A25-9B69426C60D8"}
 */
function getCurrencyMessages(oCurrencyJSON, oNumberJSON) {
	var aMessages = [].concat(getCurrencyNumberMessages(oNumberJSON), getCurrencyCurrenciesMessages(oCurrencyJSON));
	return aMessages;
}

/**
 * Creates an array of Currency number formats from the numbers JSON
 *
 * @param {Object}	oJSON
 *
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"3D7B7B53-7A67-4954-B5C1-C4ACF15643D7"}
 */
function getCurrencyNumberMessages(oJSON){
	var aMessages = [];
	var oPatterns = getCurrencyNumberPatterns();
	var sSystem = oJSON.defaultNumberingSystem;
	var oNC = oJSON["currencyFormats-numberSystem-" + sSystem];

	for (var sPat in oPatterns)
	{
		var sKey = geti18nKey("currency", sPat);
		aMessages.push({
			key : sKey,
			value : oPatterns[sPat](oNC)
		});
	}

	return aMessages;
}

/**
 * Creates an array of Currencies formats from the currencies JSON
 *
 * @param {Object}	oJSON
 *
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"DD58DF83-EF58-4690-A9E9-07A04D0E605E"}
 */
function getCurrencyCurrenciesMessages(oJSON){
	var aMessages = [];
	var aKeys = Object.keys(oJSON);
	aKeys.sort();

	for ( var i = 0, nLength = aKeys.length; i < nLength; i++)
	{
		var sCurCode = aKeys[i];

		var sKeyBase = "currency.currencies";

		var sDKey = geti18nKey(sKeyBase + ".display", sCurCode);
		aMessages.push({
			key : sDKey,
			value : oJSON[sCurCode].displayName
		});

		var sSKey = geti18nKey(sKeyBase + ".symbol", sCurCode);
		aMessages.push({
			key : sSKey,
			value : oJSON[sCurCode].symbol
		});

		var sOneKey = geti18nKey(sKeyBase + ".count", sCurCode + ".one");
		aMessages.push({
			key : sOneKey,
			value : oJSON[sCurCode]["displayName-count-one"]
		});

		var sOtherKey = geti18nKey(sKeyBase + ".count", sCurCode + ".other");
		aMessages.push({
			key : sOtherKey,
			value : oJSON[sCurCode]["displayName-count-other"] || oJSON[sCurCode]["displayName-count-one"]
		});

		var sFewKey = geti18nKey(sKeyBase + ".count", sCurCode + ".few");
		aMessages.push({
			key : sFewKey,
			value : oJSON[sCurCode]["displayName-count-few"] || oJSON[sCurCode]["displayName-count-other"] || oJSON[sCurCode]["displayName-count-one"]
		});

		var sManyKey = geti18nKey(sKeyBase + ".count", sCurCode + ".many");
		aMessages.push({
			key : sManyKey,
			value : oJSON[sCurCode]["displayName-count-many"] || oJSON[sCurCode]["displayName-count-other"] || oJSON[sCurCode]["displayName-count-one"]
		});
	}

	return aMessages;
}

/**
 * Creates an array of Date constants for cldr.js
 *
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"50D55FE2-62D3-4D81-B83A-2E24E69BBBF4"}
 */
function getGregorianDateCode(){
	var aCode = [];
	var oPatterns = getGregorianDatePatterns();

	for (var sPat in oPatterns) {
		var sKey = geti18nKey("date", sPat);
		var sCode = "	" + sPat + " : '" + sKey + "'";
		aCode.push(sCode);
	}
	return aCode;
}

/**
 * Creates an array of Time constants for cldr.js
 *
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"7BAF3FC2-64BE-46CC-8410-E8E741B34ECD"}
 */
function getGregorianTimeCode(){
	var aCode = [];
	var oPatterns = getGregorianTimePatterns();

	for (var sPat in oPatterns) {
		var sKey = geti18nKey("time", sPat);
		var sCode = "	" + sPat + " : '" + sKey + "'";
		aCode.push(sCode);
	}
	return aCode;
}

/**
 * Creates an array of DateTime constants for cldr.js
 *
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"C2438D6C-A510-46FE-A64C-D0A9744B21B6"}
 */
function getGregorianDateTimeCode(){
	var aCode = [];
	var oPatterns = getGregorianDateTimePatterns();

	for (var sPat in oPatterns) {
		var sKey = geti18nKey("datetime", sPat);
		var sCode = "	" + sPat + " : '" + sKey + "'";
		aCode.push(sCode);
	}
	return aCode;
}

/**
 * Creates an array of Number constants for cldr.js
 *
 * @param {Object} oJSON
 *
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"E4278039-B953-4589-B369-A218AFA4DEBB"}
 */
function getNumberCode(oJSON) {
	var aCode = [];
	var oPatterns = getNumberPatterns();

	for (var sPat in oPatterns) {
		var sKey = geti18nKey("number", sPat);
		var sCode = "	" + sPat + " : '" + sKey + "'";
		aCode.push(sCode);
	}

	aCode.push(getNumberCountCode(oJSON));
	return aCode;
}

/**
 * Creates an array of NumberCode constants for cldr.js
 *
 * @param {Object} oJSON
 *
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"BB15B8CC-A93D-416B-8FD5-9F4647BB604E"}
 */
function getNumberCountCode(oJSON) {
	var sSystem = oJSON.defaultNumberingSystem;
	var oToParse = {
		LONG : [],
		SHORT : []
	};
	var oPatterns = getNumberCountPatterns();
	var sCountCode = "	COUNT : {\n";

	for (var sSize in oToParse) {
		var oSet = oJSON["decimalFormats-numberSystem-" + sSystem][sSize.toLowerCase()].decimalFormat;
		var aNums = [];

		var aLengthCode = [];

		for (var sRow in oSet) {
			if (sRow.indexOf("-count-one") > -1) {
				aNums.push(utils.stringReplace(sRow, "-count-one", ""));
			}
		}

		aNums.sort();

		for (var i = 0; i < aNums.length; i++) {
			var aNumCode = [];

			for (var sPat in oPatterns) {
				var sKey = geti18nKey("number.count." + sSize.toLowerCase() + "." + aNums[i], sPat);
				var sCode = "				" + sPat + " : '" + sKey + "'";
				aNumCode.push(sCode);
			}

			var sNumberCode =	"			" + aNums[i] + " : {\n" + aNumCode.join(",\n") + "\n			}";
			aLengthCode.push(sNumberCode);
		}
		sCountCode +=	"		" + sSize + " : {\n" + aLengthCode.join(",\n") + "\n		},\n";
	}

	sCountCode = sCountCode.substr(0, sCountCode.length - 2);
	sCountCode += "\n	}";

	return sCountCode;
}

/**
 * Wrapper that creates all the Currency code constants for cldr.js
 *
 * @param {Object} oJSON
 *
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"9C3FCDB0-C9D8-42E2-922C-F15E127B49B7"}
 */
function getCurrencyCode(oJSON) {
	var aCode = [].concat(getCurrencyNumberCode(), getCurrencyCurrenciesCode(oJSON));
	return aCode;
}

/**
 * Creates an array of CurrencyNumber code constants for cldr.js
 *
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"A6DC5052-9544-453E-AFA4-A36BE3579B24"}
 */
function getCurrencyNumberCode(){
	var aCode = [];
	var oPatterns = getCurrencyNumberPatterns();

	for (var sPat in oPatterns) {
		var sKey = geti18nKey("currency", sPat);
		var sCode = "	" + sPat + " : '" + sKey + "'";
		aCode.push(sCode);
	}
	return aCode;
}

/**
 * Creates an array of the Currencies code constants for cldr.js
 *
 * @param {Object} oJSON
 *
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"1A1019F9-DBC5-489C-98E9-F87746936316"}
 */
function getCurrencyCurrenciesCode(oJSON){

	var sDisplay =	"		DISPLAY : {";
	var sSymbol =	"		SYMBOL : {";
	var sCount =	"		COUNT : {";
	var sSpacer = "\n			";

	var aKeys = Object.keys(oJSON);
	aKeys.sort();

	for ( var i = 0, nLength = aKeys.length; i < nLength; i++) {
		var sCurCode = aKeys[i];

		var sKeyBase = "currency.currencies";

		var sDKey = geti18nKey(sKeyBase + ".display", sCurCode);
		sDisplay +=	sSpacer + sCurCode + " : '" +  sDKey + "',";

		var sSKey = geti18nKey(sKeyBase + ".symbol", sCurCode);
		sSymbol +=	sSpacer + sCurCode + " : '" + sSKey + "',";

		var sOneKey = geti18nKey(sKeyBase + ".count", sCurCode + ".one");
		var sOtherKey = geti18nKey(sKeyBase + ".count", sCurCode + ".other");
		var sFewKey = geti18nKey(sKeyBase + ".count", sCurCode + ".few");
		var sManyKey = geti18nKey(sKeyBase + ".count", sCurCode + ".many");

		sCount +=	sSpacer + sCurCode + " : {\n" +
					"				ONE : '" + sOneKey + "',\n" +
					"				OTHER : '" + sOtherKey + "',\n" +
					"				FEW : '" + sFewKey + "',\n" +
					"				MANY : '" + sManyKey + "'\n" +
					"			},";
	}

	var sCode =	"	CURRENCIES : {\n" +
	sDisplay.substr(0, sDisplay.length-1) +
	"\n		},\n" +
	sSymbol.substr(0, sSymbol.length-1) +
	"\n		},\n" +
	sCount.substr(0, sCount.length-1) +
	"\n		}\n" +
	"	}";
	return [sCode];
}
