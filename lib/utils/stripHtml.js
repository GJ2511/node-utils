'use strict';
/**
 * @module stripHtml
*/
const jsdom = require('jsdom');
 
/**
 * @function
 * @name stripHtml.stripAll
 * @param {string} HTML string
 * @example november -> 11 and january -> 01
 */
const stripAll = (str) => {
	str = stripOnlyScript(str);
	
	return new Promise((resolve, reject) => {
		jsdom.env(str, (err, window) => {
			if(err) reject('');

			let tmp = window.document.createElement("DIV");
			tmp.innerHTML = str;		
			resolve( tmp.textContent || tmp.innerText || '');
	  	});
	})
	.catch( err => {
		resolve('');
	});
}

/**
 * @function
 * @name stripHtml.stripOnlyScript
 * @param {string} HTML string
 * @example november -> 11 and january -> 01
 */
const stripOnlyScript = (str) => {
	return str.replace(/<script.*?>.*?<\/script>/igm, '');
}

/**
 * @function
 * @name stripHtml.strip
 * @param {string} HTML string
 * @param {boolena} all
 * @returns {string} 
 */
module.exports = (html, all) => {

    if (!html || !html.length) return '';

	if(all) return new Promise((resolve, reject) => {
			stripAll(html)
			.then(str => {
					resolve(str);
			});
	});

	return new Promise((resolve, reject) => {
		resolve(stripOnlyScript(html));
	});
};