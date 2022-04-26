# Input

[component-header:moyo-input]

Inputs collect data from the user.

```html preview
<moyo-input></moyo-input>
```

```jsx react
import { MoyoInput } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoInput />;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<moyo-input label="What is your name?"></moyo-input>
```

```jsx react
import { MoyoIcon, MoyoInput } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoInput label="What is your name?" />;
```

### Help Text

Add descriptive help text to an input with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<moyo-input label="Nickname" help-text="What would you like people to call you?"></moyo-input>
```

```jsx react
import { MoyoIcon, MoyoInput } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoInput label="Nickname" help-text="What would you like people to call you?" />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<moyo-input placeholder="Type something"></moyo-input>
```

```jsx react
import { MoyoInput } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoInput placeholder="Type something" />;
```

### Clearable

Add the `clearable` attribute to add a clear button when the input has content.

```html preview
<moyo-input placeholder="Clearable" clearable></moyo-input>
```

```jsx react
import { MoyoInput } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoInput placeholder="Clearable" clearable />;
```

### Toggle Password

Add the `toggle-password` attribute to add a toggle button that will show the password when activated.

```html preview
<moyo-input type="password" placeholder="Password Toggle" size="small" toggle-password></moyo-input>
<br />
<moyo-input type="password" placeholder="Password Toggle" size="medium" toggle-password></moyo-input>
<br />
<moyo-input type="password" placeholder="Password Toggle" size="large" toggle-password></moyo-input>
```

```jsx react
import { MoyoInput } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoInput type="password" placeholder="Password Toggle" size="small" toggle-password />
    <br />
    <MoyoInput type="password" placeholder="Password Toggle" size="medium" toggle-password />
    <br />
    <MoyoInput type="password" placeholder="Password Toggle" size="large" toggle-password />
  </>
);
```

### Filled Inputs

Add the `filled` attribute to draw a filled input.

```html preview
<moyo-input placeholder="Type something" filled></moyo-input>
```

```jsx react
import { MoyoInput } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoInput placeholder="Type something" filled />;
```

### Pill

Use the `pill` attribute to give inputs rounded edges.

```html preview
<moyo-input placeholder="Small" size="small" pill></moyo-input>
<br />
<moyo-input placeholder="Medium" size="medium" pill></moyo-input>
<br />
<moyo-input placeholder="Large" size="large" pill></moyo-input>
```

```jsx react
import { MoyoInput } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoInput placeholder="Small" size="small" pill />
    <br />
    <MoyoInput placeholder="Medium" size="medium" pill />
    <br />
    <MoyoInput placeholder="Large" size="large" pill />
  </>
);
```

### Input Types

The `type` attribute controls the type of input the browser renders.

```html preview
<moyo-input type="email" placeholder="Email"></moyo-input>
<br />
<moyo-input type="number" placeholder="Number"></moyo-input>
<br />
<moyo-input type="date" placeholder="Date"></moyo-input>
```

```jsx react
import { MoyoInput } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoInput type="email" placeholder="Email" />
    <br />
    <MoyoInput type="number" placeholder="Number" />
    <br />
    <MoyoInput type="date" placeholder="Date" />
  </>
);
```

### Disabled

Use the `disabled` attribute to disable an input.

```html preview
<moyo-input placeholder="Disabled" size="small" disabled></moyo-input>
<br />
<moyo-input placeholder="Disabled" size="medium" disabled></moyo-input>
<br />
<moyo-input placeholder="Disabled" size="large" disabled></moyo-input>
```

```jsx react
import { MoyoInput } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoInput placeholder="Disabled" size="small" disabled />
    <br />
    <MoyoInput placeholder="Disabled" size="medium" disabled />
    <br />
    <MoyoInput placeholder="Disabled" size="large" disabled />
  </>
);
```

### Sizes

Use the `size` attribute to change an input's size.

```html preview
<moyo-input placeholder="Small" size="small"></moyo-input>
<br />
<moyo-input placeholder="Medium" size="medium"></moyo-input>
<br />
<moyo-input placeholder="Large" size="large"></moyo-input>
```

```jsx react
import { MoyoInput } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoInput placeholder="Small" size="small" />
    <br />
    <MoyoInput placeholder="Medium" size="medium" />
    <br />
    <MoyoInput placeholder="Large" size="large" />
  </>
);
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<moyo-input placeholder="Small" size="small">
  <moyo-icon name="house" slot="prefix"></moyo-icon>
  <moyo-icon name="chat" slot="suffix"></moyo-icon>
</moyo-input>
<br />
<moyo-input placeholder="Medium" size="medium">
  <moyo-icon name="house" slot="prefix"></moyo-icon>
  <moyo-icon name="chat" slot="suffix"></moyo-icon>
</moyo-input>
<br />
<moyo-input placeholder="Large" size="large">
  <moyo-icon name="house" slot="prefix"></moyo-icon>
  <moyo-icon name="chat" slot="suffix"></moyo-icon>
</moyo-input>
```

```jsx react
import { MoyoIcon, MoyoInput } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoInput placeholder="Small" size="small">
      <MoyoIcon name="house" slot="prefix"></MoyoIcon>
      <MoyoIcon name="chat" slot="suffix"></MoyoIcon>
    </MoyoInput>
    <br />
    <MoyoInput placeholder="Medium" size="medium">
      <MoyoIcon name="house" slot="prefix"></MoyoIcon>
      <MoyoIcon name="chat" slot="suffix"></MoyoIcon>
    </MoyoInput>
    <br />
    <MoyoInput placeholder="Large" size="large">
      <MoyoIcon name="house" slot="prefix"></MoyoIcon>
      <MoyoIcon name="chat" slot="suffix"></MoyoIcon>
    </MoyoInput>
  </>
);
```

### Customizing Label Position

Use parts to customize the label's position.

```html preview
<moyo-input class="label-on-left" label="Name"></moyo-input><br />
<moyo-input class="label-on-left" label="Email" type="email"></moyo-input>

<style>
  .label-on-left::part(form-control) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .label-on-left::part(form-control-label) {
    flex: 0 0 auto;
    width: 60px;
    text-align: right;
  }

  .label-on-left::part(form-control-input) {
    flex: 1 1 auto;
  }
</style>
```

[component-metadata:moyo-input]
