const existy = require('swsutils/src/existy');
const attr = require('./attr.js');
const css = require('./css.js');
const display = require('./display.js');
const toggle = require('./toggle.js');

const ROOT_ID   = 'sws-nav-drawer';
const HANDLE_ID = 'sws-nav-drawer-handle';
const COVER_ID  = 'sws-nav-drawer-cover';
const STYLE_ID  = 'sws-nav-drawer-style';
const IMAGE_ID  = 'sws-nav-drawer-image';
const CLOSE_ID  = 'sws-nav-drawer-close';

module.exports = () => {

  const el     = document.getElementById(ROOT_ID);
  let elStyle  = document.getElementById(STYLE_ID);
  let elHandle = document.getElementById(HANDLE_ID);
  let elCover  = document.getElementById(COVER_ID);
  let elImage  = document.getElementById(IMAGE_ID);
  let elClose  = document.getElementById(CLOSE_ID);

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
      elCover.addEventListener('click', () => {
        toggle(el, 'close');
      });
      el.parentNode.insertBefore(elCover, el);
    }

    const hasClose = attr(el, 'data-sws-nav-drawer-has-close-button', 'true') === 'true';
    if (!existy(elClose) && hasClose) {
      elClose = document.createElement('DIV');
      elClose.id = CLOSE_ID;
      elClose.addEventListener('click', () => {
        toggle(el, 'close');
      });
      elCover.appendChild(elClose);
    }

    if (!existy(elImage)) {
      let elImage = document.createElement('DIV');
      elImage.id = IMAGE_ID;
      elHandle.appendChild(elImage);
    }

    elHandle.addEventListener('click', (e) => {
      e.preventDefault();
      toggle(el);
    });

    window.addEventListener('resize', () => {
      display(el, elHandle);
    });
    display(el, elHandle);
  }
};
