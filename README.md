# node-utils
Node.js module exposing some of the basic utils that helps in basic development

Author: [Gaurav Joshi](https://github.com/GJ2511/countries)

## Start
```js
const Utils = require('node-utils');
```

- [node-utils](#start)
  - [Methods](#methods)
    - [`beautifyDate(date, [format, seperator])`](#user-content-beautifydatedate-format-seperator)
	- [`beautifyNumber(number, [decPlaces])`](#user-content-beautifynumbernumber-decplaces)
	- [`beautifyMoney(amount, [currency, raw])`](#user-content-beautifymoneyamount-currency-raw)
	- [`getDaysDiff(date)`](#user-content-getdaysdiffdate)
	- [`stripHtml(html, [all])`](#user-content-striphtmlhtml-all)
	
	





## Methods

### `beautifyDate(date, [format, seperator])`

Generates a decorated date object where:
- `date` - date.
- `format` - optional format. Available formats are __yyyy, mm, yyyy-mm-dd, yyyy-mm-dd h:i, mm-dd-yyyy hh:ss__ . 
- `seperator` - optional Date sepeartor default "-".

```js
Utils.beautifyDate('01/16/2016', 'YYYY');
```

Returns following result:

```json
2017
```

- - -

### `beautifyNumber(number, [decPlaces])`

Generates a decorated Number where:
- `number` - number.
- `decPlaces` - optional format. Decimal place to round of number .

```js
Utils.beautifyNumber(1050000, 2);
```

Returns following result:

```json
1.05M
```

- - -

### `beautifyMoney(amount, [currency, raw])`

Generates a decorated amount where:
- `amount` - amount.
- `currency` - optional currency. Available currency format __USD,EUR,CRC,GBP,ILS,INR,JPY,KRW,NGN,PHP,PLN,PYG,THB,UAH,VND__. Default __USD__ 
- `raw` - optional raw. {boolean}

```js
Utils.beautifyMoney(1545, 'GBP')
```

Returns following result:

```json
£1.55K
```
- - -

### `getDaysDiff(date)`

Returns days diff from current date
- `date` - date.

```js
Utils.getDaysDiff('01/01/2017')
```

Returns following result:

```json
16
```

- - -

### `stripHtml(html, [all])`

Strips HTML content from HTML string. (Returns a promise)
- `html` - HTML string.
- `all` - __Boolean__ If __true__ strips all HTML content otherwise strips only script tag and its content

```js
	Utils.stripHtml('<script>alert(1);</script><p>HI GAURAV JOSHI</p><script>alert(1);</script>', true)
	.then( str => {
		console.log(str);
	});
```

Returns following result:

```json
HI GAURAV JOSHI
```
