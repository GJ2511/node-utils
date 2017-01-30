'use strict';
/**
 * @module startsWith
*/
 
/**
 * @function
 * @name startsWith
 * @param {string} string
 * @param {string} searchString string to search
 * @param {number} position position from where to search
 * @returns {boolean} 
 */
module.exports = (string, searchString, position) => {
	if(!string) return false;
	if(!searchString) return false;
	
	string = string.toLowerCase();
	searchString = searchString.toLowerCase();
	position = position || 0;
	
	return string.indexOf(searchString, position) === position;
};
