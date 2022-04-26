# Switch

[component-header:moyo-switch]

Switches allow the user to toggle an option on or off.

```html preview
<moyo-switch>Switch</moyo-switch>
```

```jsx react
import { MoyoSwitch } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoSwitch>Switch</MoyoSwitch>;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Checked

Use the `checked` attribute to activate the switch.

```html preview
<moyo-switch checked>Checked</moyo-switch>
```

```jsx react
import { MoyoSwitch } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoSwitch checked>Checked</MoyoSwitch>;
```

### Disabled

Use the `disabled` attribute to disable the switch.

```html preview
<moyo-switch disabled>Disabled</moyo-switch>
```

```jsx react
import { MoyoSwitch } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoSwitch disabled>Disabled</MoyoSwitch>;
```

### Custom Size

Use the available custom properties to make the switch a different size.

```html preview
<moyo-switch style="--width: 80px; --height: 32px; --thumb-size: 26px;">Really big</moyo-switch>
```

```jsx react
import { MoyoSwitch } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSwitch
    style={{
      '--width': '80px',
      '--height': '32px',
      '--thumb-size': '26px'
    }}
  />
);
```

[component-metadata:moyo-switch]
