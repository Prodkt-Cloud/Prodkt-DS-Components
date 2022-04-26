# Tab

[component-header:moyo-tab]

Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).

```html preview
<moyo-tab>Tab</moyo-tab>
<moyo-tab active>Active</moyo-tab>
<moyo-tab closable>Closable</moyo-tab>
<moyo-tab disabled>Disabled</moyo-tab>
```

```jsx react
import { MoyoTab } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoTab>Tab</MoyoTab>
    <MoyoTab active>Active</MoyoTab>
    <MoyoTab closable>Closable</MoyoTab>
    <MoyoTab disabled>Disabled</MoyoTab>
  </>
);
```

?> Additional demonstrations can be found in the [tab group examples](/components/tab-group).

[component-metadata:moyo-tab]
