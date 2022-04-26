# Icon Button

[component-header:moyo-icon-button]

Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.

For a full list of icons that come bundled with Tovuti, refer to the [icon component](/components/icon).

```html preview
<moyo-icon-button name="gear" label="Settings"></moyo-icon-button>
```

```jsx react
import { MoyoIconButton } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoIconButton name="gear" label="Settings" />;
```

## Examples

### Sizes

Icon buttons inherit their parent element's `font-size`.

```html preview
<moyo-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></moyo-icon-button>
<moyo-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></moyo-icon-button>
<moyo-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></moyo-icon-button>
```

```jsx react
import { MoyoIconButton } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoIconButton name="pencil" label="Edit" style={{ fontSize: '1.5rem' }} />
    <MoyoIconButton name="pencil" label="Edit" style={{ fontSize: '2rem' }} />
    <MoyoIconButton name="pencil" label="Edit" style={{ fontSize: '2.5rem' }} />
  </>
);
```

### Colors

Icon buttons are designed to have a uniform appearance, so their color is not inherited. However, you can still customize them by styling the `base` part.

```html preview
<div class="icon-button-color">
  <moyo-icon-button name="type-bold" label="Bold"></moyo-icon-button>
  <moyo-icon-button name="type-italic" label="Italic"></moyo-icon-button>
  <moyo-icon-button name="type-underline" label="Underline"></moyo-icon-button>
</div>

<style>
  .icon-button-color moyo-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color moyo-icon-button::part(base):hover,
  .icon-button-color moyo-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color moyo-icon-button::part(base):active {
    color: #960077;
  }
</style>
```

```jsx react
import { MoyoIconButton } from '@tovutifunk/tovuti/dist/react';

const css = `
  .icon-button-color moyo-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color moyo-icon-button::part(base):hover,
  .icon-button-color moyo-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color moyo-icon-button::part(base):active {
    color: #960077;
  }
`;

const App = () => (
  <>
    <div className="icon-button-color">
      <MoyoIconButton name="type-bold" label="Bold" />
      <MoyoIconButton name="type-italic" label="Italic" />
      <MoyoIconButton name="type-underline" label="Underline" />
    </div>

    <style>{css}</style>
  </>
);
```

### Link Buttons

Use the `href` attribute to convert the button to a link.

```html preview
<moyo-icon-button name="gear" label="Settings" href="https://example.com" target="_blank"></moyo-icon-button>
```

```jsx react
import { MoyoIconButton } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoIconButton name="gear" label="Settings" href="https://example.com" target="_blank" />;
```

### Icon Button with Tooltip

Wrap a tooltip around an icon button to provide contextual information to the user.

```html preview
<moyo-tooltip content="Settings">
  <moyo-icon-button name="gear" label="Settings"></moyo-icon-button>
</moyo-tooltip>
```

```jsx react
import { MoyoIconButton,MoyoTooltip } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoTooltip content="Settings">
    <MoyoIconButton name="gear" label="Settings" />
  </MoyoTooltip>
);
```

### Disabled

Use the `disabled` attribute to disable the icon button.

```html preview
<moyo-icon-button name="gear" label="Settings" disabled></moyo-icon-button>
```

```jsx react
import { MoyoIconButton } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoIconButton name="gear" label="Settings" disabled />;
```

[component-metadata:moyo-icon-button]
