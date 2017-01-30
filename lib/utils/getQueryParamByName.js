'use strict';
/**
 * @module getQueryParamByName
*/
 
/**
 * @function
 * @name getQueryParamByName
 * @param {string} name parameter name
 * @param {string} url string
 * @returns {string} 
 */
module.exports = (name, url) => {
	if (!url) return null;
	
    name = name.replace(/[\[\]]/g, "\\$&");
	
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};