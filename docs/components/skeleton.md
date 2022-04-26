# Skeleton

[component-header:moyo-skeleton]

Skeletons are used to show where content will eventually be drawn.

These are simple containers for scaffolding layouts that mimic what users will see when content has finished loading. This prevents large areas of empty space during asynchronous operations.

Skeletons try not to be opinionated, as there are endless possibilities for designing layouts. Therefore, you'll likely use more than one skeleton to create the effect you want. If you find yourself using them frequently, consider creating a template that renders them with the desired arrangement and styles.

```html preview
<div class="skeleton-overview">
  <header>
    <moyo-skeleton></moyo-skeleton>
    <moyo-skeleton></moyo-skeleton>
  </header>

  <moyo-skeleton></moyo-skeleton>
  <moyo-skeleton></moyo-skeleton>
  <moyo-skeleton></moyo-skeleton>
</div>

<style>
  .skeleton-overview header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .skeleton-overview header moyo-skeleton:last-child {
    flex: 0 0 auto;
    width: 30%;
  }

  .skeleton-overview moyo-skeleton {
    margin-bottom: 1rem;
  }

  .skeleton-overview moyo-skeleton:nth-child(1) {
    float: left;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    vertical-align: middle;
  }

  .skeleton-overview moyo-skeleton:nth-child(3) {
    width: 95%;
  }

  .skeleton-overview moyo-skeleton:nth-child(4) {
    width: 80%;
  }
</style>
```

```jsx react
import { MoyoSkeleton } from '@tovutifunk/tovuti/dist/react';

const css = `
  .skeleton-overview header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .skeleton-overview header moyo-skeleton:last-child {
    flex: 0 0 auto;
    width: 30%;
  }

  .skeleton-overview moyo-skeleton {
    margin-bottom: 1rem;
  }

  .skeleton-overview moyo-skeleton:nth-child(1) {
    float: left;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    vertical-align: middle;
  }

  .skeleton-overview moyo-skeleton:nth-child(3) {
    width: 95%;
  }

  .skeleton-overview moyo-skeleton:nth-child(4) {
    width: 80%;
  }
`;

const App = () => (
  <>
    <div className="skeleton-overview">
      <header>
        <MoyoSkeleton />
        <MoyoSkeleton />
      </header>

      <MoyoSkeleton />
      <MoyoSkeleton />
      <MoyoSkeleton />
    </div>

    <style>{css}</style>
  </>
);
```

## Examples

### Effects

There are two built-in effects, `sheen` and `pulse`. Effects are intentionally subtle, as they can be distracting when used extensively. The default is `none`, which displays a static, non-animated skeleton.

```html preview
<div class="skeleton-effects">
  <moyo-skeleton effect="none"></moyo-skeleton>
  None

  <moyo-skeleton effect="sheen"></moyo-skeleton>
  Sheen

  <moyo-skeleton effect="pulse"></moyo-skeleton>
  Pulse
</div>

<style>
  .skeleton-effects {
    font-size: var(--moyo-font-size-small);
  }

  .skeleton-effects moyo-skeleton:not(:first-child) {
    margin-top: 1rem;
  }
</style>
```

```jsx react
import { MoyoSkeleton } from '@tovutifunk/tovuti/dist/react';

const css = `
  .skeleton-effects {
    font-size: var(--moyo-font-size-small);
  }

  .skeleton-effects moyo-skeleton:not(:first-child) {
    margin-top: 1rem;
  }
`;

const App = () => (
  <>
    <div className="skeleton-effects">
      <MoyoSkeleton effect="none" />
      None
      <MoyoSkeleton effect="sheen" />
      Sheen
      <MoyoSkeleton effect="pulse" />
      Pulse
    </div>

    <style>{css}</style>
  </>
);
```

### Paragraphs

Use multiple skeletons and some clever styles to simulate paragraphs.

```html preview
<div class="skeleton-paragraphs">
  <moyo-skeleton></moyo-skeleton>
  <moyo-skeleton></moyo-skeleton>
  <moyo-skeleton></moyo-skeleton>
  <moyo-skeleton></moyo-skeleton>
  <moyo-skeleton></moyo-skeleton>
</div>

<style>
  .skeleton-paragraphs moyo-skeleton {
    margin-bottom: 1rem;
  }

  .skeleton-paragraphs moyo-skeleton:nth-child(2) {
    width: 95%;
  }

  .skeleton-paragraphs moyo-skeleton:nth-child(4) {
    width: 90%;
  }

  .skeleton-paragraphs moyo-skeleton:last-child {
    width: 50%;
  }
</style>
```

```jsx react
import { MoyoSkeleton } from '@tovutifunk/tovuti/dist/react';

const css = `
  .skeleton-paragraphs moyo-skeleton {
    margin-bottom: 1rem;
  }

  .skeleton-paragraphs moyo-skeleton:nth-child(2) {
    width: 95%;
  }

  .skeleton-paragraphs moyo-skeleton:nth-child(4) {
    width: 90%;
  }

  .skeleton-paragraphs moyo-skeleton:last-child {
    width: 50%;
  }
`;

const App = () => (
  <>
    <div className="skeleton-paragraphs">
      <MoyoSkeleton />
      <MoyoSkeleton />
      <MoyoSkeleton />
      <MoyoSkeleton />
      <MoyoSkeleton />
    </div>

    <style>{css}</style>
  </>
);
```

### Avatars

Set a matching width and height to make a circle, square, or rounded avatar skeleton.

```html preview
<div class="skeleton-avatars">
  <moyo-skeleton></moyo-skeleton>
  <moyo-skeleton></moyo-skeleton>
  <moyo-skeleton></moyo-skeleton>
</div>

<style>
  .skeleton-avatars moyo-skeleton {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-right: 0.5rem;
  }

  .skeleton-avatars moyo-skeleton:nth-child(1) {
    --border-radius: 0;
  }

  .skeleton-avatars moyo-skeleton:nth-child(2) {
    --border-radius: var(--moyo-border-radius-medium);
  }
</style>
```

```jsx react
import { MoyoSkeleton } from '@tovutifunk/tovuti/dist/react';

const css = `
  .skeleton-avatars moyo-skeleton {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-right: .5rem;
  }

  .skeleton-avatars moyo-skeleton:nth-child(1) {
    --border-radius: 0;
  }
  
  .skeleton-avatars moyo-skeleton:nth-child(2) {
    --border-radius: var(--moyo-border-radius-medium);
  }
`;

const App = () => (
  <>
    <div className="skeleton-avatars">
      <MoyoSkeleton />
      <MoyoSkeleton />
      <MoyoSkeleton />
    </div>

    <style>{css}</style>
  </>
);
```

### Custom Shapes

Use the `--border-radius` custom property to make circles, squares, and rectangles. For more complex shapes, you can apply `clip-path` to the `indicator` part. [Try Clippy](https://bennettfeely.com/clippy/) if you need help generating custom shapes.

```html preview
<div class="skeleton-shapes">
  <moyo-skeleton class="square"></moyo-skeleton>
  <moyo-skeleton class="circle"></moyo-skeleton>
  <moyo-skeleton class="triangle"></moyo-skeleton>
  <moyo-skeleton class="cross"></moyo-skeleton>
  <moyo-skeleton class="comment"></moyo-skeleton>
</div>

<style>
  .skeleton-shapes moyo-skeleton {
    display: inline-flex;
    width: 50px;
    height: 50px;
  }

  .skeleton-shapes .square::part(indicator) {
    --border-radius: var(--moyo-border-radius-medium);
  }

  .skeleton-shapes .circle::part(indicator) {
    --border-radius: var(--moyo-border-radius-circle);
  }

  .skeleton-shapes .triangle::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
  }

  .skeleton-shapes .cross::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(
      20% 0%,
      0% 20%,
      30% 50%,
      0% 80%,
      20% 100%,
      50% 70%,
      80% 100%,
      100% 80%,
      70% 50%,
      100% 20%,
      80% 0%,
      50% 30%
    );
  }

  .skeleton-shapes .comment::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  }

  .skeleton-shapes moyo-skeleton:not(:last-child) {
    margin-right: 0.5rem;
  }
</style>
```

```jsx react
import { MoyoSkeleton } from '@tovutifunk/tovuti/dist/react';

const css = `
  .skeleton-shapes moyo-skeleton {
    display: inline-flex;
    width: 50px;
    height: 50px;
  }

  .skeleton-shapes .square::part(indicator) {
    --border-radius: var(--moyo-border-radius-medium);
  }

  .skeleton-shapes .circle::part(indicator) {
    --border-radius: var(--moyo-border-radius-circle);
  }

  .skeleton-shapes .triangle::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
  }

  .skeleton-shapes .cross::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
  }

  .skeleton-shapes .comment::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  }

  .skeleton-shapes moyo-skeleton:not(:last-child) {
    margin-right: .5rem;
  }
`;

const App = () => (
  <>
    <div className="skeleton-shapes">
      <MoyoSkeleton className="square" />
      <MoyoSkeleton className="circle" />
      <MoyoSkeleton className="triangle" />
      <MoyoSkeleton className="cross" />
      <MoyoSkeleton className="comment" />
    </div>

    <style>{css}</style>
  </>
);
```

### Custom Colors

Set the `--color` and `--sheen-color` custom properties to adjust the skeleton's color.

```html preview
<moyo-skeleton effect="sheen" style="--color: tomato; --sheen-color: #ffb094;"></moyo-skeleton>
```

```jsx react
import { MoyoSkeleton } from '@tovutifunk/tovuti/dist/react';

const css = `
  .skeleton-avatars moyo-skeleton {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-right: .5rem;
  }

  .skeleton-avatars moyo-skeleton:nth-child(1) {
    --border-radius: 0;
  }
  
  .skeleton-avatars moyo-skeleton:nth-child(2) {
    --border-radius: var(--moyo-border-radius-medium);
  }
`;

const App = () => <MoyoSkeleton effect="sheen" style={{ '--color': 'tomato', '--sheen-color': '#ffb094' }} />;
```

[component-metadata:moyo-skeleton]
