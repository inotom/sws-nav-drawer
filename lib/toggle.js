'use strict';

var ACTIVE_BODY_CLASS_NAME = 'sws-nav-drawer-is-active';

var isOpen = function isOpen() {
  return document.body.classList.contains(ACTIVE_BODY_CLASS_NAME);
};

var open = function open(el) {
  if (!isOpen()) {
    document.body.classList.add(ACTIVE_BODY_CLASS_NAME);
  }
  el.removeAttribute('inert');
};

var close = function close(el) {
  if (isOpen()) {
    document.body.classList.remove(ACTIVE_BODY_CLASS_NAME);
  }
  el.setAttribute('inert', true);
};

module.exports = function (el, nextState) {
  switch (nextState) {
    case 'open':
      open(el);
      break;
    case 'close':
      close(el);
      break;
    default:
      if (isOpen()) {
        close(el);
      } else {
        open(el);
      }
  }
};