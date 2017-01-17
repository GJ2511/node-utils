'use strict';
/**
 * @module getRandomNumber 
*/

/**
 * @function
 * @name getRandomNumber.getRandomNumber 
 * @param {number} min
 * @param {number} max
 * @returns {boolean} 
 */
module.exports = (min = 0, max = 1) => {
 	return Math.floor(Math.random() * (max - min + 1)) + min;  
};