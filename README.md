# sws-nav-drawer

A JavaScript to display navigation drawer container.

## Usage

Place HTML element with ID `sws-nav-drawer`.

```html
<div id="sws-nav-drawer">
  ... YOUR MENU HERE ...
</div>
```

```html
<div id="sws-nav-drawer"
  data-sws-nav-drawer-size="40"
  data-sws-nav-drawer-bg-color="#3c7aef"
  data-sws-nav-drawer-fg-color="#fefe3f"
  data-sws-nav-drawer-position="left"
  data-sws-nav-drawer-z-index="2000"
  data-sws-nav-drawer-has-close-button="true"
  data-sws-nav-drawer-mobile-width="-1">
  ... YOUR MENU HERE ...
</div>
```

## Data attributes

## Data attributes

| attribute name                         | content                           | defaults  |
|:---------------------------------------|:----------------------------------|:----------|
| `data-sws-nav-drawer-size`             | Vartical and horizontal size      | `50`      |
| `data-sws-nav-drawer-bg-color`         | Background color                  | `#ffc966` |
| `data-sws-nav-drawer-fg-color`         | Foreground color                  | `#ffffff` |
| `data-sws-nav-drawer-z-index`          | Value of z-index                  | `1000`    |
| `data-sws-nav-drawer-position`         | Slide in from this position       | `left`    |
| `data-sws-nav-drawer-has-close-button` | Display close button              | `true`    |
| `data-sws-nav-drawer-mobile-width`     | Mobile device judgment width      | `640`     |
| `data-sws-nav-drawer-src`              | Image path                        | `null`    |

## License

MIT

## Author

iNo
