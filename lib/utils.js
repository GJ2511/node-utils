'use strict'
const beautifyDate = require('./utils/beautifyDate');
const beautifyNumber = require('./utils/beautifyNumber');
const beautifyMoney = require('./utils/beautifyMoney');
const getDaysDiff = require('./utils/getDaysDiff');
const stripHtml = require('./utils/stripHtml');

const utils = {
	beautifyDate: beautifyDate,
	beautifyNumber: beautifyNumber,
	beautifyMoney: beautifyMoney,
	getDaysDiff: getDaysDiff,
	stripHtml: stripHtml
}


/**
 * Export default singleton.
 *
 * @api public
*/
module.exports = utils;