var sha256 = require('js-sha256');

exports.encrypt = function(text) {
  return sha256(text);
}