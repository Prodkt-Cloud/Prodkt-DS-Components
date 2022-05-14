# Badge

[component-header:moyo-badge]

Badges are used to draw attention and display statuses or counts.

```html preview
<moyo-badge>Badge</moyo-badge>
```

```jsx react
import { MoyoBadge } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoBadge>Badge</MoyoBadge>;
```

## Examples

### Variants

Set the `variant` attribute to change the badge's variant.

```html preview
<moyo-badge variant="primary">Primary</moyo-badge>
<moyo-badge variant="success">Success</moyo-badge>
<moyo-badge variant="neutral">Neutral</moyo-badge>
<moyo-badge variant="warning">Warning</moyo-badge>
<moyo-badge variant="danger">Danger</moyo-badge>
```

```jsx react
import { MoyoBadge } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoBadge variant="primary">Primary</MoyoBadge>
    <MoyoBadge variant="success">Success</MoyoBadge>
    <MoyoBadge variant="neutral">Neutral</MoyoBadge>
    <MoyoBadge variant="warning">Warning</MoyoBadge>
    <MoyoBadge variant="danger">Danger</MoyoBadge>
  </>
);
```

### Pill Badges

Use the `pill` attribute to give badges rounded edges.

```html preview
<moyo-badge variant="primary" pill>Primary</moyo-badge>
<moyo-badge variant="success" pill>Success</moyo-badge>
<moyo-badge variant="neutral" pill>Neutral</moyo-badge>
<moyo-badge variant="warning" pill>Warning</moyo-badge>
<moyo-badge variant="danger" pill>Danger</moyo-badge>
```

```jsx react
import { MoyoBadge } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoBadge variant="primary" pill>
      Primary
    </MoyoBadge>
    <MoyoBadge variant="success" pill>
      Success
    </MoyoBadge>
    <MoyoBadge variant="neutral" pill>
      Neutral
    </MoyoBadge>
    <MoyoBadge variant="warning" pill>
      Warning
    </MoyoBadge>
    <MoyoBadge variant="danger" pill>
      Danger
    </MoyoBadge>
  </>
);
```

### Pulsating Badges

Use the `pulse` attribute to draw attention to the badge with a subtle animation.

```html preview
<div class="badge-pulse">
  <moyo-badge variant="primary" pill pulse>1</moyo-badge>
  <moyo-badge variant="success" pill pulse>1</moyo-badge>
  <moyo-badge variant="neutral" pill pulse>1</moyo-badge>
  <moyo-badge variant="warning" pill pulse>1</moyo-badge>
  <moyo-badge variant="danger" pill pulse>1</moyo-badge>
</div>

<style>
  .badge-pulse moyo-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
```

```jsx react
import { MoyoBadge } from '@tovutifunk/tovuti/dist/react';

const css = `
  .badge-pulse moyo-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const App = () => (
  <>
    <div className="badge-pulse">
      <MoyoBadge variant="primary" pill pulse>
        1
      </MoyoBadge>
      <MoyoBadge variant="success" pill pulse>
        1
      </MoyoBadge>
      <MoyoBadge variant="neutral" pill pulse>
        1
      </MoyoBadge>
      <MoyoBadge variant="warning" pill pulse>
        1
      </MoyoBadge>
      <MoyoBadge variant="danger" pill pulse>
        1
      </MoyoBadge>
    </div>

    <style>{css}</style>
  </>
);
```

### With Buttons

One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.

```html preview
<moyo-button>
  Requests
  <moyo-badge pill>30</moyo-badge>
</moyo-button>

<moyo-button style="margin-left: 1rem;">
  Warnings
  <moyo-badge variant="warning" pill>8</moyo-badge>
</moyo-button>

<moyo-button style="margin-left: 1rem;">
  Errors
  <moyo-badge variant="danger" pill>6</moyo-badge>
</moyo-button>
```

```jsx react
import { MoyoBadge, MoyoButton } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoButton>
      Requests
      <MoyoBadge pill>30</MoyoBadge>
    </MoyoButton>

    <MoyoButton style={{ marginLeft: '1rem' }}>
      Warnings
      <MoyoBadge variant="warning" pill>
        8
      </MoyoBadge>
    </MoyoButton>

    <MoyoButton style={{ marginLeft: '1rem' }}>
      Errors
      <MoyoBadge variant="danger" pill>
        6
      </MoyoBadge>
    </MoyoButton>
  </>
);
```

### With Menu Items

When including badges in menu items, use the `suffix` slot to make sure they're aligned correctly.

```html preview
<moyo-menu style="max-width: 240px;">
  <moyo-menu-label>Messages</moyo-menu-label>
  <moyo-menu-item>Comments <moyo-badge slot="suffix" variant="neutral" pill>4</moyo-badge></moyo-menu-item>
  <moyo-menu-item>Replies <moyo-badge slot="suffix" variant="neutral" pill>12</moyo-badge></moyo-menu-item>
</moyo-menu>
```

```jsx react
import { MoyoBadge, MoyoButton, MoyoMenu, MoyoMenuItem, MoyoMenuLabel } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoMenu
    style={{
      maxWidth: '240px',
      border: 'solid 1px var(--moyo-panel-border-color)',
      borderRadius: 'var(--moyo-border-radius-medium)'
    }}
  >
    <MoyoMenuLabel>Messages</MoyoMenuLabel>
    <MoyoMenuItem>
      Comments
      <MoyoBadge slot="suffix" variant="neutral" pill>
        4
      </MoyoBadge>
    </MoyoMenuItem>
    <MoyoMenuItem>
      Replies
      <MoyoBadge slot="suffix" variant="neutral" pill>
        12
      </MoyoBadge>
    </MoyoMenuItem>
  </MoyoMenu>
);
```

[component-metadata:moyo-badge]
