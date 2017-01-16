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
