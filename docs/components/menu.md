# Menu

[component-header:moyo-menu]

Menus provide a list of options for the user to choose from.

You can use [menu items](/components/menu-item), [menu labels](/components/menu-label), and [dividers](/components/divider) to compose a menu. Menus support keyboard interactions, including type-to-select an option.

```html preview
<moyo-menu style="max-width: 200px;">
  <moyo-menu-item value="undo">Undo</moyo-menu-item>
  <moyo-menu-item value="redo">Redo</moyo-menu-item>
  <moyo-divider></moyo-divider>
  <moyo-menu-item value="cut">Cut</moyo-menu-item>
  <moyo-menu-item value="copy">Copy</moyo-menu-item>
  <moyo-menu-item value="paste">Paste</moyo-menu-item>
  <moyo-menu-item value="delete">Delete</moyo-menu-item>
</moyo-menu>
```

```jsx react
import { MoyoDivider, MoyoMenu, MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoMenu style={{ maxWidth: '200px' }}>
    <MoyoMenuItem value="undo">Undo</MoyoMenuItem>
    <MoyoMenuItem value="redo">Redo</MoyoMenuItem>
    <MoyoDivider />
    <MoyoMenuItem value="cut">Cut</MoyoMenuItem>
    <MoyoMenuItem value="copy">Copy</MoyoMenuItem>
    <MoyoMenuItem value="paste">Paste</MoyoMenuItem>
    <MoyoMenuItem value="delete">Delete</MoyoMenuItem>
  </MoyoMenu>
);
```

?> Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use `<nav>` and `<a>` elements instead.

[component-metadata:moyo-menu]
