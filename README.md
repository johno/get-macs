# Get Macs

[![Build Status](https://travis-ci.org/johnotander/get-macs.svg?branch=master)](https://travis-ci.org/johnotander/get-macs)

Get all MAC addresses contained within a string.

## Installation

```
npm i --save get-macs
```

## Usage

```javascript
var isMac = require('get-macs');

isMac('no macs here') // => []
isMac('aa-bb-cc-dd-ee-ff aa:bb:cc:dd:ee:ff')
// => ['aa-bb-cc-dd-ee-ff', 'aa:bb:cc:dd:ee:ff']

isMac({}) // => throws TypeError
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
