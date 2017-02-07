# gulp-liquid-to-handlebars [![NPM version](https://img.shields.io/npm/v/gulp-liquid-to-handlebars.svg?style=flat)](https://www.npmjs.com/package/gulp-liquid-to-handlebars) [![NPM monthly downloads](https://img.shields.io/npm/dm/gulp-liquid-to-handlebars.svg?style=flat)](https://npmjs.org/package/gulp-liquid-to-handlebars)  [![NPM total downloads](https://img.shields.io/npm/dt/gulp-liquid-to-handlebars.svg?style=flat)](https://npmjs.org/package/gulp-liquid-to-handlebars)

> Convert liquid templates to handlebars templates. There are so many resources for jekyll and liquid on github, but handlebars is a better engine for javascript.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save gulp-liquid-to-handlebars
```

## Usage

Thi is a plugin for [liquid-to-handlebars](https://github.com/jonschlinkert/liquid-to-handlebars), see that project for full details and documentation.

```js
var gulp = require('gulp');
var convert = require('gulp-liquid-to-handlebars');

gulp.task('templates', function() {
  return gulp.src('jekyll_project/**/*.{html,md}')
    .pipe(convert())
    .pipe(gulp.dest('dist'));
});

gulp.task('assets', function(cb) {
  return gulp.src(['**/*', '!**/*.{html,md}'], {dot: true})
    .pipe(gulp.dest('dist'));
});
```

## About

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
MIT

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.4.2, on February 07, 2017._