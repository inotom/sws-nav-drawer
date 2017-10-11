import attr from './attr.js';
import matchMedia from './matchMedia.js';

export default (el) => {
  let width  = attr(el, 'data-sws-nav-drawer-mobile-width', 640);
  if (parseInt(width, 10) === -1) {
    return true;
  }
  return matchMedia(width);
};
