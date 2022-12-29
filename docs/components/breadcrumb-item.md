# Breadcrumb Item

[component-header:moyo-breadcrumb-item]

Breadcrumb Items are used inside [breadcrumbs](/components/breadcrumb) to represent different links.

```html preview
<moyo-breadcrumb>
  <moyo-breadcrumb-item>
    <moyo-icon slot="prefix" name="house"></moyo-icon>
    Home
  </moyo-breadcrumb-item>
  <moyo-breadcrumb-item>Courses</moyo-breadcrumb-item>
  <moyo-breadcrumb-item>Lessons</moyo-breadcrumb-item>
</moyo-breadcrumb>
```

```jsx react
import { MoyoBreadcrumb, MoyoBreadcrumbItem, MoyoIcon } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoBreadcrumb>
    <MoyoBreadcrumbItem>
      <MoyoIcon slot="prefix" name="house"></MoyoIcon>
      Home
    </MoyoBreadcrumbItem>
    <MoyoBreadcrumbItem>Courses</MoyoBreadcrumbItem>
    <MoyoBreadcrumbItem>Lessons</MoyoBreadcrumbItem>
  </MoyoBreadcrumb>
);
```

?> Additional demonstrations can be found in the [breadcrumb examples](/components/breadcrumb).

[component-metadata:moyo-breadcrumb-item]
