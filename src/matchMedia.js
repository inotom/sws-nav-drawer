export default (width) => {
  return window.matchMedia('(max-width: ' + width + 'px)').matches;
};
