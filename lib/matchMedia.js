'use strict';

module.exports = function (width) {
  return window.matchMedia('(max-width: ' + width + 'px)').matches;
};