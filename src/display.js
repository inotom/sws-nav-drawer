import isMobile from './isMobile.js';

export default (el, elHandle) => {
  let display = 'none';
  if (isMobile(el)) {
    display = 'block';
  }
  el.style.display = display;
  elHandle.style.display = display;
};
