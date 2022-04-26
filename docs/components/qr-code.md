# QR Code

[component-header:moyo-qr-code]

Generates a [QR code](https://www.qrcode.com/) and renders it using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).

QR codes are useful for providing small pieces of information to users who can quickly scan them with a smartphone. Most smartphones have built-in QR code scanners, so simply pointing the camera at a QR code will decode it and allow the user to visit a website, dial a phone number, read a message, etc.

```html preview
<div class="qr-overview">
  <moyo-qr-code value="https://prodkt.cloud/" label="Scan this code to visit Tovuti on the web!"></moyo-qr-code>
  <br />

  <moyo-input maxlength="255" clearable label="Value"></moyo-input>
</div>

<script>
  const container = document.querySelector('.qr-overview');
  const qrCode = container.querySelector('moyo-qr-code');
  const input = container.querySelector('moyo-input');

  input.value = qrCode.value;
  input.addEventListener('moyo-input', () => (qrCode.value = input.value));
</script>

<style>
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview moyo-input {
    margin-top: 1rem;
  }
</style>
```

```jsx react
import { useState } from 'react';
import { MoyoQrCode, MoyoInput } from '@tovutifunk/tovuti/dist/react';

const css = `
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview moyo-input {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [value, setValue] = useState('https://prodkt.cloud/');

  return (
    <>
      <div className="qr-overview">
        <MoyoQrCode value={value} label="Scan this code to visit Tovuti on the web!" />
        <br />

        <MoyoInput maxlength="255" clearable onInput={event => setValue(event.target.value)} />
      </div>

      <style>{css}</style>
    </>
  );
};
```

## Examples

### Colors

Use the `fill` and `background` attributes to modify the QR code's colors. You should always ensure good contrast for optimal compatibility with QR code scanners.

```html preview
<moyo-qr-code value="https://prodkt.cloud/" fill="deeppink" background="white"></moyo-qr-code>
```

```jsx react
import { MoyoQrCode } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoQrCode value="https://prodkt.cloud/" fill="deeppink" background="white" />;
```

### Size

Use the `size` attribute to change the size of the QR code.

```html preview
<moyo-qr-code value="https://prodkt.cloud/" size="64"></moyo-qr-code>
```

```jsx react
import { MoyoQrCode } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoQrCode value="https://prodkt.cloud/" size="64" />;
```

### Radius

Create a rounded effect with the `radius` attribute.

```html preview
<moyo-qr-code value="https://prodkt.cloud/" radius="0.5"></moyo-qr-code>
```

```jsx react
import { MoyoQrCode } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoQrCode value="https://prodkt.cloud/" radius="0.5" />;
```

### Error Correction

QR codes can be rendered with various levels of [error correction](https://www.qrcode.com/en/about/error_correction.html) that can be set using the `error-correction` attribute. This example generates four codes with the same value using different error correction levels.

```html preview
<div class="qr-error-correction">
  <moyo-qr-code value="https://prodkt.cloud/" error-correction="L"></moyo-qr-code>
  <moyo-qr-code value="https://prodkt.cloud/" error-correction="M"></moyo-qr-code>
  <moyo-qr-code value="https://prodkt.cloud/" error-correction="Q"></moyo-qr-code>
  <moyo-qr-code value="https://prodkt.cloud/" error-correction="H"></moyo-qr-code>
</div>

<style>
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
```

```jsx react
import { MoyoQrCode } from '@tovutifunk/tovuti/dist/react';

const css = `
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const App = () => {
  return (
    <>
      <div className="qr-error-correction">
        <MoyoQrCode value="https://prodkt.cloud/" error-correction="L" />
        <MoyoQrCode value="https://prodkt.cloud/" error-correction="M" />
        <MoyoQrCode value="https://prodkt.cloud/" error-correction="Q" />
        <MoyoQrCode value="https://prodkt.cloud/" error-correction="H" />
      </div>

      <style>{css}</style>
    </>
  );
};
```

[component-metadata:moyo-qr-code]
