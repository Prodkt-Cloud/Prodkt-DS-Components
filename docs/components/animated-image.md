# Animated Image

[component-header:moyo-animated-image]

A component for displaying animated GIFs and WEBPs that play and pause on interaction.

```html preview
<moyo-animated-image
  src="https://media0.giphy.com/media/QpWDP1YMziaQw/giphy.gif"
  alt="Animation of untied shoes walking on pavement"
></moyo-animated-image>
```

```jsx react
import { MoyoAnimatedImage } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoAnimatedImage
    src="https://media0.giphy.com/media/QpWDP1YMziaQw/giphy.gif"
    alt="Animation of untied shoes walking on pavement"
  />
);
```

?> This component uses `<canvas>` to draw freeze frames, so images are subject to [cross-origin restrictions](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image).

## Examples

### WEBP Images

Both GIF and WEBP images are supported.

```html preview
<moyo-animated-image
  src="https://res.cloudinary.com/demo/image/upload/fl_awebp/bored_animation.webp"
  alt="Animation of a shoe being tied"
></moyo-animated-image>
```

```jsx react
import { MoyoAnimatedImage } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoAnimatedImage
    src="https://res.cloudinary.com/demo/image/upload/fl_awebp/bored_animation.webp"
    alt="Animation of a shoe being tied"
  />
);
```

### Setting a Width and Height

To set a custom size, apply a width and/or height to the host element.

```html preview
<moyo-animated-image
  src="https://media0.giphy.com/media/QpWDP1YMziaQw/giphy.gif"
  alt="Animation of untied shoes walking on pavement"
  style="width: 150px; height: 200px;"
>
</moyo-animated-image>
```

```jsx react
import { MoyoAnimatedImage } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoAnimatedImage
    src="https://media0.giphy.com/media/QpWDP1YMziaQw/giphy.gif"
    alt="Animation of untied shoes walking on pavement"
    style={{ width: '150px', height: '200px' }}
  />
);
```

### Customizing the Control Box

You can change the appearance and location of the control box by targeting the `control-box` part in your styles.

```html preview
<moyo-animated-image
  src="https://media0.giphy.com/media/QpWDP1YMziaQw/giphy.gif"
  alt="Animation of untied shoes walking on pavement"
  class="animated-image-custom-control-box"
></moyo-animated-image>

<style>
  .animated-image-custom-control-box::part(control-box) {
    top: auto;
    right: auto;
    bottom: 1rem;
    left: 1rem;
    background-color: deeppink;
    border: none;
    color: pink;
  }
</style>
```

```jsx react
import { MoyoAnimatedImage } from '@tovutifunk/tovuti/dist/react';

const css = `
  .animated-image-custom-control-box::part(control-box) {
    top: auto;
    right: auto;
    bottom: 1rem;
    left: 1rem;
    background-color: deeppink;
    border: none;
    color: pink;
  }
`;

const App = () => (
  <>
    <MoyoAnimatedImage
      className="animated-image-custom-control-box"
      src="https://media0.giphy.com/media/QpWDP1YMziaQw/giphy.gif"
      alt="Animation of untied shoes walking on pavement"
    />

    <style>{css}</style>
  </>
);
```

[component-metadata:moyo-animated-image]
