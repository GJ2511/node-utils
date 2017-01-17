'use strict'
const beautifyDate = require('./utils/beautifyDate');
const beautifyNumber = require('./utils/beautifyNumber');
const beautifyMoney = require('./utils/beautifyMoney');
const getDaysDiff = require('./utils/getDaysDiff');
const stripHtml = require('./utils/stripHtml');
const containsWord = require('./utils/containsWord');

const utils = {
	beautifyDate: beautifyDate,
	beautifyNumber: beautifyNumber,
	beautifyMoney: beautifyMoney,
	getDaysDiff: getDaysDiff,
	stripHtml: stripHtml,
	containsWord: containsWord
}


/**
 * Export default singleton.
 *
 * @api public
*/
module.exports = utils;