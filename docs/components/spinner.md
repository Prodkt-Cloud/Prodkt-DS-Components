# Spinner

[component-header:moyo-spinner]

Spinners are used to show the progress of an indeterminate operation.

```html preview
<moyo-spinner></moyo-spinner>
```

```jsx react
import { MoyoSpinner } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoSpinner />;
```

## Examples

### Size

Spinners are sized based on the current font size. To change their size, set the `font-size` property on the spinner itself or on a parent element as shown below.

```html preview
<moyo-spinner></moyo-spinner>
<moyo-spinner style="font-size: 2rem;"></moyo-spinner>
<moyo-spinner style="font-size: 3rem;"></moyo-spinner>
```

```jsx react
import { MoyoSpinner } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoSpinner />
    <MoyoSpinner style={{ fontSize: '2rem' }} />
    <MoyoSpinner style={{ fontSize: '3rem' }} />
  </>
);
```

### Track Width

The width of the spinner's track can be changed by setting the `--track-width` custom property.

```html preview
<moyo-spinner style="font-size: 50px; --track-width: 10px;"></moyo-spinner>
```

```jsx react
import { MoyoSpinner } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSpinner
    style={{
      fontSize: '3rem',
      '--track-width': '6px'
    }}
  />
);
```

### Color

The spinner's colors can be changed by setting the `--indicator-color` and `--track-color` custom properties.

```html preview
<moyo-spinner style="font-size: 3rem; --indicator-color: deeppink; --track-color: pink;"></moyo-spinner>
```

```jsx react
import { MoyoSpinner } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSpinner
    style={{
      fontSize: '3rem',
      '--indicator-color': 'deeppink',
      '--track-color': 'pink'
    }}
  />
);
```

[component-metadata:moyo-spinner]
