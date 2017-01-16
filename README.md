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
	
	





## Methods

### `beautifyDate(date, [format, seperator])`

Generates a decorated date object where:
- `date` - date.
- `format` - optional format. Available formats are __yyyy, mm, yyyy-mm-dd, yyyy-mm-dd h:i, mm-dd-yyyy hh:ss__ . 
- `seperator` - optional Date sepeartor default "-".

```js
Utils.beautifyDate('01/16/2016', 'YYYY');
```

Generates the following response payload:

```json
2017
```
