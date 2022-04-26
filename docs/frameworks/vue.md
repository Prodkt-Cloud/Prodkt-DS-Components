# Vue

Vue [plays nice](https://custom-elements-everywhere.com/#vue) with custom elements, so you can use Tovuti in your Vue apps with ease.

?> These instructions are for Vue 2. If you're using Vue 3, [please help us update this page](https://github.com/tovutifunk/tovuti/blob/next/docs/frameworks/vue.md).

## Installation

To add Tovuti to your Vue app, install the package from npm.

```bash
npm install @tovutifunk/tovuti
```

Next, [include a theme](/getting-started/themes) and set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets. In this example, we'll import the light theme and use the CDN as a base path.

```jsx
import '@tovutifunk/tovuti/dist/themes/light.css';
import { setBasePath } from '@tovutifunk/tovuti/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@tovutifunk/tovuti@%VERSION%/dist/');
```

?> If you'd rather not use the CDN for assets, you can create a build task that copies `node_modules/@tovutifunk/tovuti/dist/assets` into a public folder in your app. Then you can point the base path to that folder instead.

## Configuration

You'll need to tell Vue to ignore Tovuti components. This is pretty easy because they all start with `moyo-`.

```js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.config.compilerOptions.isCustomElement = tag => tag.startsWith('moyo-');

app.mount('#app');
```

Now you can start using Tovuti components in your app!

## Usage

### Binding Complex Data

When binding complex data such as objects and arrays, use the `.prop` modifier to make Vue bind them as a property instead of an attribute.

```html
<moyo-color-picker :swatches.prop="mySwatches" />
```

### Two-way Binding

One caveat is there's currently [no support for v-model on custom elements](https://github.com/vuejs/vue/issues/7830), but you can still achieve two-way binding manually.

```html
<!-- This doesn't work -->
<moyo-input v-model="name">
  <!-- This works, but it's a bit longer -->
  <moyo-input :value="name" @input="name = $event.target.value"></moyo-input
></moyo-input>
```

If that's too verbose for your liking, you can use a custom directive instead. [This utility](https://www.npmjs.com/package/@tovutifunk/vue-moyo-model) adds a custom directive that will work just like `v-model` but for Tovuti components. To install it, use this command.

```bash
npm install @tovutifunk/vue-moyo-model
```

Next, import the directive and enable it like this.

```js
import TovutiModelDirective from '@tovutifunk/vue-moyo-model';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.use(TovutiModelDirective);

app.config.compilerOptions.isCustomElement = tag => tag.startsWith('moyo-');

app.mount('#app');
```

Now you can use the `v-moyo-model` directive to keep your data in sync!

```html
<moyo-input v-moyo-model="name"></moyo-input>
```

?> Are you using Tovuti with Vue? [Help us improve this page!](https://github.com/tovutifunk/tovuti/blob/next/docs/frameworks/vue.md)
