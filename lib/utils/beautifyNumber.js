'use strict';
/**
 * @module beautyNumber
 */

const UNITS = require('../constant').UNITS;

/**@function
 * @name beautyNumber.beautyNumber
 * @description beautify the number
 * @param {integer} number number to beautify
 * @param {integer} decPlaces default 0
 * @returns {string} returns the number according to the format given
 * @example defaultZero == 1 and number =1000 then number return = 1K
 */
module.exports = (number, decPlaces = 0) => {
	
	if(!number) return 0;

    decPlaces = Math.pow(10, decPlaces);

    // Go through the array backwards, so we do the largest first
    for (let i=UNITS.length-1; i>=0; i--) {

        let size = Math.pow(10,(i+1)*3);

        if(size <= number) {
            number = Math.round(number*decPlaces/size)/decPlaces;

            // Handle special case where we round up to the next abbreviation
            if((number == 1000) && (i < UNITS.length - 1)) {
                number = 1;
                i++;
            }
            // Add the letter for the abbreviation
            number += UNITS[i];			
            break;
        }
    }

    return number;
};