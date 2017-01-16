'use strict'
const beautifyDate = require('./utils/beautifyDate');
const beautifyNumber = require('./utils/beautifyNumber');




const utils = {
	beautifyDate: beautifyDate,
	beautifyNumber: beautifyNumber
}


/**
 * Export default singleton.
 *
 * @api public
*/
module.exports = utils;