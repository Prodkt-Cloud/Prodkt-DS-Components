# Radio Group

[component-header:moyo-radio-group]

Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.

```html preview
<moyo-radio-group label="Select an option">
  <moyo-radio name="option" value="1" checked>Option 1</moyo-radio>
  <moyo-radio name="option" value="2">Option 2</moyo-radio>
  <moyo-radio name="option" value="3">Option 3</moyo-radio>
</moyo-radio-group>
```

```jsx react
import { MoyoRadio, MoyoRadioGroup } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoRadioGroup label="Select an option">
    <MoyoRadio name="option" value="1" checked>
      Option 1
    </MoyoRadio>
    <MoyoRadio name="option" value="2">
      Option 2
    </MoyoRadio>
    <MoyoRadio name="option" value="3">
      Option 3
    </MoyoRadio>
  </MoyoRadioGroup>
);
```

## Examples

### Showing the Label

You can show the fieldset and legend that wraps the radio group using the `fieldset` attribute. If you don't use this option, you should still provide a label so screen readers announce the control correctly.

```html preview
<moyo-radio-group label="Select an option" fieldset>
  <moyo-radio name="option" value="1" checked>Option 1</moyo-radio>
  <moyo-radio name="option" value="2">Option 2</moyo-radio>
  <moyo-radio name="option" value="3">Option 3</moyo-radio>
</moyo-radio-group>
```

```jsx react
import { MoyoRadio, MoyoRadioGroup } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoRadioGroup label="Select an option" fieldset>
    <MoyoRadio name="option" value="1" checked>
      Option 1
    </MoyoRadio>
    <MoyoRadio name="option" value="2">
      Option 2
    </MoyoRadio>
    <MoyoRadio name="option" value="3">
      Option 3
    </MoyoRadio>
  </MoyoRadioGroup>
);
```

### Radio Buttons

[Radio buttons](/components/radio-button) offer an alternate way to display radio controls. In this case, an internal [button group](/components/button-group) is used to group the buttons into a single, cohesive control.

```html preview
<moyo-radio-group label="Select an option">
  <moyo-radio-button name="option" value="1" checked>Option 1</moyo-radio-button>
  <moyo-radio-button name="option" value="2">Option 2</moyo-radio-button>
  <moyo-radio-button name="option" value="3">Option 3</moyo-radio-button>
</moyo-radio-group>
```

```jsx react
import { MoyoRadioButton, MoyoRadioGroup } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoRadioGroup label="Select an option">
    <MoyoRadioButton name="option" value="1" checked>
      Option 1
    </MoyoRadioButton>
    <MoyoRadioButton name="option" value="2">
      Option 2
    </MoyoRadioButton>
    <MoyoRadioButton name="option" value="3">
      Option 3
    </MoyoRadioButton>
  </MoyoRadioGroup>
);
```

[component-metadata:moyo-radio-group]
