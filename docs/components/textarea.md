# Textarea

[component-header:moyo-textarea]

Textareas collect data from the user and allow multiple lines of text.

```html preview
<moyo-textarea></moyo-textarea>
```

```jsx react
import { MoyoTextarea } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoTextarea />;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the textarea an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<moyo-textarea label="Comments"></moyo-textarea>
```

```jsx react
import { MoyoTextarea } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoTextarea label="Comments" />;
```

### Help Text

Add descriptive help text to a textarea with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<moyo-textarea label="Feedback" help-text="Please tell us what you think."> </moyo-textarea>
```

```jsx react
import { MoyoTextarea } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoTextarea label="Feedback" help-text="Please tell us what you think." />;
```

### Rows

Use the `rows` attribute to change the number of text rows that get shown.

```html preview
<moyo-textarea rows="2"></moyo-textarea>
```

```jsx react
import { MoyoTextarea } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoTextarea rows={2} />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<moyo-textarea placeholder="Type something"></moyo-textarea>
```

```jsx react
import { MoyoTextarea } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoTextarea placeholder="Type something" />;
```

### Filled Textareas

Add the `filled` attribute to draw a filled textarea.

```html preview
<moyo-textarea placeholder="Type something" filled></moyo-textarea>
```

```jsx react
import { MoyoTextarea } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoTextarea placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable a textarea.

```html preview
<moyo-textarea placeholder="Textarea" disabled></moyo-textarea>
```

```jsx react
import { MoyoTextarea } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoTextarea placeholder="Textarea" disabled />;
```

### Sizes

Use the `size` attribute to change a textarea's size.

```html preview
<moyo-textarea placeholder="Small" size="small"></moyo-textarea>
<br />
<moyo-textarea placeholder="Medium" size="medium"></moyo-textarea>
<br />
<moyo-textarea placeholder="Large" size="large"></moyo-textarea>
```

```jsx react
import { MoyoTextarea } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoTextarea placeholder="Small" size="small"></MoyoTextarea>
    <br />
    <MoyoTextarea placeholder="Medium" size="medium"></MoyoTextarea>
    <br />
    <MoyoTextarea placeholder="Large" size="large"></MoyoTextarea>
  </>
);
```

### Prevent Resizing

By default, textareas can be resized vertically by the user. To prevent resizing, set the `resize` attribute to `none`.

```html preview
<moyo-textarea resize="none"></moyo-textarea>
```

```jsx react
import { MoyoTextarea } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoTextarea resize="none" />;
```

### Expand with Content

Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.

```html preview
<moyo-textarea resize="auto"></moyo-textarea>
```

```jsx react
import { MoyoTextarea } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoTextarea resize="auto" />;
```

[component-metadata:moyo-textarea]
