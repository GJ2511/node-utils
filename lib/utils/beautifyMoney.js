'use strict';
/**
 * @module beautifyMoney
 */

const CURRENCY_SYMBOLS = require('../constant').CURRENCY_SYMBOLS;
const beautifyNumber = require('./beautifyNumber');

/**@function
 * @name beautifyMoney.beautifyMoney
 * @param {integer} amount amount to beautify
 * @param {string} currency current currency format
 * @param {boolean} raw
 * @returns {string} returns the currency with proper format
   @example amount -> 161111 -> $16.1
 */

module.exports = (amount, currency, raw) => {
    
	let symbol = '$';
	if (typeof amount == 'undefined') {
        return 0;
    }
	
	if(CURRENCY_SYMBOLS[currency]) {
		symbol = CURRENCY_SYMBOLS[currency];
	}
	
    if (raw) {
        return `${symbol}${amount}`;
    }
    
    return `${symbol}${beautifyNumber(amount, 2)}`;
};