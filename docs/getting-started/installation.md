# Installation

You can use Tovuti via CDN or by installing it locally. You can also [cherry pick](#cherry-picking) individual components for faster load times.

If you're using a framework, make sure to check out the pages for [React](/frameworks/react), [Vue](/frameworks/vue), and [Angular](/frameworks/angular).

## CDN Installation (Easiest)

The easiest way to install Tovuti is with the CDN. Just add the following tags to your page to get all components and the default light theme.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tovutifunk/tovuti@%VERSION%/dist/themes/light.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@tovutifunk/tovuti@%VERSION%/dist/tovuti.js"></script>
```

?> If you're only using a handful of components, it will be more efficient to [cherry pick](#cherry-picking) the ones you need.

### Dark Theme

If you prefer to use the [dark theme](/getting-started/themes#dark-theme) instead, use this code and add `<html class="moyo-theme-dark">` to the page.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tovutifunk/tovuti@%VERSION%/dist/themes/dark.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@tovutifunk/tovuti@%VERSION%/dist/tovuti.js"></script>
```

### Light & Dark Theme

If you want to load the light or dark theme based on the user's `prefers-color-scheme` setting, use this. The `media` attributes ensure that only the user's preferred theme stylesheet loads and the `onload` attribute sets the appropriate [theme class](/getting-started/themes) on the `<html>` element.

```html
<link
  rel="stylesheet"
  media="(prefers-color-scheme:light)"
  href="https://cdn.jsdelivr.net/npm/@tovutifunk/tovuti@%VERSION%/dist/themes/light.css"
/>
<link
  rel="stylesheet"
  media="(prefers-color-scheme:dark)"
  href="https://cdn.jsdelivr.net/npm/@tovutifunk/tovuti@%VERSION%/dist/themes/dark.css"
  onload="document.documentElement.classList.add('moyo-theme-dark');"
/>
<script type="module" src="https://cdn.jsdelivr.net/npm/@tovutifunk/tovuti@%VERSION%/dist/tovuti.js"></script>
```

Now you can [start using Tovuti!](/getting-started/usage)

## Local Installation

If you don't want to use the CDN, you can install Tovuti locally with the following command.

```bash
npm install @tovutifunk/tovuti
```

It's up to you to make the source files available to your app. One way to do this is to create a route in your app called `/tovuti` that serves static files from `node_modules/@tovutifunk/tovuti`.

Once you've done that, add the following tags to your page. Make sure to update `href` and `src` so they point to the route you created.

```html
<link rel="stylesheet" href="/tovuti/dist/themes/light.css" />
<script type="module" src="/tovuti/dist/tovuti.js"></script>
```
