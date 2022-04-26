# Radio Button

[component-header:moyo-radio-button]

Radios buttons allow the user to select a single option from a group using a button-like control.

Radio buttons are designed to be used with [radio groups](/components/radio-group). When a radio button has focus, the arrow keys can be used to change the selected option just like standard radio controls.

```html preview
<moyo-radio-group label="Select an option">
  <moyo-radio-button name="a" value="1" checked>Option 1</moyo-radio-button>
  <moyo-radio-button name="a" value="2">Option 2</moyo-radio-button>
  <moyo-radio-button name="a" value="3">Option 3</moyo-radio-button>
</moyo-radio-group>
```

```jsx react
import { MoyoRadioButton,MoyoRadioGroup } from '@tovutifunk/tovuti/dist/react';

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

## Examples

### Checked

To set the initial checked state, use the `checked` attribute.

```html preview
<moyo-radio-group label="Select an option">
  <moyo-radio-button name="option" value="1" checked>Option 1</moyo-radio-button>
  <moyo-radio-button name="option" value="2">Option 2</moyo-radio-button>
  <moyo-radio-button name="option" value="3">Option 3</moyo-radio-button>
</moyo-radio-group>
```

```jsx react
import { MoyoRadioButton,MoyoRadioGroup } from '@tovutifunk/tovuti/dist/react';

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

### Disabled

Use the `disabled` attribute to disable a radio button.

```html preview
<moyo-radio-group label="Select an option">
  <moyo-radio-button name="option" value="1" checked>Option 1</moyo-radio-button>
  <moyo-radio-button name="option" value="2">Option 2</moyo-radio-button>
  <moyo-radio-button name="option" value="3" disabled>Option 3</moyo-radio-button>
</moyo-radio-group>
```

```jsx react
import { MoyoRadioButton,MoyoRadioGroup } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoRadioGroup label="Select an option">
    <MoyoRadioButton name="option" value="1" checked>
      Option 1
    </MoyoRadioButton>
    <MoyoRadioButton name="option" value="2">
      Option 2
    </MoyoRadioButton>
    <MoyoRadioButton name="option" value="3" disabled>
      Option 3
    </MoyoRadioButton>
  </MoyoRadioGroup>
);
```

### Variants

Use the `variant` attribute to set the button's variant.

```html preview
<moyo-radio-group label="Select an option">
  <moyo-radio-button variant="default" name="option" value="1" checked>Option 1</moyo-radio-button>
  <moyo-radio-button variant="default" name="option" value="2">Option 2</moyo-radio-button>
  <moyo-radio-button variant="default" name="option" value="3">Option 3</moyo-radio-button>
</moyo-radio-group>

<br />

<moyo-radio-group label="Select an option">
  <moyo-radio-button variant="primary" name="option" value="1" checked>Option 1</moyo-radio-button>
  <moyo-radio-button variant="primary" name="option" value="2">Option 2</moyo-radio-button>
  <moyo-radio-button variant="primary" name="option" value="3">Option 3</moyo-radio-button>
</moyo-radio-group>

<br />

<moyo-radio-group label="Select an option">
  <moyo-radio-button variant="success" name="option" value="1" checked>Option 1</moyo-radio-button>
  <moyo-radio-button variant="success" name="option" value="2">Option 2</moyo-radio-button>
  <moyo-radio-button variant="success" name="option" value="3">Option 3</moyo-radio-button>
</moyo-radio-group>

<br />

<moyo-radio-group label="Select an option">
  <moyo-radio-button variant="neutral" name="option" value="1" checked>Option 1</moyo-radio-button>
  <moyo-radio-button variant="neutral" name="option" value="2">Option 2</moyo-radio-button>
  <moyo-radio-button variant="neutral" name="option" value="3">Option 3</moyo-radio-button>
</moyo-radio-group>

<br />

<moyo-radio-group label="Select an option">
  <moyo-radio-button variant="warning" name="option" value="1" checked>Option 1</moyo-radio-button>
  <moyo-radio-button variant="warning" name="option" value="2">Option 2</moyo-radio-button>
  <moyo-radio-button variant="warning" name="option" value="3">Option 3</moyo-radio-button>
</moyo-radio-group>

<br />

<moyo-radio-group label="Select an option">
  <moyo-radio-button variant="success" name="option" value="1" checked>Option 1</moyo-radio-button>
  <moyo-radio-button variant="success" name="option" value="2">Option 2</moyo-radio-button>
  <moyo-radio-button variant="success" name="option" value="3">Option 3</moyo-radio-button>
</moyo-radio-group>
```

```jsx react
import { MoyoRadioButton,MoyoRadioGroup } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoRadioGroup label="Select an option">
    <MoyoRadioButton variant="default" name="option" value="1" checked>Option 1</MoyoRadioButton>
    <MoyoRadioButton variant="default" name="option" value="2">Option 2</MoyoRadioButton>
    <MoyoRadioButton variant="default" name="option" value="3">Option 3</MoyoRadioButton>
  </MoyoRadioGroup>

  <br />

  <MoyoRadioGroup label="Select an option">
    <MoyoRadioButton variant="primary" name="option" value="1" checked>Option 1</MoyoRadioButton>
    <MoyoRadioButton variant="primary" name="option" value="2">Option 2</MoyoRadioButton>
    <MoyoRadioButton variant="primary" name="option" value="3">Option 3</MoyoRadioButton>
  </MoyoRadioGroup>

  <br />

  <MoyoRadioGroup label="Select an option">
    <MoyoRadioButton variant="success" name="option" value="1" checked>Option 1</MoyoRadioButton>
    <MoyoRadioButton variant="success" name="option" value="2">Option 2</MoyoRadioButton>
    <MoyoRadioButton variant="success" name="option" value="3">Option 3</MoyoRadioButton>
  </MoyoRadioGroup>

  <br />

  <MoyoRadioGroup label="Select an option">
    <MoyoRadioButton variant="neutral" name="option" value="1" checked>Option 1</MoyoRadioButton>
    <MoyoRadioButton variant="neutral" name="option" value="2">Option 2</MoyoRadioButton>
    <MoyoRadioButton variant="neutral" name="option" value="3">Option 3</MoyoRadioButton>
  </MoyoRadioGroup>

  <br />

  <MoyoRadioGroup label="Select an option">
    <MoyoRadioButton variant="warning" name="option" value="1" checked>Option 1</MoyoRadioButton>
    <MoyoRadioButton variant="warning" name="option" value="2">Option 2</MoyoRadioButton>
    <MoyoRadioButton variant="warning" name="option" value="3">Option 3</MoyoRadioButton>
  </MoyoRadioGroup>

  <br />

  <MoyoRadioGroup label="Select an option">
    <MoyoRadioButton variant="success" name="option" value="1" checked>Option 1</MoyoRadioButton>
    <MoyoRadioButton variant="success" name="option" value="2">Option 2</MoyoRadioButton>
    <MoyoRadioButton variant="success" name="option" value="3">Option 3</MoyoRadioButton>
  </MoyoRadioGroup>
);
```

### Sizes

Use the `size` attribute to change a radio button's size.

```html preview
<moyo-radio-group label="Select an option">
  <moyo-radio-button size="small" name="option" value="1" checked>Option 1</moyo-radio-button>
  <moyo-radio-button size="small" name="option" value="2">Option 2</moyo-radio-button>
  <moyo-radio-button size="small" name="option" value="3">Option 3</moyo-radio-button>
</moyo-radio-group>

<br />

<moyo-radio-group label="Select an option">
  <moyo-radio-button size="medium" name="option" value="1" checked>Option 1</moyo-radio-button>
  <moyo-radio-button size="medium" name="option" value="2">Option 2</moyo-radio-button>
  <moyo-radio-button size="medium" name="option" value="3">Option 3</moyo-radio-button>
</moyo-radio-group>

<br />

<moyo-radio-group label="Select an option">
  <moyo-radio-button size="large" name="option" value="1" checked>Option 1</moyo-radio-button>
  <moyo-radio-button size="large" name="option" value="2">Option 2</moyo-radio-button>
  <moyo-radio-button size="large" name="option" value="3">Option 3</moyo-radio-button>
</moyo-radio-group>
```

```jsx react
import { MoyoRadioButton,MoyoRadioGroup } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoRadioGroup label="Select an option">
    <MoyoRadioButton size="small" name="option" value="1" checked>Option 1</MoyoRadioButton>
    <MoyoRadioButton size="small" name="option" value="2">Option 2</MoyoRadioButton>
    <MoyoRadioButton size="small" name="option" value="3">Option 3</MoyoRadioButton>
  </MoyoRadioGroup>

  <br />

  <MoyoRadioGroup label="Select an option">
    <MoyoRadioButton size="medium" name="option" value="1" checked>Option 1</MoyoRadioButton>
    <MoyoRadioButton size="medium" name="option" value="2">Option 2</MoyoRadioButton>
    <MoyoRadioButton size="medium" name="option" value="3">Option 3</MoyoRadioButton>
  </MoyoRadioGroup>

  <br />

  <MoyoRadioGroup label="Select an option">
    <MoyoRadioButton size="large" name="option" value="1" checked>Option 1</MoyoRadioButton>
    <MoyoRadioButton size="large" name="option" value="2">Option 2</MoyoRadioButton>
    <MoyoRadioButton size="large" name="option" value="3">Option 3</MoyoRadioButton>
  </MoyoRadioGroup>
);
```

### Pill Buttons

Use the `pill` attribute to give radio buttons rounded edges.

```html preview
<moyo-radio-group label="Select an option">
  <moyo-radio-button pill size="small" name="option" value="1" checked>Option 1</moyo-radio-button>
  <moyo-radio-button pill size="small" name="option" value="2">Option 2</moyo-radio-button>
  <moyo-radio-button pill size="small" name="option" value="3">Option 3</moyo-radio-button>
</moyo-radio-group>

<br />

<moyo-radio-group label="Select an option">
  <moyo-radio-button pill size="medium" name="option" value="1" checked>Option 1</moyo-radio-button>
  <moyo-radio-button pill size="medium" name="option" value="2">Option 2</moyo-radio-button>
  <moyo-radio-button pill size="medium" name="option" value="3">Option 3</moyo-radio-button>
</moyo-radio-group>

<br />

<moyo-radio-group label="Select an option">
  <moyo-radio-button pill size="large" name="option" value="1" checked>Option 1</moyo-radio-button>
  <moyo-radio-button pill size="large" name="option" value="2">Option 2</moyo-radio-button>
  <moyo-radio-button pill size="large" name="option" value="3">Option 3</moyo-radio-button>
</moyo-radio-group>
```

```jsx react
import { MoyoRadioButton,MoyoRadioGroup } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoRadioGroup label="Select an option">
    <MoyoRadioButton pill size="small" name="option" value="1" checked>Option 1</MoyoRadioButton>
    <MoyoRadioButton pill size="small" name="option" value="2">Option 2</MoyoRadioButton>
    <MoyoRadioButton pill size="small" name="option" value="3">Option 3</MoyoRadioButton>
  </MoyoRadioGroup>

  <br />

  <MoyoRadioGroup label="Select an option">
    <MoyoRadioButton pill size="medium" name="option" value="1" checked>Option 1</MoyoRadioButton>
    <MoyoRadioButton pill size="medium" name="option" value="2">Option 2</MoyoRadioButton>
    <MoyoRadioButton pill size="medium" name="option" value="3">Option 3</MoyoRadioButton>
  </MoyoRadioGroup>

  <br />

  <MoyoRadioGroup label="Select an option">
    <MoyoRadioButton pill size="large" name="option" value="1" checked>Option 1</MoyoRadioButton>
    <MoyoRadioButton pill size="large" name="option" value="2">Option 2</MoyoRadioButton>
    <MoyoRadioButton pill size="large" name="option" value="3">Option 3</MoyoRadioButton>
  </MoyoRadioGroup>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<moyo-radio-group label="Select an option">
  <moyo-radio-button name="a" value="1" checked>
    <moyo-icon slot="prefix" name="archive"></moyo-icon>
    Option 1
  </moyo-radio-button>

  <moyo-radio-button name="a" value="2">
    <moyo-icon slot="suffix" name="bag"></moyo-icon>
    Option 2
  </moyo-radio-button>

  <moyo-radio-button name="a" value="3">
    <moyo-icon slot="prefix" name="gift"></moyo-icon>
    <moyo-icon slot="suffix" name="cart"></moyo-icon>
    Option 3
  </moyo-radio-button>
</moyo-radio-group>
```

```jsx react
import { MoyoIcon,MoyoRadioButton,MoyoRadioGroup } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoRadioGroup label="Select an option">
    <MoyoRadioButton name="a" value="1" checked>
      <MoyoIcon slot="prefix" name="archive" />
      Option 1
    </MoyoRadioButton>

    <MoyoRadioButton name="a" value="2">
      <MoyoIcon slot="suffix" name="bag" />
      Option 2
    </MoyoRadioButton>

    <MoyoRadioButton name="a" value="3">
      <MoyoIcon slot="prefix" name="gift" />
      <MoyoIcon slot="suffix" name="cart" />
      Option 3
    </MoyoRadioButton>
  </MoyoRadioGroup>
);
```

### Buttons with Icons

You can omit button labels and use icons instead. Make sure to set a `label` attribute on each icon so screen readers will announce each option correctly.

```html preview
<moyo-radio-group label="Select an option">
  <moyo-radio-button name="a" value="angry">
    <moyo-icon name="emoji-angry" label="Angry"></moyo-icon>
  </moyo-radio-button>

  <moyo-radio-button name="a" value="sad">
    <moyo-icon name="emoji-frown" label="Sad"></moyo-icon>
  </moyo-radio-button>

  <moyo-radio-button name="a" value="neutral" checked>
    <moyo-icon name="emoji-neutral" label="Neutral"></moyo-icon>
  </moyo-radio-button>

  <moyo-radio-button name="a" value="happy">
    <moyo-icon name="emoji-smile" label="Happy"></moyo-icon>
  </moyo-radio-button>

  <moyo-radio-button name="a" value="laughing">
    <moyo-icon name="emoji-laughing" label="Laughing"></moyo-icon>
  </moyo-radio-button>
</moyo-radio-group>
```

```jsx react
import { MoyoIcon,MoyoRadioButton,MoyoRadioGroup } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoRadioGroup label="Select an option">
    <MoyoRadioButton name="a" value="angry">
      <MoyoIcon name="emoji-angry" label="Angry" />
    </MoyoRadioButton>

    <MoyoRadioButton name="a" value="sad">
      <MoyoIcon name="emoji-frown" label="Sad" />
    </MoyoRadioButton>

    <MoyoRadioButton name="a" value="neutral" checked>
      <MoyoIcon name="emoji-neutral" label="Neutral" />
    </MoyoRadioButton>

    <MoyoRadioButton name="a" value="happy">
      <MoyoIcon name="emoji-smile" label="Happy" />
    </MoyoRadioButton>

    <MoyoRadioButton name="a" value="laughing">
      <MoyoIcon name="emoji-laughing" label="Laughing" />
    </MoyoRadioButton>
  </MoyoRadioGroup>
);
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <moyo-radio-group label="Select an option">
    <moyo-radio-button name="a" value="1" checked>Not me</moyo-radio-button>
    <moyo-radio-button name="a" value="2">Me neither</moyo-radio-button>
    <moyo-radio-button name="a" value="3">Choose me</moyo-radio-button>
  </moyo-radio-group>
  <br />
  <moyo-button type="submit" variant="primary">Submit</moyo-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const radioButton = form.querySelectorAll('moyo-radio-button')[2];
  const errorMessage = 'You must choose this option';
  // Set initial validity as soon as the element is defined
  customElements.whenDefined('moyo-radio-button').then(() => {
    radioButton.setCustomValidity(errorMessage);
  });
  // Update validity when a selection is made
  form.addEventListener('moyo-change', () => {
    const isValid = radioButton.checked;
    radioButton.setCustomValidity(isValid ? '' : errorMessage);
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
import { MoyoButton,MoyoIcon,MoyoRadioButton,MoyoRadioGroup } from '@tovutifunk/tovuti/dist/react';
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
        <MoyoRadioButton name="a" value="1" checked onMoyoChange={handleChange}>
          Not me
        </MoyoRadioButton>
        <MoyoRadioButton name="a" value="2" onMoyoChange={handleChange}>
          Me neither
        </MoyoRadioButton>
        <MoyoRadioButton ref={radio} name="a" value="3" onMoyoChange={handleChange}>
          Choose me
        </MoyoRadioButton>
      </MoyoRadioGroup>
      <br />
      <MoyoButton type="submit" variant="primary">
        Submit
      </MoyoButton>
    </form>
  );
};
```

[component-metadata:moyo-radio-button]
