const isMobile = require('./isMobile.js');

module.exports = (el, elHandle) => {
  let display = 'none';
  if (isMobile(el)) {
    display = 'block';
  }
  el.style.display = display;
  elHandle.style.display = display;
};
