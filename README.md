# node-utils
Node.js module exposing some of the basic utils that helps in basic development which I came across during development

Author: [Gaurav Joshi](https://github.com/GJ2511/)

## Start
```js
const Utils = require('node-utils');
```

- [node-utils](#start)
	- [Methods](#methods)
		- [`beautifyDate(date, [format, seperator])`](#user-content-beautifydatedate-format-seperator)
		- [`beautifyMoney(amount, [currency, raw])`](#user-content-beautifymoneyamount-currency-raw)
		- [`beautifyNumber(number, [decPlaces])`](#user-content-beautifynumbernumber-decplaces)
		- [`containsWord(string, word)`](#user-content-containswordstring-word)
		- [`getDaysDiff(date)`](#user-content-getdaysdiffdate)
		- [`getPathFromUrl(url)`](#user-content-getpathfromurlurl)
		- [`getQueryParamByName(param, url)`](#user-content-getqueryparambynameparam-url)
		- [`getQueryString(url)`](#user-content-getquerystringurl)
		- [`getRandomNumber(min, max)`](#user-content-getrandomnumbermin-max)
		- [`getRandomString(len, charStr)`](#user-content-getrandomstringlen-charstr)
		- [`isUrlValid(url)`](#user-content-isurlvalidurl)
		- [`startsWith(string, searchString, [position])`](#user-content-startswithstring-searchstring-position)	
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

- - -

### `containsWord(string, word)`

Checks word exists in the string and return true or false accordingly. (*NOTE: check existence of complete word not sub string)
- `string` - string - string in which to check
- `word` - word - word to check

```js
	Utils.containsWord('Hi I am a MEAN stack developer', 'MEAN');
	 AND
	Utils.containsWord('Hi I am a MEAN stack developer', 'velop');
```

Returns following result:

```json
true

AND

false
```

- - -

### `getRandomNumber(min, max)`

Returns random number between passed range
- `min` - number - min range __default 0__
- `max` - number - max range __default 1__

```js
	Utils.getRandomNumber(1, 5);
```

Returns __number__

- - -

### `isUrlValid(url)`

Returns random number between passed range
- `url` - string - URL string

```js
	Utils.isUrlValid('https://☺.damowmow.com/');
```

Returns __boolean__

```json
true
```

- - -

### `getPathFromUrl(url)`

Returns path from url skipping query parameters
- `url` - string - URL string

```js
	Utils.getPathFromUrl('https://☺.damowmow.com?a=3');
```

Returns __string__

```json
https://☺.damowmow.com
```

- - -

### `getQueryString(url)`

Returns query string parameters as an javascript oblect
- `url` - string - URL string

```js
	Utils.getQueryString('https://☺.damowmow.com?a=3&b=4');
```

Returns __object__

```json
{"a": 3, "b": 4}
```

- - -

### `getQueryParamByName(param, url)`

Returns query string values 
- `param` - string - Param name
- `url` - string - URL string

```js
	Utils.getQueryParamByName('a', 'https://☺.damowmow.com?a=3&b=4');
```

Returns value or null

```json
3
```

- - -

### `startsWith(string, searchString, [position])`

Determines whether the beginning of searchString instance matches the specified string when compared using the position.

- `string` - string - The string from compare.
- `searchString` - string - The string to compare.
- `position` - number - position

```js
	Utils.startsWith('Hello MEAN developers', 'EAN', 7);
```

Returns __boolean__

```json
true
```

- - -

### `getRandomString(len, charStr)`

Returns random string of passed length
- `len` - number - length of random string __default 4__
- `charStr` - string - charcters list to create random string __default aplha numeric__

```js
	Utils.getRandomString(4);
```

Returns __string__

- - -