# Menu Label

[component-header:moyo-menu-label]

Menu labels are used to describe a group of menu items.

```html preview
<moyo-menu style="max-width: 200px;">
  <moyo-menu-label>Fruits</moyo-menu-label>
  <moyo-menu-item value="apple">Apple</moyo-menu-item>
  <moyo-menu-item value="banana">Banana</moyo-menu-item>
  <moyo-menu-item value="orange">Orange</moyo-menu-item>
  <moyo-divider></moyo-divider>
  <moyo-menu-label>Vegetables</moyo-menu-label>
  <moyo-menu-item value="broccoli">Broccoli</moyo-menu-item>
  <moyo-menu-item value="carrot">Carrot</moyo-menu-item>
  <moyo-menu-item value="zucchini">Zucchini</moyo-menu-item>
</moyo-menu>
```

```jsx react
import { MoyoDivider, MoyoMenu, MoyoMenuLabel, MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoMenu style={{ maxWidth: '200px' }}>
    <MoyoMenuLabel>Fruits</MoyoMenuLabel>
    <MoyoMenuItem value="apple">Apple</MoyoMenuItem>
    <MoyoMenuItem value="banana">Banana</MoyoMenuItem>
    <MoyoMenuItem value="orange">Orange</MoyoMenuItem>
    <MoyoDivider />
    <MoyoMenuLabel>Vegetables</MoyoMenuLabel>
    <MoyoMenuItem value="broccoli">Broccoli</MoyoMenuItem>
    <MoyoMenuItem value="carrot">Carrot</MoyoMenuItem>
    <MoyoMenuItem value="zucchini">Zucchini</MoyoMenuItem>
  </MoyoMenu>
);
```

[component-metadata:moyo-menu-label]
