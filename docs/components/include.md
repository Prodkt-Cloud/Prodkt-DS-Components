# Include

[component-header:moyo-include]

Includes give you the power to embed external HTML files into the page.

Included files are asynchronously requested using `window.fetch()`. Requests are cached, so the same file can be included multiple times, but only one request will be made.

The included content will be inserted into the `<moyo-include>` element's default slot so it can be easily accessed and styled through the light DOM.

```html preview
<moyo-include src="https://prodkt.cloud/assets/examples/include.html"></moyo-include>
```

```jsx react
import { MoyoInclude } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoInclude src="https://prodkt.cloud/assets/examples/include.html" />;
```

## Examples

### Listening for Events

When an include file loads successfully, the `moyo-load` event will be emitted. You can listen for this event to add custom loading logic to your includes.

If the request fails, the `moyo-error` event will be emitted. In this case, `event.detail.status` will contain the resulting HTTP status code of the request, e.g. 404 (not found).

```html
<moyo-include src="https://prodkt.cloud/assets/examples/include.html"></moyo-include>

<script>
  const include = document.querySelector('moyo-include');

  include.addEventListener('moyo-load', () => {
    console.log('Success');
  });

  include.addEventListener('moyo-error', event => {
    console.log('Error', event.detail.status);
  });
</script>
```

[component-metadata:moyo-include]
