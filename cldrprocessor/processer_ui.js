/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"78ABFABD-C8B5-402D-B1C7-1A5234AD8264"}
 */
var fvMessageAction = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BB9F557B-08D2-4B51-AB8F-8649A9961B82"}
 */
var fvDefaultLocale = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"136AF42B-8309-4668-B81A-5610FC140C44"}
 */
var fvToProcess = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"302CCE85-8C4B-4B69-B64B-8D1C7FA8D469"}
 */
var fvCodeFile = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0F32D1FE-DFF2-4DC3-8DB0-DAC14D6A03BC"}
 */
var fvMessagesDir = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AFEB6F26-3871-48D0-A82A-9E19A0CBDBDC"}
 */
var fvCLDRDir = null;


/**
 * Sets form vars and triggers other necessary events
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 *
 * @properties={typeid:24,uuid:"8DB9EE03-CC11-4D7D-A120-D5997B6EC5C6"}
 */
function onActionSelectCLDRDir(event) {
	var sOldVal = fvCLDRDir;
	fvCLDRDir = plugins.file.showFileOpenDialog(2, null, false, null, null, "Select the folder that contains the unzipped cldr data");
	onDataChangeCLDRDir(sOldVal, fvCLDRDir, event);
}

/**
 * Sets form vars and triggers other necessary events*
 * 
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D843C372-4915-4A2C-A22D-5063AA009734"}
 */
function onActionSelectCodeFile(event) {
	fvCodeFile = plugins.file.showFileOpenDialog(1, null, false, ["js"], null, "Select the javascript file named 'cldr.js', where constants will be reset.");
}

/**
 * Triggers other necessary events
 * 
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5D20AEEF-1DBB-43A4-867E-25B14BEF1B72"}
 */
function onDataChangeMessageChoice(oldValue, newValue, event) {
	var sMsg;
	if (fvMessageAction.equalsIgnoreCase("Create New")) {
		sMsg = "Select the folder that you wish to create the new i18n message resources within.";
	}
	else {
		sMsg = "Choose the 'default' i18n properties file in the resources folder that countains the existing files you wish to alter.";
	}

	elements.lblMessageChoice.text = sMsg;
	return true;
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"170BB056-62AA-433A-B2F6-DABA3EB7E471"}
 */
function onDataChangeCLDRDir(oldValue, newValue, event) {
	var aLocales = [];

	if (fvCLDRDir)
	{
		// Grab all the files in the cldr foldset
		var aFiles = plugins.file.getFolderContents(fvCLDRDir);

		// Build value list array by looping through the array of files and extracting only those locales we wish to make available. (Some folders are cldr utils) 
		aFiles.forEach(function(oFile){
			var sName = oFile.getName();
			if (oFile.isDirectory() && sName.indexOf("supplemental", 0) < 0 && sName.indexOf("root", 0) < 0)
			{
				aLocales.push(sName);
				return true;
			}
		});
	}
	application.setValueListItems("locales", aLocales);
	return true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"393951DA-FBC0-4AF4-965A-C54E6A98BFA2"}
 */
function onActionMessagesDir(event) {
	var sMsgDir;
	if (fvMessageAction.equalsIgnoreCase("Create New")) {
		sMsgDir = plugins.file.showFileOpenDialog(2, null, false, null, null, "Select the folder that you wish to create the new i18n message resources within.");
	}
	else {
		sMsgDir = plugins.file.showFileOpenDialog(1, null, false, null, null, "Choose the 'default' i18n properties file in the resources folder that countains the existing files you wish to alter.");
	}
	fvMessagesDir = sMsgDir;
	return true;
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D322F98E-A2CD-454B-A72B-686D6DBAA459"}
 */
function onDataChangeLocales(oldValue, newValue, event) {
	// grab the locales that were selected 
	var aToProcess = [];
	if (fvToProcess) {
		aToProcess = fvToProcess.split("\n");
	}

	application.setValueListItems("LocalesForProcessing", aToProcess);
	return true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"319126EC-70B3-4428-821D-85D5DCBC432C"}
 */
function onActionOk(event) {
	if ( !(fvCLDRDir && fvCodeFile && fvMessagesDir && fvToProcess && fvDefaultLocale) ) {
		return plugins.dialogs.showWarningDialog("Nope", "Something isn't filled in. Try again.");
	}

	var aToProcess = [];

	if (fvToProcess && fvToProcess.length > 0) {
		aToProcess = fvToProcess.split("\n");
	}
	scopes.cldrprocessor.run(fvCLDRDir, fvCodeFile, fvMessagesDir, aToProcess, fvDefaultLocale);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @history	01/03/2014	MSF	#AS-2856 Created method
 *
 * @properties={typeid:24,uuid:"A781EA01-D373-4A8C-AF71-30CB4812E799"}
 */
function onActionCancel(event) {
	fvCLDRDir = null;
	fvCodeFile = null;
	fvDefaultLocale = null;
	fvMessageAction = null;
	fvMessagesDir = null;
	fvToProcess = null;

	return true;
}
