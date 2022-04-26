# Button

[component-header:moyo-button]

Buttons represent actions that are available to the user.

```html preview
<moyo-button>Button</moyo-button>
```

```jsx react
import { MoyoButton } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoButton>Button</MoyoButton>;
```

## Examples

### Variants

Use the `variant` attribute to set the button's variant.

```html preview
<moyo-button variant="default">Default</moyo-button>
<moyo-button variant="primary">Primary</moyo-button>
<moyo-button variant="success">Success</moyo-button>
<moyo-button variant="neutral">Neutral</moyo-button>
<moyo-button variant="warning">Warning</moyo-button>
<moyo-button variant="danger">Danger</moyo-button>
```

```jsx react
import { MoyoButton } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoButton variant="default">Default</MoyoButton>
    <MoyoButton variant="primary">Primary</MoyoButton>
    <MoyoButton variant="success">Success</MoyoButton>
    <MoyoButton variant="neutral">Neutral</MoyoButton>
    <MoyoButton variant="warning">Warning</MoyoButton>
    <MoyoButton variant="danger">Danger</MoyoButton>
  </>
);
```

### Sizes

Use the `size` attribute to change a button's size.

```html preview
<moyo-button size="small">Small</moyo-button>
<moyo-button size="medium">Medium</moyo-button>
<moyo-button size="large">Large</moyo-button>
```

```jsx react
import { MoyoButton } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoButton size="small">Small</MoyoButton>
    <MoyoButton size="medium">Medium</MoyoButton>
    <MoyoButton size="large">Large</MoyoButton>
  </>
);
```

### Outline Buttons

Use the `outline` attribute to draw outlined buttons with transparent backgrounds.

```html preview
<moyo-button variant="default" outline>Default</moyo-button>
<moyo-button variant="primary" outline>Primary</moyo-button>
<moyo-button variant="success" outline>Success</moyo-button>
<moyo-button variant="neutral" outline>Neutral</moyo-button>
<moyo-button variant="warning" outline>Warning</moyo-button>
<moyo-button variant="danger" outline>Danger</moyo-button>
```

```jsx react
import { MoyoButton } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoButton variant="default" outline>
      Default
    </MoyoButton>
    <MoyoButton variant="primary" outline>
      Primary
    </MoyoButton>
    <MoyoButton variant="success" outline>
      Success
    </MoyoButton>
    <MoyoButton variant="neutral" outline>
      Neutral
    </MoyoButton>
    <MoyoButton variant="warning" outline>
      Warning
    </MoyoButton>
    <MoyoButton variant="danger" outline>
      Danger
    </MoyoButton>
  </>
);
```

### Pill Buttons

Use the `pill` attribute to give buttons rounded edges.

```html preview
<moyo-button size="small" pill>Small</moyo-button>
<moyo-button size="medium" pill>Medium</moyo-button>
<moyo-button size="large" pill>Large</moyo-button>
```

```jsx react
import { MoyoButton } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoButton size="small" pill>
      Small
    </MoyoButton>
    <MoyoButton size="medium" pill>
      Medium
    </MoyoButton>
    <MoyoButton size="large" pill>
      Large
    </MoyoButton>
  </>
);
```

### Circle Buttons

Use the `circle` attribute to create circular icon buttons.

```html preview
<moyo-button variant="default" size="small" circle>
  <moyo-icon name="gear" label="Settings"></moyo-icon>
</moyo-button>

<moyo-button variant="default" size="medium" circle>
  <moyo-icon name="gear" label="Settings"></moyo-icon>
</moyo-button>

<moyo-button variant="default" size="large" circle>
  <moyo-icon name="gear" label="Settings"></moyo-icon>
</moyo-button>
```

```jsx react
import { MoyoButton,MoyoIcon } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoButton variant="default" size="small" circle>
      <MoyoIcon name="gear" />
    </MoyoButton>
    <MoyoButton variant="default" size="medium" circle>
      <MoyoIcon name="gear" />
    </MoyoButton>
    <MoyoButton variant="default" size="large" circle>
      <MoyoIcon name="gear" />
    </MoyoButton>
  </>
);
```

### Text Buttons

Use the `text` variant to create text buttons that share the same size as regular buttons but don't have backgrounds or borders.

```html preview
<moyo-button variant="text" size="small">Text</moyo-button>
<moyo-button variant="text" size="medium">Text</moyo-button>
<moyo-button variant="text" size="large">Text</moyo-button>
```

```jsx react
import { MoyoButton } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoButton variant="text" size="small">
      Text
    </MoyoButton>
    <MoyoButton variant="text" size="medium">
      Text
    </MoyoButton>
    <MoyoButton variant="text" size="large">
      Text
    </MoyoButton>
  </>
);
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. <kbd>CMD/CTRL/SHIFT + CLICK</kbd>) and exposes the `target` and `download` attributes.

```html preview
<moyo-button href="https://example.com/">Link</moyo-button>
<moyo-button href="https://example.com/" target="_blank">New Window</moyo-button>
<moyo-button href="/assets/images/wordmark.svg" download="tovuti.svg">Download</moyo-button>
<moyo-button href="https://example.com/" disabled>Disabled</moyo-button>
```

```jsx react
import { MoyoButton } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoButton href="https://example.com/">Link</MoyoButton>
    <MoyoButton href="https://example.com/" target="_blank">
      New Window
    </MoyoButton>
    <MoyoButton href="/assets/images/wordmark.svg" download="tovuti.svg">
      Download
    </MoyoButton>
    <MoyoButton href="https://example.com/" disabled>
      Disabled
    </MoyoButton>
  </>
);
```

?> When a `target` is set, the link will receive `rel="noreferrer noopener"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).

### Setting a Custom Width

As expected, buttons can be given a custom width by setting the `width` attribute. This is useful for making buttons span the full width of their container on smaller screens.

```html preview
<moyo-button variant="default" size="small" style="width: 100%; margin-bottom: 1rem;">Small</moyo-button>
<moyo-button variant="default" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</moyo-button>
<moyo-button variant="default" size="large" style="width: 100%;">Large</moyo-button>
```

```jsx react
import { MoyoButton } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoButton variant="default" size="small" style={{ width: '100%', marginBottom: '1rem' }}>
      Small
    </MoyoButton>
    <MoyoButton variant="default" size="medium" style={{ width: '100%', marginBottom: '1rem' }}>
      Medium
    </MoyoButton>
    <MoyoButton variant="default" size="large" style={{ width: '100%' }}>
      Large
    </MoyoButton>
  </>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<moyo-button variant="default" size="small">
  <moyo-icon slot="prefix" name="gear"></moyo-icon>
  Settings
</moyo-button>

<moyo-button variant="default" size="small">
  <moyo-icon slot="suffix" name="arrow-counterclockwise"></moyo-icon>
  Refresh
</moyo-button>

<moyo-button variant="default" size="small">
  <moyo-icon slot="prefix" name="link-45deg"></moyo-icon>
  <moyo-icon slot="suffix" name="box-arrow-up-right"></moyo-icon>
  Open
</moyo-button>

<br /><br />

<moyo-button variant="default">
  <moyo-icon slot="prefix" name="gear"></moyo-icon>
  Settings
</moyo-button>

<moyo-button variant="default">
  <moyo-icon slot="suffix" name="arrow-counterclockwise"></moyo-icon>
  Refresh
</moyo-button>

<moyo-button variant="default">
  <moyo-icon slot="prefix" name="link-45deg"></moyo-icon>
  <moyo-icon slot="suffix" name="box-arrow-up-right"></moyo-icon>
  Open
</moyo-button>

<br /><br />

<moyo-button variant="default" size="large">
  <moyo-icon slot="prefix" name="gear"></moyo-icon>
  Settings
</moyo-button>

<moyo-button variant="default" size="large">
  <moyo-icon slot="suffix" name="arrow-counterclockwise"></moyo-icon>
  Refresh
</moyo-button>

<moyo-button variant="default" size="large">
  <moyo-icon slot="prefix" name="link-45deg"></moyo-icon>
  <moyo-icon slot="suffix" name="box-arrow-up-right"></moyo-icon>
  Open
</moyo-button>
```

```jsx react
import { MoyoButton,MoyoIcon } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoButton variant="default" size="small">
      <MoyoIcon slot="prefix" name="gear"></MoyoIcon>
      Settings
    </MoyoButton>

    <MoyoButton variant="default" size="small">
      <MoyoIcon slot="suffix" name="arrow-counterclockwise"></MoyoIcon>
      Refresh
    </MoyoButton>

    <MoyoButton variant="default" size="small">
      <MoyoIcon slot="prefix" name="link-45deg"></MoyoIcon>
      <MoyoIcon slot="suffix" name="box-arrow-up-right"></MoyoIcon>
      Open
    </MoyoButton>

    <br />
    <br />

    <MoyoButton variant="default">
      <MoyoIcon slot="prefix" name="gear"></MoyoIcon>
      Settings
    </MoyoButton>

    <MoyoButton variant="default">
      <MoyoIcon slot="suffix" name="arrow-counterclockwise"></MoyoIcon>
      Refresh
    </MoyoButton>

    <MoyoButton variant="default">
      <MoyoIcon slot="prefix" name="link-45deg"></MoyoIcon>
      <MoyoIcon slot="suffix" name="box-arrow-up-right"></MoyoIcon>
      Open
    </MoyoButton>

    <br />
    <br />

    <MoyoButton variant="default" size="large">
      <MoyoIcon slot="prefix" name="gear"></MoyoIcon>
      Settings
    </MoyoButton>

    <MoyoButton variant="default" size="large">
      <MoyoIcon slot="suffix" name="arrow-counterclockwise"></MoyoIcon>
      Refresh
    </MoyoButton>

    <MoyoButton variant="default" size="large">
      <MoyoIcon slot="prefix" name="link-45deg"></MoyoIcon>
      <MoyoIcon slot="suffix" name="box-arrow-up-right"></MoyoIcon>
      Open
    </MoyoButton>
  </>
);
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html preview
<moyo-button size="small" caret>Small</moyo-button>
<moyo-button size="medium" caret>Medium</moyo-button>
<moyo-button size="large" caret>Large</moyo-button>
```

```jsx react
import { MoyoButton } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoButton size="small" caret>
      Small
    </MoyoButton>
    <MoyoButton size="medium" caret>
      Medium
    </MoyoButton>
    <MoyoButton size="large" caret>
      Large
    </MoyoButton>
  </>
);
```

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.

```html preview
<moyo-button variant="default" loading>Default</moyo-button>
<moyo-button variant="primary" loading>Primary</moyo-button>
<moyo-button variant="success" loading>Success</moyo-button>
<moyo-button variant="neutral" loading>Neutral</moyo-button>
<moyo-button variant="warning" loading>Warning</moyo-button>
<moyo-button variant="danger" loading>Danger</moyo-button>
```

```jsx react
import { MoyoButton } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoButton variant="default" loading>
      Default
    </MoyoButton>
    <MoyoButton variant="primary" loading>
      Primary
    </MoyoButton>
    <MoyoButton variant="success" loading>
      Success
    </MoyoButton>
    <MoyoButton variant="neutral" loading>
      Neutral
    </MoyoButton>
    <MoyoButton variant="warning" loading>
      Warning
    </MoyoButton>
    <MoyoButton variant="danger" loading>
      Danger
    </MoyoButton>
  </>
);
```

### Disabled

Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.

```html preview
<moyo-button variant="default" disabled>Default</moyo-button>
<moyo-button variant="primary" disabled>Primary</moyo-button>
<moyo-button variant="success" disabled>Success</moyo-button>
<moyo-button variant="neutral" disabled>Neutral</moyo-button>
<moyo-button variant="warning" disabled>Warning</moyo-button>
<moyo-button variant="danger" disabled>Danger</moyo-button>
```

```jsx react
import { MoyoButton } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoButton variant="default" disabled>
      Default
    </MoyoButton>

    <MoyoButton variant="primary" disabled>
      Primary
    </MoyoButton>

    <MoyoButton variant="success" disabled>
      Success
    </MoyoButton>

    <MoyoButton variant="neutral" disabled>
      Neutral
    </MoyoButton>

    <MoyoButton variant="warning" disabled>
      Warning
    </MoyoButton>

    <MoyoButton variant="danger" disabled>
      Danger
    </MoyoButton>
  </>
);
```

### Styling Buttons

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `variant` attribute instead of a class (e.g. `moyo-button[variant="primary"]`).

```html preview
<moyo-button class="pink">Pink Button</moyo-button>

<style>
  moyo-button.pink::part(base) {
    /* Set design tokens for height and border width */
    --moyo-input-height-medium: 48px;
    --moyo-input-border-width: 4px;

    border-radius: 0;
    background-color: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: var(--moyo-transition-medium) transform ease, var(--moyo-transition-medium) border ease;
  }

  moyo-button.pink::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  moyo-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: scale(1.05) rotate(-1deg) translateY(2px);
  }

  moyo-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```

[component-metadata:moyo-button]
