# Card

[component-header:moyo-card]

Cards can be used to group related subjects in a container.

```html preview
<moyo-card class="card-overview">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
  />

  <strong>Mittens</strong><br />
  This kitten is as cute as he is playful. Bring him home today!<br />
  <small>6 weeks old</small>

  <div slot="footer">
    <moyo-button variant="primary" pill>More Info</moyo-button>
    <moyo-rating></moyo-rating>
  </div>
</moyo-card>

<style>
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--moyo-color-neutral-500);
  }

  .card-overview [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

```jsx react
import { MoyoButton,MoyoCard,MoyoRating } from '@tovutifunk/tovuti/dist/react';

const css = `
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--moyo-color-neutral-500);
  }

  .card-overview [slot="footer"] {
    display: flex; 
    justify-content: space-between; 
    align-items: center;
  }
`;

const App = () => (
  <>
    <MoyoCard className="card-overview">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        alt="A kitten sits patiently between a terracotta pot and decorative grasses."
      />
      <strong>Mittens</strong>
      <br />
      This kitten is as cute as he is playful. Bring him home today!
      <br />
      <small>6 weeks old</small>
      <div slot="footer">
        <MoyoButton variant="primary" pill>
          More Info
        </MoyoButton>
        <MoyoRating></MoyoRating>
      </div>
    </MoyoCard>

    <style>{css}</style>
  </>
);
```

## Examples

## Basic Card

Basic cards aren't very exciting, but they can display any content you want them to.

```html preview
<moyo-card class="card-basic">
  This is just a basic card. No image, no header, and no footer. Just your content.
</moyo-card>

<style>
  .card-basic {
    max-width: 300px;
  }
</style>
```

```jsx react
import { MoyoCard } from '@tovutifunk/tovuti/dist/react';

const css = `
  .card-basic {
    max-width: 300px;
  }
`;

const App = () => (
  <>
    <MoyoCard className="card-basic">
      This is just a basic card. No image, no header, and no footer. Just your content.
    </MoyoCard>

    <style>{css}</style>
  </>
);
```

## Card with Header

Headers can be used to display titles and more.

```html preview
<moyo-card class="card-header">
  <div slot="header">
    Header Title

    <moyo-icon-button name="gear" label="Settings"></moyo-icon-button>
  </div>

  This card has a header. You can put all sorts of things in it!
</moyo-card>

<style>
  .card-header {
    max-width: 300px;
  }

  .card-header [slot='header'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header moyo-icon-button {
    font-size: var(--moyo-font-size-medium);
  }
</style>
```

```jsx react
import { MoyoCard,MoyoIconButton } from '@tovutifunk/tovuti/dist/react';

const css = `
  .card-header {
    max-width: 300px;
  }

  .card-header [slot="header"] {
    display: flex; 
    align-items: center; 
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header moyo-icon-button {
    font-size: var(--moyo-font-size-medium);
  }
`;

const App = () => (
  <>
    <MoyoCard className="card-header">
      <div slot="header">
        Header Title
        <MoyoIconButton name="gear"></MoyoIconButton>
      </div>
      This card has a header. You can put all sorts of things in it!
    </MoyoCard>

    <style>{css}</style>
  </>
);
```

## Card with Footer

Footers can be used to display actions, summaries, or other relevant content.

```html preview
<moyo-card class="card-footer">
  This card has a footer. You can put all sorts of things in it!

  <div slot="footer">
    <moyo-rating></moyo-rating>
    <moyo-button slot="footer" variant="primary">Preview</moyo-button>
  </div>
</moyo-card>

<style>
  .card-footer {
    max-width: 300px;
  }

  .card-footer [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

```jsx react
import { MoyoButton,MoyoCard,MoyoRating } from '@tovutifunk/tovuti/dist/react';

const css = `
  .card-footer {
    max-width: 300px;
  }

  .card-footer [slot="footer"] {
    display: flex; 
    justify-content: space-between; 
    align-items: center;
  }
`;

const App = () => (
  <>
    <MoyoCard className="card-footer">
      This card has a footer. You can put all sorts of things in it!
      <div slot="footer">
        <MoyoRating></MoyoRating>
        <MoyoButton slot="footer" variant="primary">
          Preview
        </MoyoButton>
      </div>
    </MoyoCard>

    <style>{css}</style>
  </>
);
```

## Images

Cards accept an `image` slot. The image is displayed atop the card and stretches to fit.

```html preview
<moyo-card class="card-image">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
    alt="A kitten walks towards camera on top of pallet."
  />
  This is a kitten, but not just any kitten. This kitten likes walking along pallets.
</moyo-card>

<style>
  .card-image {
    max-width: 300px;
  }
</style>
```

```jsx react
import { MoyoCard } from '@tovutifunk/tovuti/dist/react';

const css = `
  .card-image {
    max-width: 300px;
  }
`;

const App = () => (
  <>
    <MoyoCard className="card-image">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        alt="A kitten walks towards camera on top of pallet."
      />
      This is a kitten, but not just any kitten. This kitten likes walking along pallets.
    </MoyoCard>

    <style>{css}</style>
  </>
);
```

[component-metadata:moyo-card]
