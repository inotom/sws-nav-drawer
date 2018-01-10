const ACTIVE_BODY_CLASS_NAME = 'sws-nav-drawer-is-active';

const isOpen = () => {
  return document.body.classList.contains(ACTIVE_BODY_CLASS_NAME);
};

const open = (el) => {
  if (!isOpen()) {
    document.body.classList.add(ACTIVE_BODY_CLASS_NAME);
  }
  el.removeAttribute('inert');
};

const close = (el) => {
  if (isOpen()) {
    document.body.classList.remove(ACTIVE_BODY_CLASS_NAME);
  }
  el.setAttribute('inert', true);
};

module.exports = (el, nextState) => {
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
