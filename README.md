# @inotom/sws-nav-drawer

Toggle root element attribute for navigation drawer.


## Demo

[Demo](https://sandbox.serendip.ws/sws-nav-drawer.html)


## Install

### npm

```
npm install -D @inotom/sws-nav-drawer
```


## Usage

### Browser

```html
<script src="sws-nav-drawer.min.js"></script>
<script>
SwsNavDrawer.swsNavDrawer();
</script>
```

### ES module

```js
import { swsNavDrawer } from '@inotom/sws-nav-drawer';

swsNavDrawer();
```


## Options

| name             | type     | defaults                    | description                              |
|------------------|----------|-----------------------------|------------------------------------------|
| `key`            | `String` | `is-sws-nav-drawer-active`  | Root element attribute name              |
| `toggleSelector` | `String` | `.js-sws-nav-drawer-toggle` | Selector for toggle event handle element |
| `closeSelector`  | `String` | `.js-sws-nav-drawer-close`  | Selector for close event handle element  |

### example

```js
swsNavDrawer({
  key: 'some-key-string',
  toggleSelector: '.js-some-toggle-selector',
  closeSelector: '.js-some-close-selector',
});
```

## License

MIT


## Author

inotom
