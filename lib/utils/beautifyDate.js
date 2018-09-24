'use strict';
/**
 * @module beautifyDate
 */

const MONTH_NAMES = require('../constant').MONTH_NAMES;

/**
 * @function
 * @name beautifyDate.getString
 * @param {integer} month no of month
 * @returns {string} returns the month (from 0 to 11)
 * @example november -> 11 and january -> 01
 */
const getString = month => month < 10 ? `0${month}` : month;

/**
 * @function
 * @name beautifyDate.getmonthName
 * @param {integer} month no of month
 * @returns {string} name of the month
 * @example 11 -> November
 */
const getmonthName = month => MONTH_NAMES[month];

/**
 * @function
 * @name beautifyDate.beautifyDate
 * @description change date according to the format given
 * @param {date} date date object
 * @param {string} format date format
 * @returns {date} returns the date according to the format given
 * @example format == 'yyyy' so date = 2015
 */
module.exports = (date, format, seperator = '-') => {

    if (!date) return;
	if(format) {
		format = format.toLowerCase();	
	}
	
    date = new Date(date);

    if (format == 'yyyy') {
        return date.getFullYear();
    }
	
	if (format == 'mm') {
        return getmonthName(date.getMonth())
    }
	
    if (format == 'yyyy-mm-dd') {
        return `${date.getFullYear()}${seperator}${getString(date.getMonth() + 1)}${seperator}${getString(date.getDate())}`
    }
	
    if (format == 'yyyy-mm-dd h:i') {
        return `${date.getFullYear()}${seperator}${getString(date.getMonth() + 1)}${seperator}${getString(date.getDate())} ${getString(date.getHours())}:${getString(date.getMinutes())}`;
    }
	
	if (format === 'mm-dd-yyyy hh:ss') {
        return `${getString(date.getMonth() + 1)}${seperator}${getString(date.getDate())}${seperator}${date.getFullYear()} ${getString(date.getHours())}:${getString(date.getMinutes())}`;
	}

    return `${getString(date.getDate())}${seperator}${getString(date.getMonth() + 1)}${seperator}${date.getFullYear()}, ${getString(date.getHours())}:${getString(date.getMinutes())}`;
};