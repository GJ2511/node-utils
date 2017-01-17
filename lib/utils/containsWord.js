'use strict';
/**
 * @module containsWord
*/

/**
 * @function
 * @name containsWord.containsWord
 * @param {string} string string
 * @param {boolena} word
 * @returns {boolean} 
 */
module.exports = (string, word) => {

    if (!string || !string.length) return false;
	
	if (!word || !word.length) return false;

	return string.replace(/[^a-zA-Z0-9 ]/gi, '').split(" ").indexOf(word) > -1;
};