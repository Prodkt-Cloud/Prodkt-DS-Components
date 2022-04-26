# Divider

[component-header:moyo-divider]

Dividers are used to visually separate or group elements.

```html preview
<moyo-divider></moyo-divider>
```

```jsx react
import { MoyoDivider } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoDivider />;
```

## Examples

### Width

Use the `--width` custom property to change the width of the divider.

```html preview
<moyo-divider style="--width: 4px;"></moyo-divider>
```

```jsx react
import { MoyoDivider } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoDivider style={{ '--width': '4px' }} />;
```

### Color

Use the `--color` custom property to change the color of the divider.

```html preview
<moyo-divider style="--color: tomato;"></moyo-divider>
```

```jsx react
import { MoyoDivider } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoDivider style={{ '--color': 'tomato' }} />;
```

### Spacing

Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.

```html preview
<div style="text-align: center;">
  Above
  <moyo-divider style="--spacing: 2rem;"></moyo-divider>
  Below
</div>
```

```jsx react
import { MoyoDivider } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    Above
    <MoyoDivider style={{ '--spacing': '2rem' }} />
    Below
  </>
);
```

### Vertical

Add the `vertical` attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.

```html preview
<div style="display: flex; align-items: center; height: 2rem;">
  First
  <moyo-divider vertical></moyo-divider>
  Middle
  <moyo-divider vertical></moyo-divider>
  Last
</div>
```

```jsx react
import { MoyoDivider } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '2rem'
    }}
  >
    First
    <MoyoDivider vertical />
    Middle
    <MoyoDivider vertical />
    Last
  </div>
);
```

### Menu Dividers

Use dividers in [menus](/components/menu) to visually group menu items.

```html preview
<moyo-menu style="max-width: 200px;">
  <moyo-menu-item value="1">Option 1</moyo-menu-item>
  <moyo-menu-item value="2">Option 2</moyo-menu-item>
  <moyo-menu-item value="3">Option 3</moyo-menu-item>
  <moyo-divider></moyo-divider>
  <moyo-menu-item value="4">Option 4</moyo-menu-item>
  <moyo-menu-item value="5">Option 5</moyo-menu-item>
  <moyo-menu-item value="6">Option 6</moyo-menu-item>
</moyo-menu>
```

```jsx react
import { MoyoDivider,MoyoMenu,MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoMenu style={{ maxWidth: '200px' }}>
    <MoyoMenuItem value="1">Option 1</MoyoMenuItem>
    <MoyoMenuItem value="2">Option 2</MoyoMenuItem>
    <MoyoMenuItem value="3">Option 3</MoyoMenuItem>
    <moyo-divider />
    <MoyoMenuItem value="4">Option 4</MoyoMenuItem>
    <MoyoMenuItem value="5">Option 5</MoyoMenuItem>
    <MoyoMenuItem value="6">Option 6</MoyoMenuItem>
  </MoyoMenu>
);
```

[component-metadata:moyo-divider]
