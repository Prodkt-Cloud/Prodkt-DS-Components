# Progress Ring

[component-header:moyo-progress-ring]

Progress rings are used to show the progress of a determinate operation in a circular fashion.

```html preview
<moyo-progress-ring value="25"></moyo-progress-ring>
```

```jsx react
import { MoyoProgressRing } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoProgressRing value="25" />;
```

## Examples

### Size

Use the `--size` custom property to set the diameter of the progress ring.

```html preview
<moyo-progress-ring value="50" style="--size: 200px;"></moyo-progress-ring>
```

```jsx react
import { MoyoProgressRing } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoProgressRing value="50" style={{ '--size': '200px' }} />;
```

### Track Width

Use the `--track-width` custom property to set the width of the progress ring's track.

```html preview
<moyo-progress-ring value="50" style="--track-width: 10px;"></moyo-progress-ring>
```

```jsx react
import { MoyoProgressRing } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoProgressRing value="50" style={{ '--track-width': '10px' }} />;
```

### Colors

To change the color, use the `--track-color` and `--indicator-color` custom properties.

```html preview
<moyo-progress-ring
  value="50"
  style="
    --track-color: pink; 
    --indicator-color: deeppink;
  "
></moyo-progress-ring>
```

```jsx react
import { MoyoProgressRing } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoProgressRing
    value="50"
    style={{
      '--track-color': 'pink',
      '--indicator-color': 'deeppink'
    }}
  />
);
```

### Labels

Use the `label` attribute to label the progress ring and tell assistive devices how to announce it.

```html preview
<moyo-progress-ring value="50" label="Upload progress"></moyo-progress-ring>
```

```jsx react
import { MoyoProgressRing } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoProgressRing value="50" label="Upload progress" />;
```

### Showing Values

Use the default slot to show a label inside the progress ring.

```html preview
<moyo-progress-ring value="50" class="progress-ring-values" style="margin-bottom: .5rem;">50%</moyo-progress-ring>

<br />

<moyo-button circle><moyo-icon name="dash" label="Decrease"></moyo-icon></moyo-button>
<moyo-button circle><moyo-icon name="plus" label="Increase"></moyo-icon></moyo-button>

<script>
  const progressRing = document.querySelector('.progress-ring-values');
  const subtractButton = progressRing.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressRing.value + 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressRing.value - 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });
</script>
```

```jsx react
import { useState } from 'react';
import { MoyoButton, MoyoIcon, MoyoProgressRing } from '@tovutifunk/tovuti/dist/react';

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
      <MoyoProgressRing value={value} style={{ marginBottom: '.5rem' }}>
        {value}%
      </MoyoProgressRing>

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

[component-metadata:moyo-progress-ring]
