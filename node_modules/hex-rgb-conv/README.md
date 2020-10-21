# hex-rgb-conv [![Build Status](https://travis-ci.org/damianpolak/hex-rgb-conv.svg?branch=master)](https://travis-ci.org/damianpolak/hex-rgb-conv)

> Convert 6 digits and 3 digits hex color codes to RGB values. Returns object and arrays.

## Install

```
$ npm install hex-rgb-conv
```

## Usage

```js
const hexRgbConv = require('hex-rgb-conv');
hexRgbConv('#0DC4DE');
// returns '{ red: 13, green: 196, blue: 222 }'
hexRgbConv('FFCCDD');
// returns '{ red: 255, green: 204, blue: 221 }'
hexRgbConv('#E45120');
// returns '{ red: 228, green: 81, blue: 32 }'
hexRgbConv('DFA');
// returns '{ red: 221, green: 255, blue: 170 }'
hexRgbConv('#C1F'));
// returns '{ red: 204, green: 17, blue: 255 }'
hexRgbConv('172'));
// returns '{ red: 17, green: 119, blue: 34 }'
hexRgbConv('#C56', true);
// returns '[ 204, 85, 102 ]'
hexRgbConv('#123', true);
// returns '[ 17, 34, 51 ]'
hexRgbConv('172DF2', true);
// returns '[ 23, 45, 242 ]'
hexRgbConv('#E5F3C8', true);
//returns '[ 229, 243, 200 ]'
```

## License

MIT © Damian Polak
