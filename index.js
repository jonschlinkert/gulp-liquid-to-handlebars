'use strict';

var through = require('through2');
var convert = require('liquid-to-handlebars');

module.exports = function(options) {
  return through.obj(function(file, enc, next) {
    if (file.isNull()) {
      next(null, file);
      return;
    }

    file.contents = new Buffer(convert(file.contents.toString(), options));
    next(null, file);
  });
};
