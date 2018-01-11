'use strict';

module.exports = function (hex) {
  return hex.replace(/#/g, '%23');
};