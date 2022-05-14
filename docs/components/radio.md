# Radio

[component-header:moyo-radio]

Radios allow the user to select a single option from a group.

Radios are designed to be used with [radio groups](/components/radio-group).

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

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Checked

To set the initial checked state, use the `checked` attribute.

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

### Disabled

Use the `disabled` attribute to disable a radio.

```html preview
<moyo-radio-group label="Select an option">
  <moyo-radio name="option" value="1" checked>Option 1</moyo-radio>
  <moyo-radio name="option" value="2">Option 2</moyo-radio>
  <moyo-radio name="option" value="3" disabled>Option 3</moyo-radio>
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
    <MoyoRadio name="option" value="3" disabled>
      Option 3
    </MoyoRadio>
  </MoyoRadioGroup>
);
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <moyo-radio-group label="Select an option">
    <moyo-radio name="a" value="1" checked>Not me</moyo-radio>
    <moyo-radio name="a" value="2">Me neither</moyo-radio>
    <moyo-radio name="a" value="3">Choose me</moyo-radio>
  </moyo-radio-group>
  <br />
  <moyo-button type="submit" variant="primary">Submit</moyo-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const radio = form.querySelectorAll('moyo-radio')[2];
  const errorMessage = 'You must choose this option';
  // Set initial validity as soon as the element is defined
  customElements.whenDefined('moyo-radio').then(() => {
    radio.setCustomValidity(errorMessage);
  });
  // Update validity when a selection is made
  form.addEventListener('moyo-change', () => {
    const isValid = radio.checked;
    radio.setCustomValidity(isValid ? '' : errorMessage);
  });
  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { useEffect, useRef } from 'react';
import { MoyoButton, MoyoIcon, MoyoRadio, MoyoRadioGroup } from '@tovutifunk/tovuti/dist/react';
const App = () => {
  const radio = useRef(null);
  const errorMessage = 'You must choose this option';
  function handleChange(event) {
    radio.current.setCustomValidity(radio.current.checked ? '' : errorMessage);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }
  useEffect(() => {
    radio.current.setCustomValidity(errorMessage);
  }, []);
  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <MoyoRadioGroup label="Select an option">
        <MoyoRadio name="a" value="1" checked onMoyoChange={handleChange}>
          Not me
        </MoyoRadio>
        <MoyoRadio name="a" value="2" onMoyoChange={handleChange}>
          Me neither
        </MoyoRadio>
        <MoyoRadio ref={radio} name="a" value="3" onMoyoChange={handleChange}>
          Choose me
        </MoyoRadio>
      </MoyoRadioGroup>
      <br />
      <MoyoButton type="submit" variant="primary">
        Submit
      </MoyoButton>
    </form>
  );
};
```

[component-metadata:moyo-radio]
