# Tooltip

[component-header:moyo-tooltip]

Tooltips display additional information based on a specific action.

A tooltip's target is its _first child element_, so you should only wrap one element inside of the tooltip. If you need the tooltip to show up for multiple elements, nest them inside a container first.

Tooltips use `display: contents` so they won't interfere with how elements are positioned in a flex or grid layout.

```html preview
<moyo-tooltip content="This is a tooltip">
  <moyo-button>Hover Me</moyo-button>
</moyo-tooltip>
```

```jsx react
import { MoyoButton,MoyoTooltip } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoTooltip content="This is a tooltip">
    <MoyoButton>Hover Me</MoyoButton>
  </MoyoTooltip>
);
```

## Examples

### Placement

Use the `placement` attribute to set the preferred placement of the tooltip.

```html preview
<div class="tooltip-placement-example">
  <div class="tooltip-placement-example-row">
    <moyo-tooltip content="top-start" placement="top-start">
      <moyo-button></moyo-button>
    </moyo-tooltip>

    <moyo-tooltip content="top" placement="top">
      <moyo-button></moyo-button>
    </moyo-tooltip>

    <moyo-tooltip content="top-end" placement="top-end">
      <moyo-button></moyo-button>
    </moyo-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <moyo-tooltip content="left-start" placement="left-start">
      <moyo-button></moyo-button>
    </moyo-tooltip>

    <moyo-tooltip content="right-start" placement="right-start">
      <moyo-button></moyo-button>
    </moyo-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <moyo-tooltip content="left" placement="left">
      <moyo-button></moyo-button>
    </moyo-tooltip>

    <moyo-tooltip content="right" placement="right">
      <moyo-button></moyo-button>
    </moyo-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <moyo-tooltip content="left-end" placement="left-end">
      <moyo-button></moyo-button>
    </moyo-tooltip>

    <moyo-tooltip content="right-end" placement="right-end">
      <moyo-button></moyo-button>
    </moyo-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <moyo-tooltip content="bottom-start" placement="bottom-start">
      <moyo-button></moyo-button>
    </moyo-tooltip>

    <moyo-tooltip content="bottom" placement="bottom">
      <moyo-button></moyo-button>
    </moyo-tooltip>

    <moyo-tooltip content="bottom-end" placement="bottom-end">
      <moyo-button></moyo-button>
    </moyo-tooltip>
  </div>
</div>

<style>
  .tooltip-placement-example {
    width: 250px;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example moyo-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) moyo-tooltip:first-child moyo-button,
  .tooltip-placement-example-row:nth-child(5) moyo-tooltip:first-child moyo-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) moyo-tooltip:nth-child(2) moyo-button,
  .tooltip-placement-example-row:nth-child(3) moyo-tooltip:nth-child(2) moyo-button,
  .tooltip-placement-example-row:nth-child(4) moyo-tooltip:nth-child(2) moyo-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
</style>
```

```jsx react
import { MoyoButton,MoyoTooltip } from '@tovutifunk/tovuti/dist/react';

const css = `
  .tooltip-placement-example {
    width: 250px;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example moyo-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) moyo-tooltip:first-child moyo-button,
  .tooltip-placement-example-row:nth-child(5) moyo-tooltip:first-child moyo-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) moyo-tooltip:nth-child(2) moyo-button,
  .tooltip-placement-example-row:nth-child(3) moyo-tooltip:nth-child(2) moyo-button,
  .tooltip-placement-example-row:nth-child(4) moyo-tooltip:nth-child(2) moyo-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
`;

const App = () => (
  <>
    <div className="tooltip-placement-example">
      <div className="tooltip-placement-example-row">
        <MoyoTooltip content="top-start" placement="top-start">
          <MoyoButton />
        </MoyoTooltip>

        <MoyoTooltip content="top" placement="top">
          <MoyoButton />
        </MoyoTooltip>

        <MoyoTooltip content="top-end" placement="top-end">
          <MoyoButton />
        </MoyoTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <MoyoTooltip content="left-start" placement="left-start">
          <MoyoButton />
        </MoyoTooltip>

        <MoyoTooltip content="right-start" placement="right-start">
          <MoyoButton />
        </MoyoTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <MoyoTooltip content="left" placement="left">
          <MoyoButton />
        </MoyoTooltip>

        <MoyoTooltip content="right" placement="right">
          <MoyoButton />
        </MoyoTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <MoyoTooltip content="left-end" placement="left-end">
          <MoyoButton />
        </MoyoTooltip>

        <MoyoTooltip content="right-end" placement="right-end">
          <MoyoButton />
        </MoyoTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <MoyoTooltip content="bottom-start" placement="bottom-start">
          <MoyoButton />
        </MoyoTooltip>

        <MoyoTooltip content="bottom" placement="bottom">
          <MoyoButton />
        </MoyoTooltip>

        <MoyoTooltip content="bottom-end" placement="bottom-end">
          <MoyoButton />
        </MoyoTooltip>
      </div>
    </div>

    <style>{css}</style>
  </>
);
```

### Click Trigger

Set the `trigger` attribute to `click` to toggle the tooltip on click instead of hover.

```html preview
<moyo-tooltip content="Click again to dismiss" trigger="click">
  <moyo-button>Click to Toggle</moyo-button>
</moyo-tooltip>
```

```jsx react
import { MoyoButton,MoyoTooltip } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoTooltip content="Click again to dismiss" trigger="click">
    <MoyoButton>Click to Toggle</MoyoButton>
  </MoyoTooltip>
);
```

### Manual Trigger

Tooltips can be controller programmatically by setting the `trigger` attribute to `manual`. Use the `open` attribute to control when the tooltip is shown.

```html preview
<moyo-button style="margin-right: 4rem;">Toggle Manually</moyo-button>

<moyo-tooltip content="This is an avatar" trigger="manual" class="manual-tooltip">
  <moyo-avatar label="User"></moyo-avatar>
</moyo-tooltip>

<script>
  const tooltip = document.querySelector('.manual-tooltip');
  const toggle = tooltip.previousElementSibling;

  toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
</script>
```

```jsx react
import { useState } from 'react';
import { MoyoAvatar,MoyoButton,MoyoTooltip } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MoyoButton style={{ marginRight: '4rem' }} onClick={() => setOpen(!open)}>
        Toggle Manually
      </MoyoButton>

      <MoyoTooltip open={open} content="This is an avatar" trigger="manual">
        <MoyoAvatar />
      </MoyoTooltip>
    </>
  );
};
```

### Remove Arrows

You can control the size of tooltip arrows by overriding the `--moyo-tooltip-arrow-size` design token.

```html preview
<div style="--moyo-tooltip-arrow-size: 0;">
  <moyo-tooltip content="This is a tooltip">
    <moyo-button>Above</moyo-button>
  </moyo-tooltip>

  <moyo-tooltip content="This is a tooltip" placement="bottom">
    <moyo-button>Below</moyo-button>
  </moyo-tooltip>
</div>
```

```jsx react
import { MoyoButton,MoyoTooltip } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <div style={{ '--moyo-tooltip-arrow-size': '0' }}>
    <MoyoTooltip content="This is a tooltip">
      <MoyoButton>Above</MoyoButton>
    </MoyoTooltip>

    <MoyoTooltip content="This is a tooltip" placement="bottom">
      <MoyoButton>Below</MoyoButton>
    </MoyoTooltip>
  </div>
);
```

To override it globally, set it in a root block in your stylesheet after the Tovuti stylesheet is loaded.

```css
:root {
  --moyo-tooltip-arrow-size: 0;
}
```

### HTML in Tooltips

Use the `content` slot to create tooltips with HTML content. Tooltips are designed only for text and presentational elements. Avoid placing interactive content, such as buttons, links, and form controls, in a tooltip.

```html preview
<moyo-tooltip>
  <div slot="content">I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!</div>

  <moyo-button>Hover me</moyo-button>
</moyo-tooltip>
```

```jsx react
import { MoyoButton,MoyoTooltip } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoTooltip content="This is a tooltip">
    <div slot="content">
      I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!
    </div>

    <MoyoButton>Hover Me</MoyoButton>
  </MoyoTooltip>
);
```

### Hoisting

Tooltips will be clipped if they're inside a container that has `overflow: auto|hidden|scroll`. The `hoist` attribute forces the tooltip to use a fixed positioning strategy, allowing it to break out of the container. In this case, the tooltip will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html preview
<div class="tooltip-hoist">
  <moyo-tooltip content="This is a tooltip">
    <moyo-button>No Hoist</moyo-button>
  </moyo-tooltip>

  <moyo-tooltip content="This is a tooltip" hoist>
    <moyo-button>Hoist</moyo-button>
  </moyo-tooltip>
</div>

<style>
  .tooltip-hoist {
    border: solid 2px var(--moyo-panel-border-color);
    overflow: hidden;
    padding: var(--moyo-spacing-medium);
    position: relative;
  }
</style>
```

```jsx react
import { MoyoButton,MoyoTooltip } from '@tovutifunk/tovuti/dist/react';

const css = `
  .tooltip-hoist {
    border: solid 2px var(--moyo-panel-border-color);
    overflow: hidden;
    padding: var(--moyo-spacing-medium);
    position: relative;
  }
`;

const App = () => (
  <>
    <div class="tooltip-hoist">
      <MoyoTooltip content="This is a tooltip">
        <MoyoButton>No Hoist</MoyoButton>
      </MoyoTooltip>

      <MoyoTooltip content="This is a tooltip" hoist>
        <MoyoButton>Hoist</MoyoButton>
      </MoyoTooltip>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:moyo-tooltip]
