'use strict';

var isMobile = require('./isMobile.js');

module.exports = function (el, elHandle) {
  var display = 'none';
  if (isMobile(el)) {
    display = 'block';
  }
  el.style.display = display;
  elHandle.style.display = display;
};