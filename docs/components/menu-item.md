# Menu Item

[component-header:moyo-menu-item]

Menu items provide options for the user to pick from in a menu.

```html preview
<moyo-menu style="max-width: 200px;">
  <moyo-menu-item>Option 1</moyo-menu-item>
  <moyo-menu-item>Option 2</moyo-menu-item>
  <moyo-menu-item>Option 3</moyo-menu-item>
  <moyo-divider></moyo-divider>
  <moyo-menu-item checked>Checked</moyo-menu-item>
  <moyo-menu-item disabled>Disabled</moyo-menu-item>
  <moyo-divider></moyo-divider>
  <moyo-menu-item>
    Prefix Icon
    <moyo-icon slot="prefix" name="gift"></moyo-icon>
  </moyo-menu-item>
  <moyo-menu-item>
    Suffix Icon
    <moyo-icon slot="suffix" name="heart"></moyo-icon>
  </moyo-menu-item>
</moyo-menu>
```

```jsx react
import { MoyoDivider, MoyoIcon, MoyoMenu, MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoMenu style={{ maxWidth: '200px' }}>
    <MoyoMenuItem>Option 1</MoyoMenuItem>
    <MoyoMenuItem>Option 2</MoyoMenuItem>
    <MoyoMenuItem>Option 3</MoyoMenuItem>
    <MoyoDivider />
    <MoyoMenuItem checked>Checked</MoyoMenuItem>
    <MoyoMenuItem disabled>Disabled</MoyoMenuItem>
    <MoyoDivider />
    <MoyoMenuItem>
      Prefix Icon
      <MoyoIcon slot="prefix" name="gift" />
    </MoyoMenuItem>
    <MoyoMenuItem>
      Suffix Icon
      <MoyoIcon slot="suffix" name="heart" />
    </MoyoMenuItem>
  </MoyoMenu>
);
```

## Examples

### Checked

Use the `checked` attribute to draw menu items in a checked state.

```html preview
<moyo-menu style="max-width: 200px;">
  <moyo-menu-item>Option 1</moyo-menu-item>
  <moyo-menu-item checked>Option 2</moyo-menu-item>
  <moyo-menu-item>Option 3</moyo-menu-item>
</moyo-menu>
```

```jsx react
import { MoyoMenu, MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoMenu style={{ maxWidth: '200px' }}>
    <MoyoMenuItem>Option 1</MoyoMenuItem>
    <MoyoMenuItem checked>Option 2</MoyoMenuItem>
    <MoyoMenuItem>Option 3</MoyoMenuItem>
  </MoyoMenu>
);
```

### Disabled

Add the `disabled` attribute to disable the menu item so it cannot be selected.

```html preview
<moyo-menu style="max-width: 200px;">
  <moyo-menu-item>Option 1</moyo-menu-item>
  <moyo-menu-item disabled>Option 2</moyo-menu-item>
  <moyo-menu-item>Option 3</moyo-menu-item>
</moyo-menu>
```

```jsx react
import { MoyoMenu, MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoMenu style={{ maxWidth: '200px' }}>
    <MoyoMenuItem>Option 1</MoyoMenuItem>
    <MoyoMenuItem disabled>Option 2</MoyoMenuItem>
    <MoyoMenuItem>Option 3</MoyoMenuItem>
  </MoyoMenu>
);
```

### Prefix & Suffix

Add content to the start and end of menu items using the `prefix` and `suffix` slots.

```html preview
<moyo-menu style="max-width: 200px;">
  <moyo-menu-item>
    <moyo-icon slot="prefix" name="house"></moyo-icon>
    Home
  </moyo-menu-item>

  <moyo-menu-item>
    <moyo-icon slot="prefix" name="envelope"></moyo-icon>
    Messages
    <moyo-badge slot="suffix" variant="primary" pill>12</moyo-badge>
  </moyo-menu-item>

  <moyo-divider></moyo-divider>

  <moyo-menu-item>
    <moyo-icon slot="prefix" name="gear"></moyo-icon>
    Settings
  </moyo-menu-item>
</moyo-menu>
```

```jsx react
import { MoyoBadge, MoyoDivider, MoyoIcon, MoyoMenu, MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoMenu style={{ maxWidth: '200px' }}>
    <MoyoMenuItem>
      <MoyoIcon slot="prefix" name="house" />
      Home
    </MoyoMenuItem>

    <MoyoMenuItem>
      <MoyoIcon slot="prefix" name="envelope" />
      Messages
      <MoyoBadge slot="suffix" variant="primary" pill>
        12
      </MoyoBadge>
    </MoyoMenuItem>

    <MoyoDivider />

    <MoyoMenuItem>
      <MoyoIcon slot="prefix" name="gear" />
      Settings
    </MoyoMenuItem>
  </MoyoMenu>
);
```

### Value & Selection

The `value` attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the `moyo-select` event will be emitted and a reference to the item will be available at `event.detail.item`. You can use this reference to access the selected item's value, its checked state, and more.

```html preview
<moyo-menu class="menu-value" style="max-width: 200px;">
  <moyo-menu-item value="opt-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="opt-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="opt-3">Option 3</moyo-menu-item>
</moyo-menu>

<script>
  const menu = document.querySelector('.menu-value');

  menu.addEventListener('moyo-select', event => {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  });
</script>
```

```jsx react
import { MoyoMenu, MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  function handleSelect(event) {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  }

  return (
    <MoyoMenu style={{ maxWidth: '200px' }} onMoyoSelect={handleSelect}>
      <MoyoMenuItem value="opt-1">Option 1</MoyoMenuItem>
      <MoyoMenuItem value="opt-2">Option 2</MoyoMenuItem>
      <MoyoMenuItem value="opt-3">Option 3</MoyoMenuItem>
    </MoyoMenu>
  );
};
```

[component-metadata:moyo-menu-item]
