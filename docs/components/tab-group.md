# Tab Group

[component-header:moyo-tab-group]

Tab groups organize content into a container that shows one section at a time.

Tab groups make use of [tabs](/components/tab) and [tab panels](/components/tab-panel). Each tab must be slotted into the `nav` slot and its `panel` must refer to a tab panel of the same name.

```html preview
<moyo-tab-group>
  <moyo-tab slot="nav" panel="general">General</moyo-tab>
  <moyo-tab slot="nav" panel="custom">Custom</moyo-tab>
  <moyo-tab slot="nav" panel="advanced">Advanced</moyo-tab>
  <moyo-tab slot="nav" panel="disabled" disabled>Disabled</moyo-tab>

  <moyo-tab-panel name="general">This is the general tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="custom">This is the custom tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="advanced">This is the advanced tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="disabled">This is a disabled tab panel.</moyo-tab-panel>
</moyo-tab-group>
```

```jsx react
import { MoyoTab, MoyoTabGroup, MoyoTabPanel } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoTabGroup>
    <MoyoTab slot="nav" panel="general">
      General
    </MoyoTab>
    <MoyoTab slot="nav" panel="custom">
      Custom
    </MoyoTab>
    <MoyoTab slot="nav" panel="advanced">
      Advanced
    </MoyoTab>
    <MoyoTab slot="nav" panel="disabled" disabled>
      Disabled
    </MoyoTab>

    <MoyoTabPanel name="general">This is the general tab panel.</MoyoTabPanel>
    <MoyoTabPanel name="custom">This is the custom tab panel.</MoyoTabPanel>
    <MoyoTabPanel name="advanced">This is the advanced tab panel.</MoyoTabPanel>
    <MoyoTabPanel name="disabled">This is a disabled tab panel.</MoyoTabPanel>
  </MoyoTabGroup>
);
```

## Examples

### Tabs on Bottom

Tabs can be shown on the bottom by setting `placement` to `bottom`.

```html preview
<moyo-tab-group placement="bottom">
  <moyo-tab slot="nav" panel="general">General</moyo-tab>
  <moyo-tab slot="nav" panel="custom">Custom</moyo-tab>
  <moyo-tab slot="nav" panel="advanced">Advanced</moyo-tab>
  <moyo-tab slot="nav" panel="disabled" disabled>Disabled</moyo-tab>

  <moyo-tab-panel name="general">This is the general tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="custom">This is the custom tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="advanced">This is the advanced tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="disabled">This is a disabled tab panel.</moyo-tab-panel>
</moyo-tab-group>
```

```jsx react
import { MoyoTab, MoyoTabGroup, MoyoTabPanel } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoTabGroup placement="bottom">
    <MoyoTab slot="nav" panel="general">
      General
    </MoyoTab>
    <MoyoTab slot="nav" panel="custom">
      Custom
    </MoyoTab>
    <MoyoTab slot="nav" panel="advanced">
      Advanced
    </MoyoTab>
    <MoyoTab slot="nav" panel="disabled" disabled>
      Disabled
    </MoyoTab>

    <MoyoTabPanel name="general">This is the general tab panel.</MoyoTabPanel>
    <MoyoTabPanel name="custom">This is the custom tab panel.</MoyoTabPanel>
    <MoyoTabPanel name="advanced">This is the advanced tab panel.</MoyoTabPanel>
    <MoyoTabPanel name="disabled">This is a disabled tab panel.</MoyoTabPanel>
  </MoyoTabGroup>
);
```

### Tabs on Start

Tabs can be shown on the starting side by setting `placement` to `start`.

```html preview
<moyo-tab-group placement="start">
  <moyo-tab slot="nav" panel="general">General</moyo-tab>
  <moyo-tab slot="nav" panel="custom">Custom</moyo-tab>
  <moyo-tab slot="nav" panel="advanced">Advanced</moyo-tab>
  <moyo-tab slot="nav" panel="disabled" disabled>Disabled</moyo-tab>

  <moyo-tab-panel name="general">This is the general tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="custom">This is the custom tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="advanced">This is the advanced tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="disabled">This is a disabled tab panel.</moyo-tab-panel>
</moyo-tab-group>
```

```jsx react
import { MoyoTab, MoyoTabGroup, MoyoTabPanel } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoTabGroup placement="start">
    <MoyoTab slot="nav" panel="general">
      General
    </MoyoTab>
    <MoyoTab slot="nav" panel="custom">
      Custom
    </MoyoTab>
    <MoyoTab slot="nav" panel="advanced">
      Advanced
    </MoyoTab>
    <MoyoTab slot="nav" panel="disabled" disabled>
      Disabled
    </MoyoTab>

    <MoyoTabPanel name="general">This is the general tab panel.</MoyoTabPanel>
    <MoyoTabPanel name="custom">This is the custom tab panel.</MoyoTabPanel>
    <MoyoTabPanel name="advanced">This is the advanced tab panel.</MoyoTabPanel>
    <MoyoTabPanel name="disabled">This is a disabled tab panel.</MoyoTabPanel>
  </MoyoTabGroup>
);
```

### Tabs on End

Tabs can be shown on the ending side by setting `placement` to `end`.

```html preview
<moyo-tab-group placement="end">
  <moyo-tab slot="nav" panel="general">General</moyo-tab>
  <moyo-tab slot="nav" panel="custom">Custom</moyo-tab>
  <moyo-tab slot="nav" panel="advanced">Advanced</moyo-tab>
  <moyo-tab slot="nav" panel="disabled" disabled>Disabled</moyo-tab>

  <moyo-tab-panel name="general">This is the general tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="custom">This is the custom tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="advanced">This is the advanced tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="disabled">This is a disabled tab panel.</moyo-tab-panel>
</moyo-tab-group>
```

```jsx react
import { MoyoTab, MoyoTabGroup, MoyoTabPanel } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoTabGroup placement="end">
    <MoyoTab slot="nav" panel="general">
      General
    </MoyoTab>
    <MoyoTab slot="nav" panel="custom">
      Custom
    </MoyoTab>
    <MoyoTab slot="nav" panel="advanced">
      Advanced
    </MoyoTab>
    <MoyoTab slot="nav" panel="disabled" disabled>
      Disabled
    </MoyoTab>

    <MoyoTabPanel name="general">This is the general tab panel.</MoyoTabPanel>
    <MoyoTabPanel name="custom">This is the custom tab panel.</MoyoTabPanel>
    <MoyoTabPanel name="advanced">This is the advanced tab panel.</MoyoTabPanel>
    <MoyoTabPanel name="disabled">This is a disabled tab panel.</MoyoTabPanel>
  </MoyoTabGroup>
);
```

### Closable Tabs

Add the `closable` attribute to a tab to show a close button. This example shows how you can dynamically remove tabs from the DOM when the close button is activated.

```html preview
<moyo-tab-group class="tabs-closable">
  <moyo-tab slot="nav" panel="general">General</moyo-tab>
  <moyo-tab slot="nav" panel="closable-1" closable>Closable 1</moyo-tab>
  <moyo-tab slot="nav" panel="closable-2" closable>Closable 2</moyo-tab>
  <moyo-tab slot="nav" panel="closable-3" closable>Closable 3</moyo-tab>

  <moyo-tab-panel name="general">This is the general tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="closable-1">This is the first closable tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="closable-2">This is the second closable tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="closable-3">This is the third closable tab panel.</moyo-tab-panel>
</moyo-tab-group>

<script>
  const tabGroup = document.querySelector('.tabs-closable');

  tabGroup.addEventListener('moyo-close', async event => {
    const tab = event.target;
    const panel = tabGroup.querySelector(`moyo-tab-panel[name="${tab.panel}"]`);

    // Show the previous tab if the tab is currently active
    if (tab.active) {
      tabGroup.show(tab.previousElementSibling.panel);
    }

    // Remove the tab + panel
    tab.remove();
    panel.remove();
  });
</script>
```

```jsx react
import { MoyoTab, MoyoTabGroup, MoyoTabPanel } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  function handleClose(event) {
    //
    // This is a crude example that removes the tab and its panel from the DOM.
    // There are better ways to manage tab creation/removal in React, but that
    // would significantly complicate the example.
    //
    const tab = event.target;
    const tabGroup = tab.closest('moyo-tab-group');
    const tabPanel = tabGroup.querySelector(`[aria-labelledby="${tab.id}"]`);

    tab.remove();
    tabPanel.remove();
  }

  return (
    <MoyoTabGroup className="tabs-closable" onMoyoClose={handleClose}>
      <MoyoTab slot="nav" panel="general">
        General
      </MoyoTab>
      <MoyoTab slot="nav" panel="closable-1" closable onMoyoClose={handleClose}>
        Closable 1
      </MoyoTab>
      <MoyoTab slot="nav" panel="closable-2" closable onMoyoClose={handleClose}>
        Closable 2
      </MoyoTab>
      <MoyoTab slot="nav" panel="closable-3" closable onMoyoClose={handleClose}>
        Closable 3
      </MoyoTab>

      <MoyoTabPanel name="general">This is the general tab panel.</MoyoTabPanel>
      <MoyoTabPanel name="closable-1">This is the first closable tab panel.</MoyoTabPanel>
      <MoyoTabPanel name="closable-2">This is the second closable tab panel.</MoyoTabPanel>
      <MoyoTabPanel name="closable-3">This is the third closable tab panel.</MoyoTabPanel>
    </MoyoTabGroup>
  );
};
```

### Scrolling Tabs

When there are more tabs than horizontal space allows, the nav will be scrollable.

```html preview
<moyo-tab-group>
  <moyo-tab slot="nav" panel="tab-1">Tab 1</moyo-tab>
  <moyo-tab slot="nav" panel="tab-2">Tab 2</moyo-tab>
  <moyo-tab slot="nav" panel="tab-3">Tab 3</moyo-tab>
  <moyo-tab slot="nav" panel="tab-4">Tab 4</moyo-tab>
  <moyo-tab slot="nav" panel="tab-5">Tab 5</moyo-tab>
  <moyo-tab slot="nav" panel="tab-6">Tab 6</moyo-tab>
  <moyo-tab slot="nav" panel="tab-7">Tab 7</moyo-tab>
  <moyo-tab slot="nav" panel="tab-8">Tab 8</moyo-tab>
  <moyo-tab slot="nav" panel="tab-9">Tab 9</moyo-tab>
  <moyo-tab slot="nav" panel="tab-10">Tab 10</moyo-tab>
  <moyo-tab slot="nav" panel="tab-11">Tab 11</moyo-tab>
  <moyo-tab slot="nav" panel="tab-12">Tab 12</moyo-tab>
  <moyo-tab slot="nav" panel="tab-13">Tab 13</moyo-tab>
  <moyo-tab slot="nav" panel="tab-14">Tab 14</moyo-tab>
  <moyo-tab slot="nav" panel="tab-15">Tab 15</moyo-tab>
  <moyo-tab slot="nav" panel="tab-16">Tab 16</moyo-tab>
  <moyo-tab slot="nav" panel="tab-17">Tab 17</moyo-tab>
  <moyo-tab slot="nav" panel="tab-18">Tab 18</moyo-tab>
  <moyo-tab slot="nav" panel="tab-19">Tab 19</moyo-tab>
  <moyo-tab slot="nav" panel="tab-20">Tab 20</moyo-tab>

  <moyo-tab-panel name="tab-1">Tab panel 1</moyo-tab-panel>
  <moyo-tab-panel name="tab-2">Tab panel 2</moyo-tab-panel>
  <moyo-tab-panel name="tab-3">Tab panel 3</moyo-tab-panel>
  <moyo-tab-panel name="tab-4">Tab panel 4</moyo-tab-panel>
  <moyo-tab-panel name="tab-5">Tab panel 5</moyo-tab-panel>
  <moyo-tab-panel name="tab-6">Tab panel 6</moyo-tab-panel>
  <moyo-tab-panel name="tab-7">Tab panel 7</moyo-tab-panel>
  <moyo-tab-panel name="tab-8">Tab panel 8</moyo-tab-panel>
  <moyo-tab-panel name="tab-9">Tab panel 9</moyo-tab-panel>
  <moyo-tab-panel name="tab-10">Tab panel 10</moyo-tab-panel>
  <moyo-tab-panel name="tab-11">Tab panel 11</moyo-tab-panel>
  <moyo-tab-panel name="tab-12">Tab panel 12</moyo-tab-panel>
  <moyo-tab-panel name="tab-13">Tab panel 13</moyo-tab-panel>
  <moyo-tab-panel name="tab-14">Tab panel 14</moyo-tab-panel>
  <moyo-tab-panel name="tab-15">Tab panel 15</moyo-tab-panel>
  <moyo-tab-panel name="tab-16">Tab panel 16</moyo-tab-panel>
  <moyo-tab-panel name="tab-17">Tab panel 17</moyo-tab-panel>
  <moyo-tab-panel name="tab-18">Tab panel 18</moyo-tab-panel>
  <moyo-tab-panel name="tab-19">Tab panel 19</moyo-tab-panel>
  <moyo-tab-panel name="tab-20">Tab panel 20</moyo-tab-panel>
</moyo-tab-group>
```

```jsx react
import { MoyoTab, MoyoTabGroup, MoyoTabPanel } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoTabGroup>
    <MoyoTab slot="nav" panel="tab-1">
      Tab 1
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-2">
      Tab 2
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-3">
      Tab 3
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-4">
      Tab 4
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-5">
      Tab 5
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-6">
      Tab 6
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-7">
      Tab 7
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-8">
      Tab 8
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-9">
      Tab 9
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-10">
      Tab 10
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-11">
      Tab 11
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-12">
      Tab 12
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-13">
      Tab 13
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-14">
      Tab 14
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-15">
      Tab 15
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-16">
      Tab 16
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-17">
      Tab 17
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-18">
      Tab 18
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-19">
      Tab 19
    </MoyoTab>
    <MoyoTab slot="nav" panel="tab-20">
      Tab 20
    </MoyoTab>

    <MoyoTabPanel name="tab-1">Tab panel 1</MoyoTabPanel>
    <MoyoTabPanel name="tab-2">Tab panel 2</MoyoTabPanel>
    <MoyoTabPanel name="tab-3">Tab panel 3</MoyoTabPanel>
    <MoyoTabPanel name="tab-4">Tab panel 4</MoyoTabPanel>
    <MoyoTabPanel name="tab-5">Tab panel 5</MoyoTabPanel>
    <MoyoTabPanel name="tab-6">Tab panel 6</MoyoTabPanel>
    <MoyoTabPanel name="tab-7">Tab panel 7</MoyoTabPanel>
    <MoyoTabPanel name="tab-8">Tab panel 8</MoyoTabPanel>
    <MoyoTabPanel name="tab-9">Tab panel 9</MoyoTabPanel>
    <MoyoTabPanel name="tab-10">Tab panel 10</MoyoTabPanel>
    <MoyoTabPanel name="tab-11">Tab panel 11</MoyoTabPanel>
    <MoyoTabPanel name="tab-12">Tab panel 12</MoyoTabPanel>
    <MoyoTabPanel name="tab-13">Tab panel 13</MoyoTabPanel>
    <MoyoTabPanel name="tab-14">Tab panel 14</MoyoTabPanel>
    <MoyoTabPanel name="tab-15">Tab panel 15</MoyoTabPanel>
    <MoyoTabPanel name="tab-16">Tab panel 16</MoyoTabPanel>
    <MoyoTabPanel name="tab-17">Tab panel 17</MoyoTabPanel>
    <MoyoTabPanel name="tab-18">Tab panel 18</MoyoTabPanel>
    <MoyoTabPanel name="tab-19">Tab panel 19</MoyoTabPanel>
    <MoyoTabPanel name="tab-20">Tab panel 20</MoyoTabPanel>
  </MoyoTabGroup>
);
```

### Manual Activation

When focused, keyboard users can press <kbd>Left</kbd> or <kbd>Right</kbd> to select the desired tab. By default, the corresponding tab panel will be shown immediately (automatic activation). You can change this behavior by setting `activation="manual"` which will require the user to press <kbd>Space</kbd> or <kbd>Enter</kbd> before showing the tab panel (manual activation).

```html preview
<moyo-tab-group activation="manual">
  <moyo-tab slot="nav" panel="general">General</moyo-tab>
  <moyo-tab slot="nav" panel="custom">Custom</moyo-tab>
  <moyo-tab slot="nav" panel="advanced">Advanced</moyo-tab>
  <moyo-tab slot="nav" panel="disabled" disabled>Disabled</moyo-tab>

  <moyo-tab-panel name="general">This is the general tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="custom">This is the custom tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="advanced">This is the advanced tab panel.</moyo-tab-panel>
  <moyo-tab-panel name="disabled">This is a disabled tab panel.</moyo-tab-panel>
</moyo-tab-group>
```

```jsx react
import { MoyoTab, MoyoTabGroup, MoyoTabPanel } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoTabGroup activation="manual">
    <MoyoTab slot="nav" panel="general">
      General
    </MoyoTab>
    <MoyoTab slot="nav" panel="custom">
      Custom
    </MoyoTab>
    <MoyoTab slot="nav" panel="advanced">
      Advanced
    </MoyoTab>
    <MoyoTab slot="nav" panel="disabled" disabled>
      Disabled
    </MoyoTab>

    <MoyoTabPanel name="general">This is the general tab panel.</MoyoTabPanel>
    <MoyoTabPanel name="custom">This is the custom tab panel.</MoyoTabPanel>
    <MoyoTabPanel name="advanced">This is the advanced tab panel.</MoyoTabPanel>
    <MoyoTabPanel name="disabled">This is a disabled tab panel.</MoyoTabPanel>
  </MoyoTabGroup>
);
```

[component-metadata:moyo-tab-group]
