'use strict';
/**
 * @module getDaysDiff
 */

/** @function
*  @name getDaysDiff.getDaysDiff
*  @param {date} value - Date
*  @returns {integer} no of days between Current date and passed date
**/
module.exports = (value) => {
    if (!value) {
        return 0;
    }
	
    const oneDay = 24 * 60 * 60 * 1000;
    const compareDate = new Date(value);
    const currentDate = new Date();
    const diffDays = Math.round(Math.abs((compareDate.getTime() - currentDate.getTime()) / (oneDay)));

    return diffDays;
};