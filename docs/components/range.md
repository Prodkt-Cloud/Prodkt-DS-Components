# Range

[component-header:moyo-range]

Ranges allow the user to select a single value within a given range using a slider.

```html preview
<moyo-range></moyo-range>
```

```jsx react
import { MoyoRange } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoRange />;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the range an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<moyo-range label="Volume" min="0" max="100"></moyo-input>
```

```jsx react
import { MoyoRange } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoRange label="Volume" min={0} max={100} />;
```

### Help Text

Add descriptive help text to a range with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<moyo-range
  label="Volume"
  help-text="Controls the volume of the current song."
  min="0"
  max="100"
></moyo-input>
```

```jsx react
import { MoyoRange } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoRange label="Volume" help-text="Controls the volume of the current song." min={0} max={100} />;
```

### Min, Max, and Step

Use the `min` and `max` attributes to set the range's minimum and maximum values, respectively. The `step` attribute determines the value's interval when increasing and decreasing.

```html preview
<moyo-range min="0" max="10" step="1"></moyo-range>
```

```jsx react
import { MoyoRange } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoRange min={0} max={10} step={1} />;
```

### Disabled

Use the `disabled` attribute to disable a slider.

```html preview
<moyo-range disabled></moyo-range>
```

```jsx react
import { MoyoRange } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoRange disabled />;
```

### Tooltip Placement

By default, the tooltip is shown on top. Set `tooltip` to `bottom` to show it below the slider.

```html preview
<moyo-range tooltip="bottom"></moyo-range>
```

```jsx react
import { MoyoRange } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoRange tooltip="bottom" />;
```

### Disable the Tooltip

To disable the tooltip, set `tooltip` to `none`.

```html preview
<moyo-range tooltip="none"></moyo-range>
```

```jsx react
import { MoyoRange } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoRange tooltip="none" />;
```

### Custom Track Colors

You can customize the active and inactive portions of the track using the `--track-color-active` and `--track-color-inactive` custom properties.

```html preview
<moyo-range
  style="
  --track-color-active: var(--moyo-color-primary-600);
  --track-color-inactive: var(--moyo-color-primary-100);
"
></moyo-range>
```

```jsx react
import { MoyoRange } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoRange
    style={{
      '--track-color-active': 'var(--moyo-color-primary-600)',
      '--track-color-inactive': 'var(--moyo-color-primary-200)'
    }}
  />
);
```

### Custom Tooltip Formatter

You can change the tooltip's content by setting the `tooltipFormatter` property to a function that accepts the range's value as an argument.

```html preview
<moyo-range min="0" max="100" step="1" class="range-with-custom-formatter"></moyo-range>

<script>
  const range = document.querySelector('.range-with-custom-formatter');
  range.tooltipFormatter = value => `Total - ${value}%`;
</script>
```

```jsx react
import { MoyoRange } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoRange min={0} max={100} step={1} tooltipFormatter={value => `Total - ${value}%`} />;
```

[component-metadata:moyo-range]
