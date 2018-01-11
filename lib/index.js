'use strict';

var existy = require('swsutils/src/existy');
var attr = require('./attr.js');
var css = require('./css.js');
var display = require('./display.js');
var toggle = require('./toggle.js');

var ROOT_ID = 'sws-nav-drawer';
var HANDLE_ID = 'sws-nav-drawer-handle';
var COVER_ID = 'sws-nav-drawer-cover';
var STYLE_ID = 'sws-nav-drawer-style';
var IMAGE_ID = 'sws-nav-drawer-image';
var CLOSE_ID = 'sws-nav-drawer-close';

module.exports = function () {

  var el = document.getElementById(ROOT_ID);
  var elStyle = document.getElementById(STYLE_ID);
  var elHandle = document.getElementById(HANDLE_ID);
  var elCover = document.getElementById(COVER_ID);
  var elImage = document.getElementById(IMAGE_ID);
  var elClose = document.getElementById(CLOSE_ID);

  if (existy(el)) {
    el.setAttribute('inert', true);

    if (!existy(elStyle)) {
      elStyle = document.createElement('STYLE');
      elStyle.id = STYLE_ID;
      elStyle.textContent = css(el);
      document.head.appendChild(elStyle);
    }

    if (!existy(elHandle)) {
      elHandle = document.createElement('DIV');
      elHandle.id = HANDLE_ID;
      el.parentNode.insertBefore(elHandle, el);
    }

    if (!existy(elCover)) {
      elCover = document.createElement('DIV');
      elCover.id = COVER_ID;
      elCover.addEventListener('click', function () {
        toggle(el, 'close');
      });
      el.parentNode.insertBefore(elCover, el);
    }

    var hasClose = attr(el, 'data-sws-nav-drawer-has-close-button', 'true') === 'true';
    if (!existy(elClose) && hasClose) {
      elClose = document.createElement('DIV');
      elClose.id = CLOSE_ID;
      elClose.addEventListener('click', function () {
        toggle(el, 'close');
      });
      elCover.appendChild(elClose);
    }

    if (!existy(elImage)) {
      var _elImage = document.createElement('DIV');
      _elImage.id = IMAGE_ID;
      elHandle.appendChild(_elImage);
    }

    elHandle.addEventListener('click', function (e) {
      e.preventDefault();
      toggle(el);
    });

    window.addEventListener('resize', function () {
      display(el, elHandle);
    });
    display(el, elHandle);
  }
};