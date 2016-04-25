# random-coordinates

> Generate a random coordinates, which are latitude and longitude, comma separated.
  

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-coordinates/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-coordinates/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-coordinates)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-coordinates/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-coordinates)


## Install

```
$ npm install --save random-coordinates 
```

## Usage

```js
var randomCoordinates = require('random-coordinates');

// API
// - randomCoordinates([options]);

// options
// - fixed

randomCoordinates();
// => "-29.52974, 24.52815"
```

By default includes 5 fixed digits after decimal, can specify otherwise.

```js
randomCoordinates({ fixed: 2 })
// => "-49.16, 68.81"
```

## Related

- [random-latitude](https://github.com/mock-end/random-latitude) - Generate a random latitude.
- [random-longitude](https://github.com/mock-end/random-longitude) - Generate a random longitude.
- [random-altitude](https://github.com/mock-end/random-altitude) - Generate a random altitude, in meters.
- [random-depth](https://github.com/mock-end/random-depth) - Generate a random depth, in meters. Depths are always negative.
- [random-geohash](https://github.com/mock-end/random-geohash) - Generate a random geohash.
- [random-geojson](https://github.com/mock-end/random-geojson) - Generate a random geojson.
- [random-country](https://github.com/mock-end/random-country) - Return a random country. 
- [random-lang](https://github.com/mock-end/random-lang) - Return a random language name.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-coordinates/issues/new).
