# Select

[component-header:moyo-select]

Selects allow you to choose one or more items from a dropdown menu.

```html preview
<moyo-select>
  <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
  <moyo-divider></moyo-divider>
  <moyo-menu-item value="option-4">Option 4</moyo-menu-item>
  <moyo-menu-item value="option-5">Option 5</moyo-menu-item>
  <moyo-menu-item value="option-6">Option 6</moyo-menu-item>
</moyo-select>
```

```jsx react
import { MoyoDivider, MoyoMenuItem, MoyoSelect } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSelect>
    <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
    <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
    <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
    <MoyoDivider />
    <MoyoMenuItem value="option-4">Option 4</MoyoMenuItem>
    <MoyoMenuItem value="option-5">Option 5</MoyoMenuItem>
    <MoyoMenuItem value="option-6">Option 6</MoyoMenuItem>
  </MoyoSelect>
);
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<moyo-select label="Select one">
  <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
</moyo-select>
```

```jsx react
import { MoyoMenuItem, MoyoSelect } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSelect label="Select one">
    <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
    <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
    <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
  </MoyoSelect>
);
```

### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<moyo-select label="Experience" help-text="Please tell us your skill level.">
  <moyo-menu-item value="1">Novice</moyo-menu-item>
  <moyo-menu-item value="2">Intermediate</moyo-menu-item>
  <moyo-menu-item value="3">Advanced</moyo-menu-item>
</moyo-select>
```

```jsx react
import { MoyoMenuItem, MoyoSelect } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSelect label="Experience" help-text="Please tell us your skill level.">
    <MoyoMenuItem value="1">Novice</MoyoMenuItem>
    <MoyoMenuItem value="2">Intermediate</MoyoMenuItem>
    <MoyoMenuItem value="3">Advanced</MoyoMenuItem>
  </MoyoSelect>
);
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<moyo-select placeholder="Select one">
  <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
</moyo-select>
```

```jsx react
import { MoyoMenuItem, MoyoSelect } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSelect placeholder="Select one">
    <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
    <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
    <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
  </MoyoSelect>
);
```

### Clearable

Use the `clearable` attribute to make the control clearable.

```html preview
<moyo-select placeholder="Clearable" clearable>
  <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
</moyo-select>
```

```jsx react
import { MoyoMenuItem, MoyoSelect } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSelect placeholder="Clearable" clearable>
    <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
    <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
    <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
  </MoyoSelect>
);
```

### Filled Selects

Add the `filled` attribute to draw a filled select.

```html preview
<moyo-select filled>
  <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
</moyo-select>
```

```jsx react
import { MoyoMenuItem, MoyoSelect } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSelect filled>
    <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
    <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
    <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
  </MoyoSelect>
);
```

### Pill

Use the `pill` attribute to give selects rounded edges.

```html preview
<moyo-select pill>
  <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
</moyo-select>
```

```jsx react
import { MoyoMenuItem, MoyoSelect } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSelect pill>
    <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
    <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
    <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
  </MoyoSelect>
);
```

### Disabled

Use the `disabled` attribute to disable a select.

```html preview
<moyo-select placeholder="Disabled" disabled>
  <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
</moyo-select>
```

```jsx react
import { MoyoMenuItem, MoyoSelect } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSelect placeholder="Disabled" disabled>
    <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
    <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
    <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
  </MoyoSelect>
);
```

### Setting the Selection

Use the `value` attribute to set the current selection. When users interact with the control, its `value` will update to reflect the newly selected menu item's value. Note that the value must be an array when using the [`multiple`](#multiple) option.

```html preview
<moyo-select value="option-2">
  <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
</moyo-select>
```

```jsx react
import { MoyoDivider, MoyoMenuItem, MoyoSelect } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSelect value="option-2">
    <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
    <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
    <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
  </MoyoSelect>
);
```

### Setting the Selection Imperatively

To programmatically set the selection, update the `value` property as shown below. Note that the value must be an array when using the [`multiple`](#multiple) option.

```html preview
<div class="selecting-example">
  <moyo-select>
    <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
    <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
    <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
  </moyo-select>

  <br />

  <moyo-button data-option="option-1">Set 1</moyo-button>
  <moyo-button data-option="option-2">Set 2</moyo-button>
  <moyo-button data-option="option-3">Set 3</moyo-button>
</div>

<script>
  const container = document.querySelector('.selecting-example');
  const select = container.querySelector('moyo-select');

  [...container.querySelectorAll('moyo-button')].map(button => {
    button.addEventListener('click', () => {
      select.value = button.dataset.option;
    });
  });
</script>
```

```jsx react
import { useState } from 'react';
import { MoyoButton, MoyoMenuItem, MoyoSelect } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  const [value, setValue] = useState('option-1');

  return (
    <>
      <MoyoSelect value={value} onMoyoChange={event => setValue(event.target.value)}>
        <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
        <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
        <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
      </MoyoSelect>

      <br />

      <MoyoButton onClick={() => setValue('option-1')}>Set 1</MoyoButton>
      <MoyoButton onClick={() => setValue('option-2')}>Set 2</MoyoButton>
      <MoyoButton onClick={() => setValue('option-3')}>Set 3</MoyoButton>
    </>
  );
};
```

### Multiple

To allow multiple options to be selected, use the `multiple` attribute. With this option, `value` will be an array of strings instead of a string. It's a good practice to use `clearable` when this option is enabled.

```html preview
<moyo-select placeholder="Select a few" multiple clearable>
  <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
  <moyo-divider></moyo-divider>
  <moyo-menu-item value="option-4">Option 4</moyo-menu-item>
  <moyo-menu-item value="option-5">Option 5</moyo-menu-item>
  <moyo-menu-item value="option-6">Option 6</moyo-menu-item>
</moyo-select>
```

```jsx react
import { MoyoDivider, MoyoMenuItem, MoyoSelect } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSelect placeholder="Select a few" multiple clearable>
    <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
    <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
    <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
    <MoyoDivider />
    <MoyoMenuItem value="option-4">Option 4</MoyoMenuItem>
    <MoyoMenuItem value="option-5">Option 5</MoyoMenuItem>
    <MoyoMenuItem value="option-6">Option 6</MoyoMenuItem>
  </MoyoSelect>
);
```

?> When using the `multiple` option, the value will be an array instead of a string. You may need to [set the selection imperatively](#setting-the-selection-imperatively) unless you're using a framework that supports binding properties declaratively.

### Grouping Options

Options can be grouped visually using menu labels and dividers.

```html preview
<moyo-select placeholder="Select one">
  <moyo-menu-label>Group 1</moyo-menu-label>
  <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
  <moyo-divider></moyo-divider>
  <moyo-menu-label>Group 2</moyo-menu-label>
  <moyo-menu-item value="option-4">Option 4</moyo-menu-item>
  <moyo-menu-item value="option-5">Option 5</moyo-menu-item>
  <moyo-menu-item value="option-6">Option 6</moyo-menu-item>
</moyo-select>
```

```jsx react
import { MoyoDivider, MoyoMenuItem, MoyoMenuLabel, MoyoSelect } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSelect placeholder="Select one">
    <MoyoMenuLabel>Group 1</MoyoMenuLabel>
    <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
    <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
    <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
    <MoyoDivider></MoyoDivider>
    <MoyoMenuLabel>Group 2</MoyoMenuLabel>
    <MoyoMenuItem value="option-4">Option 4</MoyoMenuItem>
    <MoyoMenuItem value="option-5">Option 5</MoyoMenuItem>
    <MoyoMenuItem value="option-6">Option 6</MoyoMenuItem>
  </MoyoSelect>
);
```

### Sizes

Use the `size` attribute to change a select's size.

```html preview
<moyo-select placeholder="Small" size="small" multiple>
  <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
</moyo-select>

<br />

<moyo-select placeholder="Medium" size="medium" multiple>
  <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
</moyo-select>

<br />

<moyo-select placeholder="Large" size="large" multiple>
  <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
</moyo-select>
```

```jsx react
import { MoyoMenuItem, MoyoSelect } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoSelect placeholder="Small" size="small" multiple>
      <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
      <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
      <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
    </MoyoSelect>

    <br />

    <MoyoSelect placeholder="Medium" size="medium" multiple>
      <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
      <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
      <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
    </MoyoSelect>

    <br />

    <MoyoSelect placeholder="Large" size="large" multiple>
      <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
      <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
      <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
    </MoyoSelect>
  </>
);
```

### Placement

The preferred placement of the select's menu can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.

```html preview
<moyo-select placement="top">
  <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
</moyo-select>
```

```jsx react
import {
 MoyoMenuItem,
 MoyoSelect
} from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSelect placement="top">
    <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
    <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
    <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
  </MoyoDropdown>
);
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<moyo-select placeholder="Small" size="small">
  <moyo-icon name="house" slot="prefix"></moyo-icon>
  <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
  <moyo-icon name="chat" slot="suffix"></moyo-icon>
</moyo-select>
<br />
<moyo-select placeholder="Medium" size="medium">
  <moyo-icon name="house" slot="prefix"></moyo-icon>
  <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
  <moyo-icon name="chat" slot="suffix"></moyo-icon>
</moyo-select>
<br />
<moyo-select placeholder="Large" size="large">
  <moyo-icon name="house" slot="prefix"></moyo-icon>
  <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
  <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
  <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
  <moyo-icon name="chat" slot="suffix"></moyo-icon>
</moyo-select>
```

```jsx react
import { MoyoIcon, MoyoMenuItem, MoyoSelect } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoSelect placeholder="Small" size="small">
      <MoyoIcon name="house" slot="prefix"></MoyoIcon>
      <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
      <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
      <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
      <MoyoIcon name="chat" slot="suffix"></MoyoIcon>
    </MoyoSelect>
    <br />
    <MoyoSelect placeholder="Medium" size="medium">
      <MoyoIcon name="house" slot="prefix"></MoyoIcon>
      <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
      <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
      <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
      <MoyoIcon name="chat" slot="suffix"></MoyoIcon>
    </MoyoSelect>
    <br />
    <MoyoSelect placeholder="Large" size="large">
      <MoyoIcon name="house" slot="prefix"></MoyoIcon>
      <MoyoMenuItem value="option-1">Option 1</MoyoMenuItem>
      <MoyoMenuItem value="option-2">Option 2</MoyoMenuItem>
      <MoyoMenuItem value="option-3">Option 3</MoyoMenuItem>
      <MoyoIcon name="chat" slot="suffix"></MoyoIcon>
    </MoyoSelect>
  </>
);
```

[component-metadata:moyo-select]
