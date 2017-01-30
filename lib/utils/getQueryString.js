'use strict';
/**
 * @module getQueryString 
*/
 
/**
 * @function
 * @name getQueryString 
 * @param {string} url string
 * @returns {string} 
 */
module.exports =  ( url ) => {
	let retObj = {};
	if (!url) return retObj;
	
    let str = url.split('?')[1];
	
	if(!str) return retObj;
	
	let query = str.split('&');
	
	for (let i = 0; i < query.length; i++){
		let pair = query[i].split('=');
		retObj[pair[0]] = pair[1];
	};
	
	return retObj;
};

