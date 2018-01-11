'use strict';

module.exports = function (width) {
  return window.matchMedia('(min-width: ' + width + 'px)').matches;
};