# Button Group

[component-header:moyo-button-group]

Button groups can be used to group related buttons into sections.

```html preview
<moyo-button-group>
  <moyo-button>Left</moyo-button>
  <moyo-button>Center</moyo-button>
  <moyo-button>Right</moyo-button>
</moyo-button-group>
```

```jsx react
import { MoyoButton, MoyoButtonGroup } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoButtonGroup>
    <MoyoButton>Left</MoyoButton>
    <MoyoButton>Center</MoyoButton>
    <MoyoButton>Right</MoyoButton>
  </MoyoButtonGroup>
);
```

## Examples

### Button Sizes

All button sizes are supported, but avoid mixing sizes within the same button group.

```html preview
<moyo-button-group>
  <moyo-button size="small">Left</moyo-button>
  <moyo-button size="small">Center</moyo-button>
  <moyo-button size="small">Right</moyo-button>
</moyo-button-group>

<br /><br />

<moyo-button-group>
  <moyo-button size="medium">Left</moyo-button>
  <moyo-button size="medium">Center</moyo-button>
  <moyo-button size="medium">Right</moyo-button>
</moyo-button-group>

<br /><br />

<moyo-button-group>
  <moyo-button size="large">Left</moyo-button>
  <moyo-button size="large">Center</moyo-button>
  <moyo-button size="large">Right</moyo-button>
</moyo-button-group>
```

```jsx react
import { MoyoButton, MoyoButtonGroup } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoButtonGroup>
      <MoyoButton size="small">Left</MoyoButton>
      <MoyoButton size="small">Center</MoyoButton>
      <MoyoButton size="small">Right</MoyoButton>
    </MoyoButtonGroup>

    <br />
    <br />

    <MoyoButtonGroup>
      <MoyoButton size="medium">Left</MoyoButton>
      <MoyoButton size="medium">Center</MoyoButton>
      <MoyoButton size="medium">Right</MoyoButton>
    </MoyoButtonGroup>

    <br />
    <br />

    <MoyoButtonGroup>
      <MoyoButton size="large">Left</MoyoButton>
      <MoyoButton size="large">Center</MoyoButton>
      <MoyoButton size="large">Right</MoyoButton>
    </MoyoButtonGroup>
  </>
);
```

### Theme Buttons

Theme buttons are supported through the button's `type` attribute.

```html preview
<moyo-button-group>
  <moyo-button variant="primary">Left</moyo-button>
  <moyo-button variant="primary">Center</moyo-button>
  <moyo-button variant="primary">Right</moyo-button>
</moyo-button-group>

<br /><br />

<moyo-button-group>
  <moyo-button variant="success">Left</moyo-button>
  <moyo-button variant="success">Center</moyo-button>
  <moyo-button variant="success">Right</moyo-button>
</moyo-button-group>

<br /><br />

<moyo-button-group>
  <moyo-button variant="neutral">Left</moyo-button>
  <moyo-button variant="neutral">Center</moyo-button>
  <moyo-button variant="neutral">Right</moyo-button>
</moyo-button-group>

<br /><br />

<moyo-button-group>
  <moyo-button variant="warning">Left</moyo-button>
  <moyo-button variant="warning">Center</moyo-button>
  <moyo-button variant="warning">Right</moyo-button>
</moyo-button-group>

<br /><br />

<moyo-button-group>
  <moyo-button variant="danger">Left</moyo-button>
  <moyo-button variant="danger">Center</moyo-button>
  <moyo-button variant="danger">Right</moyo-button>
</moyo-button-group>
```

```jsx react
import { MoyoButton, MoyoButtonGroup } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoButtonGroup>
      <MoyoButton variant="primary">Left</MoyoButton>
      <MoyoButton variant="primary">Center</MoyoButton>
      <MoyoButton variant="primary">Right</MoyoButton>
    </MoyoButtonGroup>

    <br />
    <br />

    <MoyoButtonGroup>
      <MoyoButton variant="success">Left</MoyoButton>
      <MoyoButton variant="success">Center</MoyoButton>
      <MoyoButton variant="success">Right</MoyoButton>
    </MoyoButtonGroup>

    <br />
    <br />

    <MoyoButtonGroup>
      <MoyoButton variant="neutral">Left</MoyoButton>
      <MoyoButton variant="neutral">Center</MoyoButton>
      <MoyoButton variant="neutral">Right</MoyoButton>
    </MoyoButtonGroup>

    <br />
    <br />

    <MoyoButtonGroup>
      <MoyoButton variant="warning">Left</MoyoButton>
      <MoyoButton variant="warning">Center</MoyoButton>
      <MoyoButton variant="warning">Right</MoyoButton>
    </MoyoButtonGroup>

    <br />
    <br />

    <MoyoButtonGroup>
      <MoyoButton variant="danger">Left</MoyoButton>
      <MoyoButton variant="danger">Center</MoyoButton>
      <MoyoButton variant="danger">Right</MoyoButton>
    </MoyoButtonGroup>
  </>
);
```

### Pill Buttons

Pill buttons are supported through the button's `pill` attribute.

```html preview
<moyo-button-group>
  <moyo-button size="small" pill>Left</moyo-button>
  <moyo-button size="small" pill>Center</moyo-button>
  <moyo-button size="small" pill>Right</moyo-button>
</moyo-button-group>

<br /><br />

<moyo-button-group>
  <moyo-button size="medium" pill>Left</moyo-button>
  <moyo-button size="medium" pill>Center</moyo-button>
  <moyo-button size="medium" pill>Right</moyo-button>
</moyo-button-group>

<br /><br />

<moyo-button-group>
  <moyo-button size="large" pill>Left</moyo-button>
  <moyo-button size="large" pill>Center</moyo-button>
  <moyo-button size="large" pill>Right</moyo-button>
</moyo-button-group>
```

```jsx react
import { MoyoButton, MoyoButtonGroup } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoButtonGroup>
      <MoyoButton size="small" pill>
        Left
      </MoyoButton>
      <MoyoButton size="small" pill>
        Center
      </MoyoButton>
      <MoyoButton size="small" pill>
        Right
      </MoyoButton>
    </MoyoButtonGroup>

    <br />
    <br />

    <MoyoButtonGroup>
      <MoyoButton size="medium" pill>
        Left
      </MoyoButton>
      <MoyoButton size="medium" pill>
        Center
      </MoyoButton>
      <MoyoButton size="medium" pill>
        Right
      </MoyoButton>
    </MoyoButtonGroup>

    <br />
    <br />

    <MoyoButtonGroup>
      <MoyoButton size="large" pill>
        Left
      </MoyoButton>
      <MoyoButton size="large" pill>
        Center
      </MoyoButton>
      <MoyoButton size="large" pill>
        Right
      </MoyoButton>
    </MoyoButtonGroup>
  </>
);
```

### Dropdowns in Button Groups

Dropdowns can be placed inside button groups as long as the trigger is an `<moyo-button>` element.

```html preview
<moyo-button-group>
  <moyo-button>Button</moyo-button>
  <moyo-button>Button</moyo-button>
  <moyo-dropdown>
    <moyo-button slot="trigger" caret>Dropdown</moyo-button>
    <moyo-menu>
      <moyo-menu-item>Item 1</moyo-menu-item>
      <moyo-menu-item>Item 2</moyo-menu-item>
      <moyo-menu-item>Item 3</moyo-menu-item>
    </moyo-menu>
  </moyo-dropdown>
</moyo-button-group>
```

```jsx react
import { MoyoButton, MoyoButtonGroup, MoyoDropdown, MoyoMenu, MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoButtonGroup>
    <MoyoButton>Button</MoyoButton>
    <MoyoButton>Button</MoyoButton>
    <MoyoDropdown>
      <MoyoButton slot="trigger" caret>
        Dropdown
      </MoyoButton>
      <MoyoMenu>
        <MoyoMenuItem>Item 1</MoyoMenuItem>
        <MoyoMenuItem>Item 2</MoyoMenuItem>
        <MoyoMenuItem>Item 3</MoyoMenuItem>
      </MoyoMenu>
    </MoyoDropdown>
  </MoyoButtonGroup>
);
```

### Split Buttons

Create a split button using a button and a dropdown. Use a [visually hidden](/components/visually-hidden) label to ensure the dropdown is accessible to users with assistive devices.

```html preview
<moyo-button-group>
  <moyo-button variant="primary">Save</moyo-button>
  <moyo-dropdown placement="bottom-end">
    <moyo-button slot="trigger" variant="primary" caret>
      <moyo-visually-hidden>More options</moyo-visually-hidden>
    </moyo-button>
    <moyo-menu>
      <moyo-menu-item>Save</moyo-menu-item>
      <moyo-menu-item>Save as&hellip;</moyo-menu-item>
      <moyo-menu-item>Save all</moyo-menu-item>
    </moyo-menu>
  </moyo-dropdown>
</moyo-button-group>
```

```jsx react
import { MoyoButton, MoyoButtonGroup, MoyoDropdown, MoyoMenu, MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoButtonGroup>
    <MoyoButton variant="primary">Save</MoyoButton>
    <MoyoDropdown placement="bottom-end">
      <MoyoButton slot="trigger" variant="primary" caret></MoyoButton>
      <MoyoMenu>
        <MoyoMenuItem>Save</MoyoMenuItem>
        <MoyoMenuItem>Save as&hellip;</MoyoMenuItem>
        <MoyoMenuItem>Save all</MoyoMenuItem>
      </MoyoMenu>
    </MoyoDropdown>
  </MoyoButtonGroup>
);
```

### Tooltips in Button Groups

Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.

```html preview
<moyo-button-group>
  <moyo-tooltip content="I'm on the left">
    <moyo-button>Left</moyo-button>
  </moyo-tooltip>

  <moyo-tooltip content="I'm in the middle">
    <moyo-button>Center</moyo-button>
  </moyo-tooltip>

  <moyo-tooltip content="I'm on the right">
    <moyo-button>Right</moyo-button>
  </moyo-tooltip>
</moyo-button-group>
```

```jsx react
import { MoyoButton, MoyoButtonGroup, MoyoTooltip } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoButtonGroup>
      <MoyoTooltip content="I'm on the left">
        <MoyoButton>Left</MoyoButton>
      </MoyoTooltip>

      <MoyoTooltip content="I'm in the middle">
        <MoyoButton>Center</MoyoButton>
      </MoyoTooltip>

      <MoyoTooltip content="I'm on the right">
        <MoyoButton>Right</MoyoButton>
      </MoyoTooltip>
    </MoyoButtonGroup>
  </>
);
```

### Toolbar Example

Create interactive toolbars with button groups.

```html preview
<div class="button-group-toolbar">
  <moyo-button-group label="History">
    <moyo-tooltip content="Undo">
      <moyo-button><moyo-icon name="arrow-counterclockwise" label="Undo"></moyo-icon></moyo-button>
    </moyo-tooltip>
    <moyo-tooltip content="Redo">
      <moyo-button><moyo-icon name="arrow-clockwise" label="Redo"></moyo-icon></moyo-button>
    </moyo-tooltip>
  </moyo-button-group>

  <moyo-button-group label="Formatting">
    <moyo-tooltip content="Bold">
      <moyo-button><moyo-icon name="type-bold" label="Bold"></moyo-icon></moyo-button>
    </moyo-tooltip>
    <moyo-tooltip content="Italic">
      <moyo-button><moyo-icon name="type-italic" label="Italic"></moyo-icon></moyo-button>
    </moyo-tooltip>
    <moyo-tooltip content="Underline">
      <moyo-button><moyo-icon name="type-underline" label="Underline"></moyo-icon></moyo-button>
    </moyo-tooltip>
  </moyo-button-group>

  <moyo-button-group label="Alignment">
    <moyo-tooltip content="Align Left">
      <moyo-button><moyo-icon name="justify-left" label="Align Left"></moyo-icon></moyo-button>
    </moyo-tooltip>
    <moyo-tooltip content="Align Center">
      <moyo-button><moyo-icon name="justify" label="Align Center"></moyo-icon></moyo-button>
    </moyo-tooltip>
    <moyo-tooltip content="Align Right">
      <moyo-button><moyo-icon name="justify-right" label="Align Right"></moyo-icon></moyo-button>
    </moyo-tooltip>
  </moyo-button-group>
</div>

<style>
  .button-group-toolbar moyo-button-group:not(:last-of-type) {
    margin-right: var(--moyo-spacing-x-small);
  }
</style>
```

```jsx react
import { MoyoButton, MoyoButtonGroup, MoyoIcon, MoyoTooltip } from '@tovutifunk/tovuti/dist/react';

const css = `
  .button-group-toolbar moyo-button-group:not(:last-of-type) {
    margin-right: var(--moyo-spacing-x-small);
  }
`;

const App = () => (
  <>
    <div className="button-group-toolbar">
      <MoyoButtonGroup label="History">
        <MoyoTooltip content="Undo">
          <MoyoButton>
            <MoyoIcon name="arrow-counterclockwise"></MoyoIcon>
          </MoyoButton>
        </MoyoTooltip>
        <MoyoTooltip content="Redo">
          <MoyoButton>
            <MoyoIcon name="arrow-clockwise"></MoyoIcon>
          </MoyoButton>
        </MoyoTooltip>
      </MoyoButtonGroup>

      <MoyoButtonGroup label="Formatting">
        <MoyoTooltip content="Bold">
          <MoyoButton>
            <MoyoIcon name="type-bold"></MoyoIcon>
          </MoyoButton>
        </MoyoTooltip>
        <MoyoTooltip content="Italic">
          <MoyoButton>
            <MoyoIcon name="type-italic"></MoyoIcon>
          </MoyoButton>
        </MoyoTooltip>
        <MoyoTooltip content="Underline">
          <MoyoButton>
            <MoyoIcon name="type-underline"></MoyoIcon>
          </MoyoButton>
        </MoyoTooltip>
      </MoyoButtonGroup>

      <MoyoButtonGroup label="Alignment">
        <MoyoTooltip content="Align Left">
          <MoyoButton>
            <MoyoIcon name="justify-left"></MoyoIcon>
          </MoyoButton>
        </MoyoTooltip>
        <MoyoTooltip content="Align Center">
          <MoyoButton>
            <MoyoIcon name="justify"></MoyoIcon>
          </MoyoButton>
        </MoyoTooltip>
        <MoyoTooltip content="Align Right">
          <MoyoButton>
            <MoyoIcon name="justify-right"></MoyoIcon>
          </MoyoButton>
        </MoyoTooltip>
      </MoyoButtonGroup>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:moyo-button-group]
