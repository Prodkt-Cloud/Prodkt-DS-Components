# Tab Panel

[component-header:moyo-tab-panel]

Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.

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

?> Additional demonstrations can be found in the [tab group examples](/components/tab-group).

[component-metadata:moyo-tab-panel]
