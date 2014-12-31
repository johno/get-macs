var macRegex = require('mac-regex');

module.exports = function(macs) {
  if(typeof macs !== 'string') {
    throw new TypeError('get-macs expects a string');
  }

  return macs.match(macRegex());
};
