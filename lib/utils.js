'use strict'
const beautifyDate = require('./utils/beautifyDate');
const beautifyNumber = require('./utils/beautifyNumber');
const beautifyMoney = require('./utils/beautifyMoney');
const getDaysDiff = require('./utils/getDaysDiff');
const stripHtml = require('./utils/stripHtml');
const containsWord = require('./utils/containsWord');
const getRandomNumber = require('./utils/getRandomNumber');
const isUrlValid = require('./utils/isUrlValid');

const utils = {
	beautifyDate: beautifyDate,
	beautifyNumber: beautifyNumber,
	beautifyMoney: beautifyMoney,
	getDaysDiff: getDaysDiff,
	stripHtml: stripHtml,
	containsWord: containsWord,
	getRandomNumber: getRandomNumber,
	isUrlValid: isUrlValid
}


/**
 * Export default singleton.
 *
 * @api public
*/
module.exports = utils;