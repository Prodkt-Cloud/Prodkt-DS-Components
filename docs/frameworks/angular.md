# Angular

Angular [plays nice](https://custom-elements-everywhere.com/#angular) with custom elements, so you can use Tovuti in your Angular apps with ease.

## Installation

To add Tovuti to your Angular app, install the package from npm.

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

Then make sure to apply the custom elements schema as shown below.

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

Now you can start using Tovuti components in your app!

?> Are you using Tovuti with Angular? [Help us improve this page!](https://github.com/tovutifunk/tovuti/blob/next/docs/frameworks/angular.md)
