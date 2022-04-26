# Format Number

[component-header:moyo-format-number]

Formats a number using the specified locale and options.

Localization is handled by the browser's [`Intl.NumberFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). No language packs are required.

```html preview
<div class="format-number-overview">
  <moyo-format-number value="1000"></moyo-format-number>
  <br /><br />
  <moyo-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></moyo-input>
</div>

<script>
  const container = document.querySelector('.format-number-overview');
  const formatter = container.querySelector('moyo-format-number');
  const input = container.querySelector('moyo-input');

  input.addEventListener('moyo-input', () => (formatter.value = input.value || 0));
</script>
```

```jsx react
import { useState } from 'react';
import { MoyoFormatNumber, MoyoInput } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      <MoyoFormatNumber value={value} />
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

### Percentages

To get the value as a percent, set the `type` attribute to `percent`.

```html preview
<moyo-format-number type="percent" value="0"></moyo-format-number><br />
<moyo-format-number type="percent" value="0.25"></moyo-format-number><br />
<moyo-format-number type="percent" value="0.50"></moyo-format-number><br />
<moyo-format-number type="percent" value="0.75"></moyo-format-number><br />
<moyo-format-number type="percent" value="1"></moyo-format-number>
```

```jsx react
import { MoyoFormatNumber } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoFormatNumber type="percent" value={0} />
    <br />
    <MoyoFormatNumber type="percent" value={0.25} />
    <br />
    <MoyoFormatNumber type="percent" value={0.5} />
    <br />
    <MoyoFormatNumber type="percent" value={0.75} />
    <br />
    <MoyoFormatNumber type="percent" value={1} />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html preview
English: <moyo-format-number value="2000" lang="en" minimum-fraction-digits="2"></moyo-format-number><br />
German: <moyo-format-number value="2000" lang="de" minimum-fraction-digits="2"></moyo-format-number><br />
Russian: <moyo-format-number value="2000" lang="ru" minimum-fraction-digits="2"></moyo-format-number>
```

```jsx react
import { MoyoFormatNumber } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    English: <MoyoFormatNumber value="2000" lang="en" minimum-fraction-digits="2" />
    <br />
    German: <MoyoFormatNumber value="2000" lang="de" minimum-fraction-digits="2" />
    <br />
    Russian: <MoyoFormatNumber value="2000" lang="ru" minimum-fraction-digits="2" />
  </>
);
```

### Currency

To format a number as a monetary value, set the `type` attribute to `currency` and set the `currency` attribute to the desired ISO 4217 currency code. You should also specify `lang` to ensure the the number is formatted correctly for the target locale.

```html preview
<moyo-format-number type="currency" currency="USD" value="2000" lang="en-US"></moyo-format-number><br />
<moyo-format-number type="currency" currency="GBP" value="2000" lang="en-GB"></moyo-format-number><br />
<moyo-format-number type="currency" currency="EUR" value="2000" lang="de"></moyo-format-number><br />
<moyo-format-number type="currency" currency="RUB" value="2000" lang="ru"></moyo-format-number><br />
<moyo-format-number type="currency" currency="CNY" value="2000" lang="zh-cn"></moyo-format-number>
```

```jsx react
import { MoyoFormatNumber } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoFormatNumber type="currency" currency="USD" value="2000" lang="en-US" />
    <br />
    <MoyoFormatNumber type="currency" currency="GBP" value="2000" lang="en-GB" />
    <br />
    <MoyoFormatNumber type="currency" currency="EUR" value="2000" lang="de" />
    <br />
    <MoyoFormatNumber type="currency" currency="RUB" value="2000" lang="ru" />
    <br />
    <MoyoFormatNumber type="currency" currency="CNY" value="2000" lang="zh-cn" />
  </>
);
```

[component-metadata:moyo-format-number]
