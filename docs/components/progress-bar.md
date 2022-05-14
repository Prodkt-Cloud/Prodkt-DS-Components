# Progress Bar

[component-header:moyo-progress-bar]

Progress bars are used to show the status of an ongoing operation.

```html preview
<moyo-progress-bar value="50"></moyo-progress-bar>
```

```jsx react
import { MoyoProgressBar } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoProgressBar value={50} />;
```

## Examples

### Labels

Use the `label` attribute to label the progress bar and tell assistive devices how to announce it.

```html preview
<moyo-progress-bar value="50" label="Upload progress"></moyo-progress-bar>
```

```jsx react
import { MoyoProgressBar } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoProgressBar value="50" label="Upload progress" />;
```

### Custom Height

Use the `--height` custom property to set the progress bar's height.

```html preview
<moyo-progress-bar value="50" style="--height: 6px;"></moyo-progress-bar>
```

```jsx react
import { MoyoProgressBar } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoProgressBar value={50} style={{ '--height': '6px' }} />;
```

### Showing Values

Use the default slot to show a value.

```html preview
<moyo-progress-bar value="50" class="progress-bar-values">50%</moyo-progress-bar>

<br />

<moyo-button circle><moyo-icon name="dash" label="Decrease"></moyo-icon></moyo-button>
<moyo-button circle><moyo-icon name="plus" label="Increase"></moyo-icon></moyo-button>

<script>
  const progressBar = document.querySelector('.progress-bar-values');
  const subtractButton = progressBar.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressBar.value + 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressBar.value - 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });
</script>
```

```jsx react
import { useState } from 'react';
import { MoyoButton, MoyoIcon, MoyoProgressBar } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  const [value, setValue] = useState(50);

  function adjustValue(amount) {
    let newValue = value + amount;
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    setValue(newValue);
  }

  return (
    <>
      <MoyoProgressBar value={value}>{value}%</MoyoProgressBar>

      <br />

      <MoyoButton circle onClick={() => adjustValue(-10)}>
        <MoyoIcon name="dash" label="Decrease" />
      </MoyoButton>

      <MoyoButton circle onClick={() => adjustValue(10)}>
        <MoyoIcon name="plus" label="Increase" />
      </MoyoButton>
    </>
  );
};
```

### Indeterminate

The `indeterminate` attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, `value` is ignored and the label, if present, will not be shown.

```html preview
<moyo-progress-bar indeterminate></moyo-progress-bar>
```

```jsx react
import { MoyoProgressBar } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoProgressBar indeterminate />;
```

[component-metadata:moyo-progress-bar]
