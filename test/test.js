var assert = require('assert');
var getMacs = require('..');

describe('get-macs', function() {

  it('should throw an error when a string is not passed', function() {
    assert.throws(getMacs, TypeError, "get-macs expects a string");
  });
});
