'use strict'
/**
 * Export default singleton.
 *
 * @api public
*/
module.exports = {
	beautifyDate: require('./utils/beautifyDate'),
	beautifyNumber: require('./utils/beautifyNumber'),
	beautifyMoney: require('./utils/beautifyMoney'),
	getDaysDiff: require('./utils/getDaysDiff'),
	stripHtml: require('./utils/stripHtml'),
	containsWord: require('./utils/containsWord'),
	getRandomNumber: require('./utils/getRandomNumber'),
	isUrlValid: require('./utils/isUrlValid'),
	getPathFromUrl: require('./utils/getPathFromUrl'),
	getQueryString: require('./utils/getQueryString'),
	getQueryParamByName: require('./utils/getQueryParamByName'),
	startsWith: require('./utils/startsWith')
};
