'use strict';
/**
 * @module getRandomString
*/
/**
 * @function
 * @name getRandomString
 * @param {number} len random string length (default 4)
 * @param {string} charStr character string optional
 * @returns {string} random string of desired length
 */
module.exports = (len= 4, charStr= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => {
    let returnArr = [];
    while (len--) {
        returnArr.push(charStr[Math.floor(Math.random() * charStr.length)]);
    }
    
    return returnArr.join('');
};