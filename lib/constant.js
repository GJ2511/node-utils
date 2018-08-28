const MONTH_NAMES = [
	'January', 
	'February', 
	'March', 
	'April', 
	'May', 
	'June',
    'July', 
	'August', 
	'September', 
	'October', 
	'November', 
	'December'
];

const CURRENCY_SYMBOLS = {
    USD: '$', // US Dollar
    EUR: '€', // Euro
    CRC: '₡', // Costa Rican Colón
    GBP: '£', // British Pound Sterling
    ILS: '₪', // Israeli New Sheqel
    INR: '₹', // Indian Rupee
    JPY: '¥', // Japanese Yen
    KRW: '₩', // South Korean Won
    NGN: '₦', // Nigerian Naira
    PHP: '₱', // Philippine Peso
    PLN: 'zł', // Polish Zloty
    PYG: '₲', // Paraguayan Guarani
    THB: '฿', // Thai Baht
    UAH: '₴', // Ukrainian Hryvnia
    VND: '₫', // Vietnamese Dong
};

const UNITS = ['K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];


/**
 * Export default singleton.
 *
 * @api public
*/
module.exports = {MONTH_NAMES, CURRENCY_SYMBOLS, UNITS}