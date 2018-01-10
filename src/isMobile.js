const attr = require('./attr.js');
const matchMedia = require('./matchMedia.js');

module.exports = (el) => {
  let width  = attr(el, 'data-sws-nav-drawer-mobile-width', 640);
  if (parseInt(width, 10) === -1) {
    return true;
  }
  return matchMedia(width);
};
