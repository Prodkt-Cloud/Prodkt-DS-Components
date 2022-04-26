# Split Panel

[component-header:moyo-split-panel]

Split panels display two adjacent panels, allowing the user to reposition them.

```html preview
<moyo-split-panel>
  <div
    slot="start"
    style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</moyo-split-panel>
```

```jsx react
import { MoyoSplitPanel } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSplitPanel>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--moyo-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--moyo-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </MoyoSplitPanel>
);
```

## Examples

### Initial Position

To set the initial position, use the `position` attribute. If no position is provided, it will default to 50% of the available space.

```html preview
<moyo-split-panel position="75">
  <div
    slot="start"
    style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</moyo-split-panel>
```

### Initial Position in Pixels

To set the initial position in pixels instead of a percentage, use the `position-in-pixels` attribute.

```html preview
<moyo-split-panel position-in-pixels="150">
  <div
    slot="start"
    style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</moyo-split-panel>
```

```jsx react
import { MoyoSplitPanel } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSplitPanel position="200">
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--moyo-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--moyo-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </MoyoSplitPanel>
);
```

### Vertical

Add the `vertical` attribute to render the split panel in a vertical orientation where the start and end panels are stacked. You also need to set a height when using the vertical orientation.

```html preview
<moyo-split-panel vertical style="height: 400px;">
  <div
    slot="start"
    style="height: 100%; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 100%; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</moyo-split-panel>
```

```jsx react
import { MoyoSplitPanel } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSplitPanel vertical style={{ height: '400px' }}>
    <div
      slot="start"
      style={{
        height: '100%',
        background: 'var(--moyo-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '100%',
        background: 'var(--moyo-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </MoyoSplitPanel>
);
```

### Snapping

To snap panels at specific positions while dragging, add the `snap` attribute with one or more space-separated values. Values must be in pixels or percentages. For example, to snap the panel at `100px` and `50%`, use `snap="100px 50%"`. You can also customize how close the divider must be before snapping with the `snap-threshold` attribute.

```html preview
<div class="split-panel-snapping">
  <moyo-split-panel snap="100px 50%">
    <div
      slot="start"
      style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      End
    </div>
  </moyo-split-panel>

  <div class="split-panel-snapping-dots"></div>
</div>

<style>
  .split-panel-snapping {
    position: relative;
  }

  .split-panel-snapping-dots::before,
  .split-panel-snapping-dots::after {
    content: '';
    position: absolute;
    bottom: -12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--moyo-color-neutral-400);
    transform: translateX(-3px);
  }

  .split-panel-snapping-dots::before {
    left: 100px;
  }

  .split-panel-snapping-dots::after {
    left: 50%;
  }
</style>
```

```jsx react
import { MoyoSplitPanel } from '@tovutifunk/tovuti/dist/react';

const css = `
  .split-panel-snapping {
    position: relative;
  }

  .split-panel-snapping-dots::before,
  .split-panel-snapping-dots::after {
    content: '';
    position: absolute;
    bottom: -12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--moyo-color-neutral-400);
    transform: translateX(-3px);
  }

  .split-panel-snapping-dots::before {
    left: 100px;
  }

  .split-panel-snapping-dots::after {
    left: 50%;
  }
`;

const App = () => (
  <>
    <div className="split-panel-snapping">
      <MoyoSplitPanel snap="100px 50%">
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--moyo-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--moyo-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </MoyoSplitPanel>

      <div className="split-panel-snapping-dots" />
    </div>

    <style>{css}</style>
  </>
);
```

### Disabled

Add the `disabled` attribute to prevent the divider from being repositioned.

```html preview
<moyo-split-panel disabled>
  <div
    slot="start"
    style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</moyo-split-panel>
```

```jsx react
import { MoyoSplitPanel } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSplitPanel disabled>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--moyo-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--moyo-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </MoyoSplitPanel>
);
```

### Setting the Primary Panel

By default, both panels will grow or shrink proportionally when the host element is resized. If a primary panel is designated, it will maintain its size and the secondary panel will grow or shrink to fit the remaining space. You can set the primary panel to `start` or `end` using the `primary` attribute.

Try resizing the example below with each option and notice how the panels respond.

```html preview
<div class="split-panel-primary">
  <moyo-split-panel>
    <div
      slot="start"
      style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      End
    </div>
  </moyo-split-panel>

  <moyo-select label="Primary Panel" value="" style="max-width: 200px; margin-top: 1rem;">
    <moyo-menu-item value="">None</moyo-menu-item>
    <moyo-menu-item value="start">Start</moyo-menu-item>
    <moyo-menu-item value="end">End</moyo-menu-item>
  </moyo-select>
</div>

<script>
  const container = document.querySelector('.split-panel-primary');
  const splitPanel = container.querySelector('moyo-split-panel');
  const select = container.querySelector('moyo-select');

  select.addEventListener('moyo-change', () => (splitPanel.primary = select.value));
</script>
```

```jsx react
import { useState } from 'react';
import { MoyoSplitPanel,MoyoSelect,MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  const [primary, setPrimary] = useState('');

  return (
    <>
      <MoyoSplitPanel primary={primary}>
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--moyo-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--moyo-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </MoyoSplitPanel>

      <MoyoSelect
        label="Primary Panel"
        value={primary}
        style={{ maxWidth: '200px', marginTop: '1rem' }}
        onMoyoChange={event => setPrimary(event.target.value)}
      >
        <MoyoMenuItem value="">None</MoyoMenuItem>
        <MoyoMenuItem value="start">Start</MoyoMenuItem>
        <MoyoMenuItem value="end">End</MoyoMenuItem>
      </MoyoSelect>
    </>
  );
};
```

### Min & Max

To set a minimum or maximum size of the primary panel, use the `--min` and `--max` custom properties. Since the secondary panel is flexible, size constraints can only be applied to the primary panel. If no primary panel is designated, these constraints will be applied to the `start` panel.

This examples demonstrates how you can ensure both panels are at least 150px using `--min`, `--max`, and the `calc()` function.

```html preview
<moyo-split-panel style="--min: 150px; --max: calc(100% - 150px);">
  <div
    slot="start"
    style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</moyo-split-panel>
```

```jsx react
import { MoyoSplitPanel } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSplitPanel style={{ '--min': '150px', '--max': 'calc(100% - 150px)' }}>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--moyo-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--moyo-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </MoyoSplitPanel>
);
```

### Nested Split Panels

Create complex layouts that can be repositioned independently by nesting split panels.

```html preview
<moyo-split-panel>
  <div
    slot="start"
    style="height: 400px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div slot="end">
    <moyo-split-panel vertical style="height: 400px;">
      <div
        slot="start"
        style="height: 100%; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
      >
        Top
      </div>
      <div
        slot="end"
        style="height: 100%; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
      >
        Bottom
      </div>
    </moyo-split-panel>
  </div>
</moyo-split-panel>
```

```jsx react
import { MoyoSplitPanel } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSplitPanel>
    <div
      slot="start"
      style={{
        height: '400px',
        background: 'var(--moyo-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div slot="end">
      <MoyoSplitPanel vertical style={{ height: '400px' }}>
        <div
          slot="start"
          style={{
            height: '100%',
            background: 'var(--moyo-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '100%',
            background: 'var(--moyo-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </MoyoSplitPanel>
    </div>
  </MoyoSplitPanel>
);
```

### Customizing the Divider

You can target the `divider` part to apply CSS properties to the divider. To add a handle, slot an icon or another element into the `handle` slot. When customizing the divider, make sure to think about focus styles for keyboard users.

```html preview
<moyo-split-panel style="--divider-width: 20px;">
  <moyo-icon slot="handle" name="grip-vertical"></moyo-icon>
  <div
    slot="start"
    style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</moyo-split-panel>
```

```jsx react
import { MoyoSplitPanel,MoyoIcon } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoSplitPanel style={{ '--divider-width': '20px' }}>
    <MoyoIcon slot="handle" name="grip-vertical" />
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--moyo-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--moyo-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </MoyoSplitPanel>
);
```

Here's a more elaborate example that changes the divider's color and width and adds a styled handle.

```html preview
<div class="split-panel-handle">
  <moyo-split-panel>
    <moyo-icon slot="handle" name="grip-vertical"></moyo-icon>
    <div
      slot="start"
      style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--moyo-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      End
    </div>
  </moyo-split-panel>
</div>

<style>
  .split-panel-handle moyo-split-panel {
    --divider-width: 2px;
  }

  .split-panel-handle moyo-split-panel::part(divider) {
    background-color: var(--moyo-color-pink-600);
  }

  .split-panel-handle moyo-icon {
    position: absolute;
    border-radius: var(--moyo-border-radius-small);
    background: var(--moyo-color-pink-600);
    color: var(--moyo-color-neutral-0);
    padding: 0.5rem 0.125rem;
  }

  .split-panel-handle moyo-split-panel::part(divider):focus-visible {
    background-color: var(--moyo-color-primary-600);
  }

  .split-panel-handle moyo-split-panel:focus-within moyo-icon {
    background-color: var(--moyo-color-primary-600);
    color: var(--moyo-color-neutral-0);
  }
</style>
```

```jsx react
import { MoyoSplitPanel,MoyoIcon } from '@tovutifunk/tovuti/dist/react';

const css = `
  .split-panel-handle moyo-split-panel {
    --divider-width: 2px;
  }

  .split-panel-handle moyo-split-panel::part(divider) {
    background-color: var(--moyo-color-pink-600);
  }

  .split-panel-handle moyo-icon {
    position: absolute;
    border-radius: var(--moyo-border-radius-small);
    background: var(--moyo-color-pink-600);
    color: var(--moyo-color-neutral-0);
    padding: .5rem .125rem;
  }

  .split-panel-handle moyo-split-panel::part(divider):focus-visible {
    background-color: var(--moyo-color-primary-600);
  }

  .split-panel-handle moyo-split-panel:focus-within moyo-icon {
    background-color: var(--moyo-color-primary-600);
    color: var(--moyo-color-neutral-0);
  }
`;

const App = () => (
  <>
    <div className="split-panel-handle">
      <MoyoSplitPanel>
        <MoyoIcon slot="handle" name="grip-vertical" />
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--moyo-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--moyo-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </MoyoSplitPanel>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:moyo-split-panel]
