# Format Bytes

[component-header:moyo-format-bytes]

Formats a number as a human readable bytes value.

```html preview
<div class="format-bytes-overview">
  The file is <moyo-format-bytes value="1000"></moyo-format-bytes> in size. <br /><br />
  <moyo-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></moyo-input>
</div>

<script>
  const container = document.querySelector('.format-bytes-overview');
  const formatter = container.querySelector('moyo-format-bytes');
  const input = container.querySelector('moyo-input');

  input.addEventListener('moyo-input', () => (formatter.value = input.value || 0));
</script>
```

```jsx react
import { useState } from 'react';
import { MoyoButton,MoyoFormatBytes, MoyoInput } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      The file is <MoyoFormatBytes value={value} /> in size.
      <br />
      <br />
      <MoyoInput
        type="number"
        value={value}
        label="Number to Format"
        style={{ maxWidth: '180px' }}
        onMoyoInput={event => setValue(event.target.value)}
      />
    </>
  );
};
```

## Examples

### Formatting Bytes

Set the `value` attribute to a number to get the value in bytes.

```html preview
<moyo-format-bytes value="12"></moyo-format-bytes><br />
<moyo-format-bytes value="1200"></moyo-format-bytes><br />
<moyo-format-bytes value="1200000"></moyo-format-bytes><br />
<moyo-format-bytes value="1200000000"></moyo-format-bytes>
```

```jsx react
import { MoyoFormatBytes } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoFormatBytes value="12" />
    <br />
    <MoyoFormatBytes value="1200" />
    <br />
    <MoyoFormatBytes value="1200000" />
    <br />
    <MoyoFormatBytes value="1200000000" />
  </>
);
```

### Formatting Bits

To get the value in bits, set the `unit` attribute to `bit`.

```html preview
<moyo-format-bytes value="12" unit="bit"></moyo-format-bytes><br />
<moyo-format-bytes value="1200" unit="bit"></moyo-format-bytes><br />
<moyo-format-bytes value="1200000" unit="bit"></moyo-format-bytes><br />
<moyo-format-bytes value="1200000000" unit="bit"></moyo-format-bytes>
```

```jsx react
import { MoyoFormatBytes } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoFormatBytes value="12" unit="bit" />
    <br />
    <MoyoFormatBytes value="1200" unit="bit" />
    <br />
    <MoyoFormatBytes value="1200000" unit="bit" />
    <br />
    <MoyoFormatBytes value="1200000000" unit="bit" />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html preview
<moyo-format-bytes value="12" lang="de"></moyo-format-bytes><br />
<moyo-format-bytes value="1200" lang="de"></moyo-format-bytes><br />
<moyo-format-bytes value="1200000" lang="de"></moyo-format-bytes><br />
<moyo-format-bytes value="1200000000" lang="de"></moyo-format-bytes>
```

```jsx react
import { MoyoFormatBytes } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoFormatBytes value="12" lang="de" />
    <br />
    <MoyoFormatBytes value="1200" lang="de" />
    <br />
    <MoyoFormatBytes value="1200000" lang="de" />
    <br />
    <MoyoFormatBytes value="1200000000" lang="de" />
  </>
);
```

[component-metadata:moyo-format-bytes]
