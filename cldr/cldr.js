/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B60EB2D1-02FA-40BB-9125-4C2DD47B019C"}
 */
var VERSION = '1.0.2';


/**
 * Get a locale specific format string based on an i18n pattern name. If not found defaults back to original pattern.
 *
 * @param {String} sPattern
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"8151B94B-7D26-48FF-9E01-F7D360581093"}
 */
function getLocaleFormat(sPattern) {
	var sFormat = i18n.getI18NMessage(sPattern);
	var sInvalidKey = '!' + sPattern + '!';
	if (sFormat == sInvalidKey) {
		sFormat = sPattern;
	}
	return sFormat;
}

/**
 * Get a format string for a given currency code in the locale format
 * @param {String} [sPattern]
 * @param {String} [sCode]
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"72AE6840-333D-42BA-841F-02F3EF74C03E"}
 */
function getCurrencyFormat(sPattern, sCode) {
	sPattern = sPattern || CURRENCY.STANDARD;

	var sFormat = getLocaleFormat(sPattern);

	var sCountry = i18n.getCurrentCountry();
	var sCurrentCode = getCurrencyCode(sCountry);

	//If formatting for a code that is not the currently selected locale, formatting needs to be adjusted
	if (sCode && sCode != sCurrentCode) {
		//Symbol used by the currently selected locale to represent the given code
		var sAlternateSymbol = i18n.getI18NMessage(CURRENCY.CURRENCIES.SYMBOL[sCode]);

		//Symbol that is used to replace '¤' for the current country
		var sCurrentCountrySymbol = getCurrencySymbol(sCountry);

		//Symbol is ambiguous with current locale's currency, use country code instead
		if (sAlternateSymbol == sCurrentCountrySymbol) {
			sAlternateSymbol = sCode;
		}
		sFormat = utils.stringReplace(sFormat, '¤', sAlternateSymbol);
	}
	return sFormat;
}


/**
 * Parses a date object into a string based on a format stored in an i18n key
 *
 * @param {Date}	dDate
 * @param {String}	sPattern
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"3E56AAA7-262A-46FC-96D2-6FDD6B0E5A9C"}
 */
function dateFormat(dDate, sPattern) {
	var sFormat = getLocaleFormat(sPattern);
	return utils.dateFormat(dDate, sFormat);
}

/**
 * Parses a number into a string based on a format stored in an i18n key
 *
 * @param {Number}	nNumber
 * @param {String}	sPattern
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"4FF547F8-0FF9-401C-A032-D45E294083F0"}
 */
function numberFormat(nNumber, sPattern) {
	var sFormat = getLocaleFormat(sPattern);
	return utils.numberFormat(nNumber, sFormat);
}

/**
 * Format a number as a a locale specific currency
 *
 * @param {Number} nMoney
 * @param {String} [sPattern] i18n format key. Defaults to standard currency format. If not found is treated as a formatting string
 * @param {String} [sCode] Specify currency code to use (when omitted defaults to standard locale symbol)
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"5B7B3E22-D447-4815-86AC-58549998E7EE"}
 */
function currencyFormat(nMoney, sPattern, sCode) {
	sPattern = sPattern || CURRENCY.STANDARD;
	var sFormat = getCurrencyFormat(sPattern,sCode);
	return utils.numberFormat(nMoney, sFormat);
}

/**
 * Get the currency symbol for a given language/country combination
 * @param {String} [sCountry] Defaults to current i18n setting
 * @param {String} [sLanguage] Defaults to current i18n setting
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"FB0F09EB-AD1D-42B8-8696-62F6B474FDFA"}
 */
function getCurrencySymbol(sCountry, sLanguage) {
	sCountry = sCountry || i18n.getCurrentCountry();
	sLanguage = sLanguage || i18n.getCurrentLanguage();
	return java.util.Currency.getInstance(new java.util.Locale(sLanguage, sCountry)).getSymbol();
}

/**
 * Get the currency code for a given language/country combination
 * @param {String} [sCountry] Defaults to current i18n setting
 * @param {String} [sLanguage] Defaults to current i18n setting
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"353D5B83-E4FA-40F4-B4C8-E95BE89F4E25"}
 */
function getCurrencyCode(sCountry, sLanguage) {
	sCountry = sCountry || i18n.getCurrentCountry();
	sLanguage = sLanguage || i18n.getCurrentLanguage();
	return java.util.Currency.getInstance(new java.util.Locale(sLanguage, sCountry)).getCurrencyCode();
}