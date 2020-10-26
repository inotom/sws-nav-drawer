/** @prettier */

interface Options {
  key?: string;
  toggleSelector?: string;
  closeSelector?: string;
}

class SwsNavDrawer {
  private key = 'is-sws-nav-drawer-active';
  private toggleSelector = '.js-sws-nav-drawer-toggle';
  private closeSelector = '.js-sws-nav-drawer-close';

  constructor(opts: Options = {}) {
    if (typeof opts.key === 'string') {
      this.key = opts.key;
    }
    if (typeof opts.toggleSelector === 'string') {
      this.toggleSelector = opts.toggleSelector;
    }
    if (typeof opts.closeSelector === 'string') {
      this.closeSelector = opts.closeSelector;
    }

    const elToggles = document.querySelectorAll<HTMLElement>(this.toggleSelector);
    Array.from(elToggles, (el) => {
      el.addEventListener('click', (e) => {
        if (el.dataset.preventDefault === 'true') {
          e.preventDefault();
        }

        if (el.dataset.stopPropergation === 'true') {
          e.stopPropagation();
        }

        if (this.isActive()) {
          this.close();
        } else {
          this.open();
        }
      });
    });

    const elCloses = document.querySelectorAll<HTMLElement>(this.closeSelector);
    Array.from(elCloses, (el) => {
      el.addEventListener('click', (e) => {
        if (el.dataset.preventDefault === 'true') {
          e.preventDefault();
        }

        if (el.dataset.stopPropergation === 'true') {
          e.stopPropagation();
        }

        this.close();
      });
    });
  }

  private isActive(): boolean {
    return document.documentElement.hasAttribute(this.key);
  }

  private open(): void {
    if (!this.isActive()) {
      const top = `${window.pageYOffset}`;
      document.documentElement.setAttribute(this.key, top);
      document.body.style.top = -top + 'px';
    }
  }

  private close(): void {
    if (this.isActive()) {
      const top = document.documentElement.getAttribute(this.key) || '0';
      document.documentElement.removeAttribute(this.key);
      window.scrollTo(0, +top);
      document.body.style.top = '0';
    }
  }
}

export const swsNavDrawer = (opts: Options = {}): void => {
  new SwsNavDrawer(opts);
};
