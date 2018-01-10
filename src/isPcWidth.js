module.exports = (width) => {
  return window.matchMedia('(min-width: ' + width + 'px)').matches;
};
