'use strict'
const beautifyDate = require('./utils/beautifyDate');
const beautifyNumber = require('./utils/beautifyNumber');
const beautifyMoney = require('./utils/beautifyMoney');



const utils = {
	beautifyDate: beautifyDate,
	beautifyNumber: beautifyNumber,
	beautifyMoney: beautifyMoney
}


/**
 * Export default singleton.
 *
 * @api public
*/
module.exports = utils;