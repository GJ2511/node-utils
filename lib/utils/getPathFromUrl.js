'use strict';
/**
 * @module getPathFromUrl
*/
 
/**
 * @function
 * @name getPathFromUrl
 * @param {string} url string
 * @returns {string} 
 */
module.exports = (url) => {
	if(!url) return '';
    return url.split("?")[0];
};