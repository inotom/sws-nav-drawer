'use strict';

var attr = require('./attr.js');
var matchMedia = require('./matchMedia.js');

module.exports = function (el) {
  var width = attr(el, 'data-sws-nav-drawer-mobile-width', 640);
  if (parseInt(width, 10) === -1) {
    return true;
  }
  return matchMedia(width);
};