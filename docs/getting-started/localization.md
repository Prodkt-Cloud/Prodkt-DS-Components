# Localization

Components can be localized by importing the appropriate translation file and setting the desired [`lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) on the `<html>` element. Here's an example that renders Tovuti components in Spanish.

```html
<html lang="es">
  <head>
    <script type="module" src="/path/to/tovuti/dist/translations/es.js"></script>
  </head>

  <body>
    ...
  </body>
</html>
```

Through the magic of a mutation observer, changing the `lang` attribute will automatically update all localized components to use the new locale.

?> Tovuti provides a localization mechanism for component internals. This is not designed to be used as localization tool for our entire application. We should use a more appropriate tool such as [i18next](https://www.i18next.com/) to localize all of the content in our app.

## Available Translations

Tovuti ships with a number of translations. The default is English (US), which also serves as the fallback locale. As such, you do not need to import the English translation. To see a list of all available translations in the latest version, [refer to this directory](https://github.com/tovutifunk/tovuti/tree/current/src/translations).

The location of translations depends on how you're consuming Tovuti.

- If you're using the CDN, [import them from the CDN](https://www.jsdelivr.com/package/npm/@tovutifunk/tovuti?path=dist%2Ftranslations)
- If you're using a bundler, import them from `@tovutifunk/tovuti/dist/translations/[lang].js`

You do not need to load translations up front. You can import them dynamically even after updating the `lang` attribute. Once a translation is registered, localized components will update automatically.

```js
// Same as setting <html lang="de">
document.documentElement.lang = 'de';

// Import the translation
import('/path/to/tovuti/dist/translations/de.js');
```

### Translation Resolution

The locale set by `<html lang="...">` is the default locale for the document. If a country code is provided, e.g. `es-PE` for Peruvian Spanish, the localization library will resolve it like this:

1. Look for `es-PE`
2. Look for `es`
3. Fall back to `en`

Tovuti uses English as a fallback to provide a better experience than rendering nothing or throwing an error.

### Submitting New Translations or Improvements

To contribute new translations or improvements to existing translations, please submit a pull request on GitHub. Translations are located in [`src/translations`](https://github.com/tovutifunk/tovuti/blob/next/src/translations) and can be edited directly on GitHub if you don't want to clone the repo locally.

Regional translations are welcome! For example, if a German translation (`de`) exists it's perfectly acceptable to submit a German (Switzerland) (`de-CH`) translation.

If you have any questions, please start a [discussion](https://github.com/tovutifunk/tovuti/discussions).

## Multiple Locales Per Page

You can use a different locale for an individual component by setting its `lang` attribute. Here's a contrived example to demonstrate.

```html
<html lang="es">
  ...

  <body>
    <moyo-button><!-- Spanish --></moyo-button>
    <moyo-button lang="ru"><!-- Russian --></moyo-button>
  </body>
</html>
```

For performance reasons, the `lang` attribute must be on the component itself, not on an ancestor element.

```html
<html lang="es">
  ...

  <body>
    <div lang="ru">
      <moyo-button><!-- still in Spanish --></moyo-button>
    </div>
  </body>
</html>
```

This limitation exists because there's no efficient way to determine the current locale of a given element in a DOM tree.

## Creating Your Own Translations

You can provide your own translations if you have specific needs or if you don't want to wait for a translation to land upstream. The easiest way to do this is to copy `src/translations/en.ts` into your own project and translate the terms inside. When your translation is done, you can import it and use it just like a built-in translation.

Let's create a Spanish translation as an example. The following assumes you're using TypeScript, but you can also create translations with regular JavaScript.

```js
import { registerTranslation } from '@tovutifunk/tovuti/dist/utilities/localize';
import type { Translation } from '@tovutifunk/tovuti/dist/utilities/localize';

const translation: Translation = {
  $code: 'es',
  $name: 'Español',
  $dir: 'ltr',

  term1: '...',
  term2: '...',
  ...
};

registerTranslation(translation);

export default translation;
```

Once your translation has been compiled to JavaScript, import it and activate it like this.

```html
<html lang="es">
  <head>
    <script type="module" src="/path/to/es.js"></script>
  </head>

  <body>
    ...
  </body>
</html>
```

?> If your translation isn't working, make sure you're using the same localize module when importing `registerTranslation`. If you're using a different module, your translation won't be recognized.
