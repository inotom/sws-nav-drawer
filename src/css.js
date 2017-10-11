import existy from 'swsutils/src/existy';
import attr from './attr.js';
import isPcWidth from './isPcWidth.js';

export default (el) => {
  let size    = parseInt(attr(el, 'data-sws-nav-drawer-size', 50), 10);
  let bgColor = attr(el, 'data-sws-nav-drawer-bg-color', '#ffc966');
  let fgColor = attr(el, 'data-sws-nav-drawer-fg-color', '#ffffff');
  let image   = attr(el, 'data-sws-nav-drawer-src', null);
  let zIndex  = parseInt(attr(el, 'data-sws-nav-drawer-z-index', 1000), 10);
  let isLeft  = attr(el, 'data-sws-nav-drawer-position', 'left') === 'left';

  let lineColor = fgColor.replace(/#/g, '%23');
  let bgImage = existy(image) ? `url(${image})` : `url("data:image/svg+xml;charset=utf8, %3Csvg xmlns=%22http://www.w3.org/2000/svg%22 x=%220px%22 y=%220px%22 width=%2240px%22 height=%2240px%22 viewBox=%220 0 40 40%22%3E%3Crect fill=%22${lineColor}%22 x=%225%22 y=%2217%22 width=%2230%22 height=%224%22/%3E%3Crect fill=%22${lineColor}%22 x=%225%22 y=%227%22 width=%2230%22 height=%224%22/%3E%3Crect fill=%22${lineColor}%22 x=%225%22 y=%2227%22 width=%2230%22 height=%224%22/%3E%3C/svg%3E")`;

  return `
#sws-nav-drawer-handle {
  overflow: hidden;
  display: block;
  position: relative;
  width: ${size}px;
  height: ${size}px;
  color: ${fgColor};
  background-color: ${bgColor};
  cursor: pointer;
}
#sws-nav-drawer-image {
  display: block;
  position: relative;
  width: ${size}px;
  height: ${size}px;
  background: transparent ${bgImage} no-repeat 50% 50%;
  background-size: 100% 100%;
}

#sws-nav-drawer {
  overflow-y: scroll;
  position: fixed;
  ${isLeft ? 'left: -80vw' : 'right: -80vw'};
  top: 0;
  z-index: ${zIndex + 1};
  width: 80vw;
  max-width: 320px;
  height: 100%;
  background-color: #eee;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: ${isLeft ? 'left' : 'right'} .3s ease-out 0s, box-shadow .3s ease-out 0s;
}
#sws-nav-drawer-cover {
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, .7);
  opacity: 0;
  transform: scale(0);
  transition: opacity .3s ease-out 0s, transform 0s linear .3s;
}
#sws-nav-drawer-close {
  display: block;
  position: absolute;
  ${isLeft ? 'left' : 'right'}: -${size}px;
  top: 5px;
  width: ${size}px;
  height: ${size}px;
  background: transparent url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 x=%220px%22 y=%220px%22 width=%2240px%22 height=%2240px%22 viewBox=%220 0 40 40%22%3E%3Cpolygon fill=%22%23ffffff%22 points=%2232.021,10.808 29.192,7.979 20,17.171 10.808,7.979 7.979,10.808 17.171,20 7.979,29.193 10.808,32.021 20,22.828 29.192,32.021 32.021,29.193 22.828,20 %22/%3E%3C/svg%3E") no-repeat 50% 50%;
  background-size: 100% 100%;
  cursor: pointer;
  transition: ${isLeft ? 'left' : 'right'} .3s ease-out 0s;
}
.sws-nav-drawer-is-active {
  overflow: hidden;
}
.sws-nav-drawer-is-active #sws-nav-drawer {
  ${isLeft ? 'left: 0' : 'right: 0'};
  box-shadow: 2px 0 10px rgba(0, 0, 0, .3);
}
.sws-nav-drawer-is-active #sws-nav-drawer-cover {
  opacity: 1;
  z-index: ${zIndex};
  transition: ${isLeft ? 'left' : 'right'} .3s ease-out 0s;
  transform: scale(1);
  transition: opacity .3s ease-out 0s, transform 0s linear 0s, z-index 0s linear .3s;
}
.sws-nav-drawer-is-active #sws-nav-drawer-close {
  ${isLeft ? 'left' : 'right'}: ${isPcWidth(640) ? '320px' : '80vw'};
  transition: ${isLeft ? 'left' : 'right'} .6s ease-out .3s;
}
`;
};
