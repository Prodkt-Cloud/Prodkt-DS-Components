# Dropdown

[component-header:moyo-dropdown]

Dropdowns expose additional content that "drops down" in a panel.

Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.

Dropdowns are designed to work well with [menus](/components/menu) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [color picker](/components/color-picker) and [select](/components/select)). The API gives you complete control over showing, hiding, and positioning the panel.

```html preview
<moyo-dropdown>
  <moyo-button slot="trigger" caret>Dropdown</moyo-button>
  <moyo-menu>
    <moyo-menu-item>Dropdown Item 1</moyo-menu-item>
    <moyo-menu-item>Dropdown Item 2</moyo-menu-item>
    <moyo-menu-item>Dropdown Item 3</moyo-menu-item>
    <moyo-divider></moyo-divider>
    <moyo-menu-item checked>Checked</moyo-menu-item>
    <moyo-menu-item disabled>Disabled</moyo-menu-item>
    <moyo-divider></moyo-divider>
    <moyo-menu-item>
      Prefix
      <moyo-icon slot="prefix" name="gift"></moyo-icon>
    </moyo-menu-item>
    <moyo-menu-item>
      Suffix Icon
      <moyo-icon slot="suffix" name="heart"></moyo-icon>
    </moyo-menu-item>
  </moyo-menu>
</moyo-dropdown>
```

```jsx react
import { MoyoButton, MoyoDivider, MoyoDropdown, MoyoIcon, MoyoMenu, MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoDropdown>
    <MoyoButton slot="trigger" caret>
      Dropdown
    </MoyoButton>
    <MoyoMenu>
      <MoyoMenuItem>Dropdown Item 1</MoyoMenuItem>
      <MoyoMenuItem>Dropdown Item 2</MoyoMenuItem>
      <MoyoMenuItem>Dropdown Item 3</MoyoMenuItem>
      <MoyoDivider />
      <MoyoMenuItem checked>Checked</MoyoMenuItem>
      <MoyoMenuItem disabled>Disabled</MoyoMenuItem>
      <MoyoDivider />
      <MoyoMenuItem>
        Prefix
        <MoyoIcon slot="prefix" name="gift" />
      </MoyoMenuItem>
      <MoyoMenuItem>
        Suffix Icon
        <MoyoIcon slot="suffix" name="heart" />
      </MoyoMenuItem>
    </MoyoMenu>
  </MoyoDropdown>
);
```

## Examples

### Getting the Selected Item

When dropdowns are used with [menus](/components/menu), you can listen for the `moyo-select` event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands.

```html preview
<div class="dropdown-selection">
  <moyo-dropdown>
    <moyo-button slot="trigger" caret>Edit</moyo-button>
    <moyo-menu>
      <moyo-menu-item value="cut">Cut</moyo-menu-item>
      <moyo-menu-item value="copy">Copy</moyo-menu-item>
      <moyo-menu-item value="paste">Paste</moyo-menu-item>
    </moyo-menu>
  </moyo-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('moyo-dropdown');

  dropdown.addEventListener('moyo-select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

```jsx react
import { MoyoButton, MoyoDropdown, MoyoMenu, MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  function handleSelect(event) {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  }

  return (
    <MoyoDropdown>
      <MoyoButton slot="trigger" caret>
        Edit
      </MoyoButton>
      <MoyoMenu onMoyoSelect={handleSelect}>
        <MoyoMenuItem value="cut">Cut</MoyoMenuItem>
        <MoyoMenuItem value="copy">Copy</MoyoMenuItem>
        <MoyoMenuItem value="paste">Paste</MoyoMenuItem>
      </MoyoMenu>
    </MoyoDropdown>
  );
};
```

Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event.

```html preview
<div class="dropdown-selection-alt">
  <moyo-dropdown>
    <moyo-button slot="trigger" caret>Edit</moyo-button>
    <moyo-menu>
      <moyo-menu-item value="cut">Cut</moyo-menu-item>
      <moyo-menu-item value="copy">Copy</moyo-menu-item>
      <moyo-menu-item value="paste">Paste</moyo-menu-item>
    </moyo-menu>
  </moyo-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection-alt');
  const cut = container.querySelector('moyo-menu-item[value="cut"]');
  const copy = container.querySelector('moyo-menu-item[value="copy"]');
  const paste = container.querySelector('moyo-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>
```

```jsx react
import { MoyoButton, MoyoDropdown, MoyoMenu, MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  function handleCut() {
    console.log('cut');
  }

  function handleCopy() {
    console.log('copy');
  }

  function handlePaste() {
    console.log('paste');
  }

  return (
    <MoyoDropdown>
      <MoyoButton slot="trigger" caret>
        Edit
      </MoyoButton>
      <MoyoMenu>
        <MoyoMenuItem onClick={handleCut}>Cut</MoyoMenuItem>
        <MoyoMenuItem onClick={handleCopy}>Copy</MoyoMenuItem>
        <MoyoMenuItem onClick={handlePaste}>Paste</MoyoMenuItem>
      </MoyoMenu>
    </MoyoDropdown>
  );
};
```

### Placement

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html preview
<moyo-dropdown placement="top-start">
  <moyo-button slot="trigger" caret>Edit</moyo-button>
  <moyo-menu>
    <moyo-menu-item>Cut</moyo-menu-item>
    <moyo-menu-item>Copy</moyo-menu-item>
    <moyo-menu-item>Paste</moyo-menu-item>
    <moyo-divider></moyo-divider>
    <moyo-menu-item>Find</moyo-menu-item>
    <moyo-menu-item>Replace</moyo-menu-item>
  </moyo-menu>
</moyo-dropdown>
```

```jsx react
import { MoyoButton, MoyoDivider, MoyoDropdown, MoyoMenu, MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoDropdown placement="top-start">
    <MoyoButton slot="trigger" caret>
      Edit
    </MoyoButton>
    <MoyoMenu>
      <MoyoMenuItem>Cut</MoyoMenuItem>
      <MoyoMenuItem>Copy</MoyoMenuItem>
      <MoyoMenuItem>Paste</MoyoMenuItem>
      <MoyoDivider />
      <MoyoMenuItem>Find</MoyoMenuItem>
      <MoyoMenuItem>Replace</MoyoMenuItem>
    </MoyoMenu>
  </MoyoDropdown>
);
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

```html preview
<moyo-dropdown distance="30">
  <moyo-button slot="trigger" caret>Edit</moyo-button>
  <moyo-menu>
    <moyo-menu-item>Cut</moyo-menu-item>
    <moyo-menu-item>Copy</moyo-menu-item>
    <moyo-menu-item>Paste</moyo-menu-item>
    <moyo-divider></moyo-divider>
    <moyo-menu-item>Find</moyo-menu-item>
    <moyo-menu-item>Replace</moyo-menu-item>
  </moyo-menu>
</moyo-dropdown>
```

```jsx react
import { MoyoButton, MoyoDivider, MoyoDropdown, MoyoMenu, MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoDropdown distance={30}>
    <MoyoButton slot="trigger" caret>
      Edit
    </MoyoButton>
    <MoyoMenu>
      <MoyoMenuItem>Cut</MoyoMenuItem>
      <MoyoMenuItem>Copy</MoyoMenuItem>
      <MoyoMenuItem>Paste</MoyoMenuItem>
      <MoyoDivider />
      <MoyoMenuItem>Find</MoyoMenuItem>
      <MoyoMenuItem>Replace</MoyoMenuItem>
    </MoyoMenu>
  </MoyoDropdown>
);
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

```html preview
<moyo-dropdown skidding="30">
  <moyo-button slot="trigger" caret>Edit</moyo-button>
  <moyo-menu>
    <moyo-menu-item>Cut</moyo-menu-item>
    <moyo-menu-item>Copy</moyo-menu-item>
    <moyo-menu-item>Paste</moyo-menu-item>
    <moyo-divider></moyo-divider>
    <moyo-menu-item>Find</moyo-menu-item>
    <moyo-menu-item>Replace</moyo-menu-item>
  </moyo-menu>
</moyo-dropdown>
```

```jsx react
import { MoyoButton, MoyoDivider, MoyoDropdown, MoyoMenu, MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoDropdown skidding={30}>
    <MoyoButton slot="trigger" caret>
      Edit
    </MoyoButton>
    <MoyoMenu>
      <MoyoMenuItem>Cut</MoyoMenuItem>
      <MoyoMenuItem>Copy</MoyoMenuItem>
      <MoyoMenuItem>Paste</MoyoMenuItem>
      <MoyoDivider />
      <MoyoMenuItem>Find</MoyoMenuItem>
      <MoyoMenuItem>Replace</MoyoMenuItem>
    </MoyoMenu>
  </MoyoDropdown>
);
```

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html preview
<div class="dropdown-hoist">
  <moyo-dropdown>
    <moyo-button slot="trigger" caret>No Hoist</moyo-button>
    <moyo-menu>
      <moyo-menu-item>Item 1</moyo-menu-item>
      <moyo-menu-item>Item 2</moyo-menu-item>
      <moyo-menu-item>Item 3</moyo-menu-item>
    </moyo-menu>
  </moyo-dropdown>

  <moyo-dropdown hoist>
    <moyo-button slot="trigger" caret>Hoist</moyo-button>
    <moyo-menu>
      <moyo-menu-item>Item 1</moyo-menu-item>
      <moyo-menu-item>Item 2</moyo-menu-item>
      <moyo-menu-item>Item 3</moyo-menu-item>
    </moyo-menu>
  </moyo-dropdown>
</div>

<style>
  .dropdown-hoist {
    border: solid 2px var(--moyo-panel-border-color);
    padding: var(--moyo-spacing-medium);
    overflow: hidden;
  }
</style>
```

```jsx react
import { MoyoButton, MoyoDivider, MoyoDropdown, MoyoIcon, MoyoMenu, MoyoMenuItem } from '@tovutifunk/tovuti/dist/react';

const css = `
  .dropdown-hoist {
    border: solid 2px var(--moyo-panel-border-color);
    padding: var(--moyo-spacing-medium);
    overflow: hidden;
  }
`;

const App = () => (
  <>
    <div className="dropdown-hoist">
      <MoyoDropdown>
        <MoyoButton slot="trigger" caret>
          No Hoist
        </MoyoButton>
        <MoyoMenu>
          <MoyoMenuItem>Item 1</MoyoMenuItem>
          <MoyoMenuItem>Item 2</MoyoMenuItem>
          <MoyoMenuItem>Item 3</MoyoMenuItem>
        </MoyoMenu>
      </MoyoDropdown>

      <MoyoDropdown hoist>
        <MoyoButton slot="trigger" caret>
          Hoist
        </MoyoButton>
        <MoyoMenu>
          <MoyoMenuItem>Item 1</MoyoMenuItem>
          <MoyoMenuItem>Item 2</MoyoMenuItem>
          <MoyoMenuItem>Item 3</MoyoMenuItem>
        </MoyoMenu>
      </MoyoDropdown>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:moyo-dropdown]
