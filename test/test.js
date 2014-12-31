var assert = require('assert');
var blank = require('is-blank');
var getMacs = require('..');

describe('get-macs', function() {

  it('should throw an error when a string is not passed', function() {
    assert.throws(getMacs, TypeError, "get-macs expects a string");
  });

  it('should return the macs within a string', function() {
    var macs = ['aa:bb:cc:dd:ee:ff', '11-22-33-44-55-66', 'AA-BB-cc-DD-33-aA'];
    assert.deepEqual(getMacs(macs.join()), macs);
  });

  it('should not return macs when they do not exist', function() {
    assert.ok(blank(getMacs('aa-bb-cc-dd blah')));
  });
});
