# Checkbox

[component-header:moyo-checkbox]

Checkboxes allow the user to toggle an option on or off.

```html preview
<moyo-checkbox>Checkbox</moyo-checkbox>
```

```jsx react
import { MoyoCheckbox } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoCheckbox>Checkbox</MoyoCheckbox>;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Checked

Use the `checked` attribute to activate the checkbox.

```html preview
<moyo-checkbox checked>Checked</moyo-checkbox>
```

```jsx react
import { MoyoCheckbox } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoCheckbox checked>Checked</MoyoCheckbox>;
```

### Indeterminate

Use the `indeterminate` attribute to make the checkbox indeterminate.

```html preview
<moyo-checkbox indeterminate>Indeterminate</moyo-checkbox>
```

```jsx react
import { MoyoCheckbox } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoCheckbox indeterminate>Indeterminate</MoyoCheckbox>;
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

```html preview
<moyo-checkbox disabled>Disabled</moyo-checkbox>
```

```jsx react
import { MoyoCheckbox } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoCheckbox disabled>Disabled</MoyoCheckbox>;
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <moyo-checkbox>Check me</moyo-checkbox>
  <br />
  <moyo-button type="submit" variant="primary" style="margin-top: 1rem;">Submit</moyo-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('moyo-checkbox');
  const errorMessage = `Don't forget to check me!`;
  // Set initial validity as soon as the element is defined
  customElements.whenDefined('moyo-checkbox').then(() => {
    checkbox.setCustomValidity(errorMessage);
  });
  // Update validity on change
  checkbox.addEventListener('moyo-change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });
  // Handle submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { useEffect, useRef } from 'react';
import { MoyoButton,MoyoCheckbox } from '@tovutifunk/tovuti/dist/react';
const App = () => {
  const checkbox = useRef(null);
  const errorMessage = `Don't forget to check me!`;
  function handleChange() {
    checkbox.current.setCustomValidity(checkbox.current.checked ? '' : errorMessage);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }
  useEffect(() => {
    checkbox.current.setCustomValidity(errorMessage);
  }, []);
  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <MoyoCheckbox ref={checkbox} onMoyoChange={handleChange}>
        Check me
      </MoyoCheckbox>
      <br />
      <MoyoButton type="submit" variant="primary" style={{ marginTop: '1rem' }}>
        Submit
      </MoyoButton>
    </form>
  );
};
```

[component-metadata:moyo-checkbox]
