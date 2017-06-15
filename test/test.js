'use strict';

require('mocha');
var fs = require('fs');
var path = require('path');
var File = require('vinyl');
var assert = require('assert');
var convert = require('../');

function read(filepath) {
  return fs.readFileSync(filepath, 'utf8');
}
function fixture(name) {
  return path.resolve(__dirname, 'fixtures', name + '.liquid');
}
function expected(name) {
  return read(path.resolve(__dirname, 'expected', name + '.hbs'));
}

describe('gulp-liquid-to-handlebars', function() {
  it('should export a function(sanity check)', function() {
    assert.equal(typeof convert, 'function');
  });
});

describe('plugin', function() {
  it('should return an object', function() {
    assert(convert());
    assert.equal(typeof convert(), 'object');
    assert.equal(typeof convert().pipe, 'function');
  });

  it('should not fail on non-existent files', function(cb) {
    var stream = convert();
    var buffer = [];

    stream.write(new File({
      base: __dirname,
      path: __dirname + '/fooooo.txt'
    }));

    stream.on('data', function(file) {
      buffer.push(file);
    });

    stream.on('end', function() {
      assert.equal(buffer.length, 1);
      assert.equal(buffer[0].relative, 'fooooo.txt');
      cb();
    });

    stream.end();
  });

  it('should convert variables', function(cb) {
    unit('variables', {}, cb);
  });

  it('should prefix "page" with "@" in variables', function(cb) {
    unit('page', {prefix: '@'}, cb);
  });

  it('should prefix "site" with "@" in variables', function(cb) {
    unit('site', {prefix: '@'}, cb);
  });

  it('should convert loops', function(cb) {
    unit('loops', {prefix: '@'}, cb);
  });
});

function unit(filename, options, cb) {
  var stream = convert(options);
  var buffer = [];

  var filepath = fixture(filename);

  stream.write(new File({
    base: __dirname,
    path: filepath,
    contents: fs.readFileSync(filepath)
  }));

  stream.on('data', function(file) {
    buffer.push(file);
  });

  stream.on('end', function() {
    assert.equal(buffer.length, 1);
    assert.equal(buffer[0].contents.toString(), expected(filename));
    cb();
  });

  stream.end();
}
