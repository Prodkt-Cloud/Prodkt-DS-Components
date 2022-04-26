<!-- cspell:dictionaries lorem-ipsum -->

# Drawer

[component-header:moyo-drawer]

Drawers slide in from a container to expose additional options and information.

```html preview
<moyo-drawer label="Drawer" class="drawer-overview">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <moyo-button slot="footer" variant="primary">Close</moyo-button>
</moyo-drawer>

<moyo-button>Open Drawer</moyo-button>

<script>
  const drawer = document.querySelector('.drawer-overview');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('moyo-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { MoyoButton,MoyoDrawer } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MoyoDrawer label="Drawer" open={open} onMoyoAfterHide={() => setOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <MoyoButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </MoyoButton>
      </MoyoDrawer>

      <MoyoButton onClick={() => setOpen(true)}>Open Drawer</MoyoButton>
    </>
  );
};
```

## Examples

###Slide in From Start

By default, drawers slide in from the end. To make the drawer slide in from the start, set the `placement` attribute to `start`.

```html preview
<moyo-drawer label="Drawer" placement="start" class="drawer-placement-start">
  This drawer slides in from the start.
  <moyo-button slot="footer" variant="primary">Close</moyo-button>
</moyo-drawer>

<moyo-button>Open Drawer</moyo-button>

<script>
  const drawer = document.querySelector('.drawer-placement-start');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('moyo-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { MoyoButton,MoyoDrawer } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MoyoDrawer label="Drawer" placement="start" open={open} onMoyoAfterHide={() => setOpen(false)}>
        This drawer slides in from the start.
        <MoyoButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </MoyoButton>
      </MoyoDrawer>

      <MoyoButton onClick={() => setOpen(true)}>Open Drawer</MoyoButton>
    </>
  );
};
```

###Slide in From Top

To make the drawer slide in from the top, set the `placement` attribute to `top`.

```html preview
<moyo-drawer label="Drawer" placement="top" class="drawer-placement-top">
  This drawer slides in from the top.
  <moyo-button slot="footer" variant="primary">Close</moyo-button>
</moyo-drawer>

<moyo-button>Open Drawer</moyo-button>

<script>
  const drawer = document.querySelector('.drawer-placement-top');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('moyo-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { MoyoButton,MoyoDrawer } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MoyoDrawer label="Drawer" placement="top" open={open} onMoyoAfterHide={() => setOpen(false)}>
        This drawer slides in from the top.
        <MoyoButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </MoyoButton>
      </MoyoDrawer>

      <MoyoButton onClick={() => setOpen(true)}>Open Drawer</MoyoButton>
    </>
  );
};
```

###Slide in From Bottom

To make the drawer slide in from the bottom, set the `placement` attribute to `bottom`.

```html preview
<moyo-drawer label="Drawer" placement="bottom" class="drawer-placement-bottom">
  This drawer slides in from the bottom.
  <moyo-button slot="footer" variant="primary">Close</moyo-button>
</moyo-drawer>

<moyo-button>Open Drawer</moyo-button>

<script>
  const drawer = document.querySelector('.drawer-placement-bottom');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('moyo-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { MoyoButton,MoyoDrawer } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MoyoDrawer label="Drawer" placement="bottom" open={open} onMoyoAfterHide={() => setOpen(false)}>
        This drawer slides in from the bottom.
        <MoyoButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </MoyoButton>
      </MoyoDrawer>

      <MoyoButton onClick={() => setOpen(true)}>Open Drawer</MoyoButton>
    </>
  );
};
```

### Contained to an Element

By default, the drawer slides out of its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport. To make the drawer slide out of its parent element, add the `contained` attribute and `position: relative` to the parent.

```html preview
<div
  style="position: relative; border: solid 2px var(--moyo-panel-border-color); height: 300px; padding: 1rem; margin-bottom: 1rem;"
>
  The drawer will be contained to this box. This content won't shift or be affected in any way when the drawer opens.

  <moyo-drawer label="Drawer" contained class="drawer-contained" style="--size: 50%;">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <moyo-button slot="footer" variant="primary">Close</moyo-button>
  </moyo-drawer>
</div>

<moyo-button>Open Drawer</moyo-button>

<script>
  const drawer = document.querySelector('.drawer-contained');
  const openButton = drawer.parentElement.nextElementSibling;
  const closeButton = drawer.querySelector('moyo-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { MoyoButton,MoyoDrawer } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{
          position: 'relative',
          border: 'solid 2px var(--moyo-panel-border-color)',
          height: '300px',
          padding: '1rem',
          marginBottom: '1rem'
        }}
      >
        The drawer will be contained to this box. This content won't shift or be affected in any way when the drawer
        opens.
        <MoyoDrawer label="Drawer" contained open={open} onMoyoAfterHide={() => setOpen(false)} style={{ '--size': '50%' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <MoyoButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
            Close
          </MoyoButton>
        </MoyoDrawer>
      </div>

      <MoyoButton onClick={() => setOpen(true)}>Open Drawer</MoyoButton>
    </>
  );
};
```

### Custom Size

Use the `--size` custom property to set the drawer's size. This will be applied to the drawer's width or height depending on its `placement`.

```html preview
<moyo-drawer label="Drawer" class="drawer-custom-size" style="--size: 50vw;">
  This drawer is always 50% of the viewport.
  <moyo-button slot="footer" variant="primary">Close</moyo-button>
</moyo-drawer>

<moyo-button>Open Drawer</moyo-button>

<script>
  const drawer = document.querySelector('.drawer-custom-size');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('moyo-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { MoyoButton,MoyoDrawer } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MoyoDrawer label="Drawer" open={open} onMoyoAfterHide={() => setOpen(false)} style={{ '--size': '50vw' }}>
        This drawer is always 50% of the viewport.
        <MoyoButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </MoyoButton>
      </MoyoDrawer>

      <MoyoButton onClick={() => setOpen(true)}>Open Drawer</MoyoButton>
    </>
  );
};
```

### Scrolling

By design, a drawer's height will never exceed 100% of its container. As such, drawers will not scroll with the page to ensure the header and footer are always accessible to the user.

```html preview
<moyo-drawer label="Drawer" class="drawer-scrolling">
  <div style="height: 150vh; border: dashed 2px var(--moyo-color-neutral-200); padding: 0 1rem;">
    <p>Scroll down and give it a try! 👇</p>
  </div>
  <moyo-button slot="footer" variant="primary">Close</moyo-button>
</moyo-drawer>

<moyo-button>Open Drawer</moyo-button>

<script>
  const drawer = document.querySelector('.drawer-scrolling');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('moyo-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { MoyoButton,MoyoDrawer } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MoyoDrawer label="Drawer" open={open} onMoyoAfterHide={() => setOpen(false)}>
        <div
          style={{
            height: '150vh',
            border: 'dashed 2px var(--moyo-color-neutral-200)',
            padding: '0 1rem'
          }}
        >
          <p>Scroll down and give it a try! 👇</p>
        </div>
        <MoyoButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </MoyoButton>
      </MoyoDrawer>

      <MoyoButton onClick={() => setOpen(true)}>Open Drawer</MoyoButton>
    </>
  );
};
```

### Preventing the Drawer from Closing

By default, drawers will close when the user clicks the close button, clicks the overlay, or presses the <kbd>Escape</kbd> key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.

To keep the drawer open in such cases, you can cancel the `moyo-request-close` event. When canceled, the drawer will remain open and pulse briefly to draw the user's attention to it.

You can use `event.detail.source` to determine what triggered the request to close. This example prevents the drawer from closing when the overlay is clicked, but allows the close button or <kbd>Escape</kbd> to dismiss it.

```html preview
<moyo-drawer label="Drawer" class="drawer-deny-close">
  This drawer will not close when you click on the overlay.
  <moyo-button slot="footer" variant="primary">Close</moyo-button>
</moyo-drawer>

<moyo-button>Open Drawer</moyo-button>

<script>
  const drawer = document.querySelector('.drawer-deny-close');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('moyo-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());

  // Prevent the drawer from closing when the user clicks on the overlay
  drawer.addEventListener('moyo-request-close', event => {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  });
</script>
```

```jsx react
import { useState } from 'react';
import { MoyoButton,MoyoDrawer } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  // Prevent the drawer from closing when the user clicks on the overlay
  function handleRequestClose(event) {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  }

  return (
    <>
      <MoyoDrawer label="Drawer" open={open} onMoyoRequestClose={handleRequestClose} onMoyoAfterHide={() => setOpen(false)}>
        This drawer will not close when you click on the overlay.
        <MoyoButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Save &amp; Close
        </MoyoButton>
      </MoyoDrawer>

      <MoyoButton onClick={() => setOpen(true)}>Open Drawer</MoyoButton>
    </>
  );
};
```

### Customizing Initial Focus

By default, the drawer's panel will gain focus when opened. This allows a subsequent tab press to focus on the first tabbable element in the drawer. If you want a different element to have focus, add the `autofocus` attribute to it as shown below.

```html preview
<moyo-drawer label="Drawer" class="drawer-focus">
  <moyo-input autofocus placeholder="I will have focus when the drawer is opened"></moyo-input>
  <moyo-button slot="footer" variant="primary">Close</moyo-button>
</moyo-drawer>

<moyo-button>Open Drawer</moyo-button>

<script>
  const drawer = document.querySelector('.drawer-focus');
  const input = drawer.querySelector('moyo-input');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('moyo-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { MoyoButton,MoyoDrawer, MoyoInput } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MoyoDrawer label="Drawer" open={open} onMoyoAfterHide={() => setOpen(false)}>
        <MoyoInput autofocus placeholder="I will have focus when the drawer is opened" />
        <MoyoButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </MoyoButton>
      </MoyoDrawer>

      <MoyoButton onClick={() => setOpen(true)}>Open Drawer</MoyoButton>
    </>
  );
};
```

?> You can further customize initial focus behavior by canceling the `moyo-initial-focus` event and setting focus yourself inside the event handler.
[component-metadata:moyo-drawer]
