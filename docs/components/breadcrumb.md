# Breadcrumb

[component-header:moyo-breadcrumb]

Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.

Breadcrumbs are usually placed before a page's main content with the current page shown last to indicate the user's position in the navigation.

```html preview
<moyo-breadcrumb>
  <moyo-breadcrumb-item>Catalog</moyo-breadcrumb-item>
  <moyo-breadcrumb-item>Courses</moyo-breadcrumb-item>
  <moyo-breadcrumb-item>Women's</moyo-breadcrumb-item>
  <moyo-breadcrumb-item>Lessons &amp; Activities</moyo-breadcrumb-item>
</moyo-breadcrumb>
```

```jsx react
import { MoyoBreadcrumb, MoyoBreadcrumbItem } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoBreadcrumb>
    <MoyoBreadcrumbItem>Catalog</MoyoBreadcrumbItem>
    <MoyoBreadcrumbItem>Courses</MoyoBreadcrumbItem>
    <MoyoBreadcrumbItem>Women's</MoyoBreadcrumbItem>
    <MoyoBreadcrumbItem>Lessons &amp; Activities</MoyoBreadcrumbItem>
  </MoyoBreadcrumb>
);
```

## Examples

### Breadcrumb Links

By default, breadcrumb items are rendered as buttons so you can use them to navigate single-page applications. In this case, you'll need to add event listeners to handle clicks.

For websites, you'll probably want to use links instead. You can make any breadcrumb item a link by applying an `href` attribute to it. Now, when the user activates it, they'll be taken to the corresponding page — no event listeners required.

```html preview
<moyo-breadcrumb>
  <moyo-breadcrumb-item href="https://example.com/home">Homepage</moyo-breadcrumb-item>

  <moyo-breadcrumb-item href="https://example.com/home/services">Our Services</moyo-breadcrumb-item>

  <moyo-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</moyo-breadcrumb-item>

  <moyo-breadcrumb-item href="https://example.com/home/services/digital/web-design">Web Design</moyo-breadcrumb-item>
</moyo-breadcrumb>
```

```jsx react
import { MoyoBreadcrumb, MoyoBreadcrumbItem } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoBreadcrumb>
    <MoyoBreadcrumbItem href="https://example.com/home">Homepage</MoyoBreadcrumbItem>

    <MoyoBreadcrumbItem href="https://example.com/home/services">Our Services</MoyoBreadcrumbItem>

    <MoyoBreadcrumbItem href="https://example.com/home/services/digital">Digital Media</MoyoBreadcrumbItem>

    <MoyoBreadcrumbItem href="https://example.com/home/services/digital/web-design">Web Design</MoyoBreadcrumbItem>
  </MoyoBreadcrumb>
);
```

### Custom Separators

Use the `separator` slot to change the separator that goes between breadcrumb items. Icons work well, but you can also use text or an image.

```html preview
<moyo-breadcrumb>
  <moyo-icon name="dot" slot="separator"></moyo-icon>
  <moyo-breadcrumb-item>First</moyo-breadcrumb-item>
  <moyo-breadcrumb-item>Second</moyo-breadcrumb-item>
  <moyo-breadcrumb-item>Third</moyo-breadcrumb-item>
</moyo-breadcrumb>

<br />

<moyo-breadcrumb>
  <moyo-icon name="arrow-right" slot="separator"></moyo-icon>
  <moyo-breadcrumb-item>First</moyo-breadcrumb-item>
  <moyo-breadcrumb-item>Second</moyo-breadcrumb-item>
  <moyo-breadcrumb-item>Third</moyo-breadcrumb-item>
</moyo-breadcrumb>

<br />

<moyo-breadcrumb>
  <span slot="separator">/</span>
  <moyo-breadcrumb-item>First</moyo-breadcrumb-item>
  <moyo-breadcrumb-item>Second</moyo-breadcrumb-item>
  <moyo-breadcrumb-item>Third</moyo-breadcrumb-item>
</moyo-breadcrumb>
```

```jsx react
import '@tovutifunk/tovuti/dist/components/icon/icon.js';
import { MoyoBreadcrumb, MoyoBreadcrumbItem } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoBreadcrumb>
      <moyo-icon name="dot" slot="separator" />
      <MoyoBreadcrumbItem>First</MoyoBreadcrumbItem>
      <MoyoBreadcrumbItem>Second</MoyoBreadcrumbItem>
      <MoyoBreadcrumbItem>Third</MoyoBreadcrumbItem>
    </MoyoBreadcrumb>

    <br />

    <MoyoBreadcrumb>
      <moyo-icon name="arrow-right" slot="separator" />
      <MoyoBreadcrumbItem>First</MoyoBreadcrumbItem>
      <MoyoBreadcrumbItem>Second</MoyoBreadcrumbItem>
      <MoyoBreadcrumbItem>Third</MoyoBreadcrumbItem>
    </MoyoBreadcrumb>

    <br />

    <MoyoBreadcrumb>
      <span slot="separator">/</span>
      <MoyoBreadcrumbItem>First</MoyoBreadcrumbItem>
      <MoyoBreadcrumbItem>Second</MoyoBreadcrumbItem>
      <MoyoBreadcrumbItem>Third</MoyoBreadcrumbItem>
    </MoyoBreadcrumb>
  </>
);
```

### Prefixes

Use the `prefix` slot to add content before any breadcrumb item.

```html preview
<moyo-breadcrumb>
  <moyo-breadcrumb-item>
    <moyo-icon slot="prefix" name="house"></moyo-icon>
    Home
  </moyo-breadcrumb-item>
  <moyo-breadcrumb-item>Articles</moyo-breadcrumb-item>
  <moyo-breadcrumb-item>Traveling</moyo-breadcrumb-item>
</moyo-breadcrumb>
```

```jsx react
import { MoyoBreadcrumb, MoyoBreadcrumbItem, MoyoIcon } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoBreadcrumb>
    <MoyoBreadcrumbItem>
      <MoyoIcon slot="prefix" name="house" />
      Home
    </MoyoBreadcrumbItem>
    <MoyoBreadcrumbItem>Articles</MoyoBreadcrumbItem>
    <MoyoBreadcrumbItem>Traveling</MoyoBreadcrumbItem>
  </MoyoBreadcrumb>
);
```

### Suffixes

Use the `suffix` slot to add content after any breadcrumb item.

```html preview
<moyo-breadcrumb>
  <moyo-breadcrumb-item>Documents</moyo-breadcrumb-item>
  <moyo-breadcrumb-item>Policies</moyo-breadcrumb-item>
  <moyo-breadcrumb-item>
    Security
    <moyo-icon slot="suffix" name="shield-lock"></moyo-icon>
  </moyo-breadcrumb-item>
</moyo-breadcrumb>
```

```jsx react
import { MoyoBreadcrumb, MoyoBreadcrumbItem, MoyoIcon } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoBreadcrumb>
    <MoyoBreadcrumbItem>Documents</MoyoBreadcrumbItem>
    <MoyoBreadcrumbItem>Policies</MoyoBreadcrumbItem>
    <MoyoBreadcrumbItem>
      Security
      <MoyoIcon slot="suffix" name="shield-lock"></MoyoIcon>
    </MoyoBreadcrumbItem>
  </MoyoBreadcrumb>
);
```

### With Dropdowns

Dropdown menus can be placed in a prefix or suffix slot to provide additional options.

```html preview
<moyo-breadcrumb>
  <moyo-breadcrumb-item>Homepage</moyo-breadcrumb-item>
  <moyo-breadcrumb-item>Our Services</moyo-breadcrumb-item>
  <moyo-breadcrumb-item>Digital Media</moyo-breadcrumb-item>
  <moyo-breadcrumb-item>
    Web Design
    <moyo-dropdown slot="suffix">
      <moyo-button slot="trigger" size="small" circle>
        <moyo-icon label="More options" name="three-dots"></moyo-icon>
      </moyo-button>
      <moyo-menu>
        <moyo-menu-item checked>Web Design</moyo-menu-item>
        <moyo-menu-item>Web Development</moyo-menu-item>
        <moyo-menu-item>Marketing</moyo-menu-item>
      </moyo-menu>
    </moyo-dropdown>
  </moyo-breadcrumb-item>
</moyo-breadcrumb>
```

```jsx react
import {
  MoyoBreadcrumb,
  MoyoBreadcrumbItem,
  MoyoButton,
  MoyoDropdown,
  MoyoIcon,
  MoyoMenu,
  MoyoMenuItem
} from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoBreadcrumb>
    <MoyoBreadcrumbItem>Homepage</MoyoBreadcrumbItem>
    <MoyoBreadcrumbItem>Our Services</MoyoBreadcrumbItem>
    <MoyoBreadcrumbItem>Digital Media</MoyoBreadcrumbItem>
    <MoyoBreadcrumbItem>
      Web Design
      <MoyoDropdown slot="suffix">
        <MoyoButton slot="trigger" size="small" circle>
          <MoyoIcon label="More options" name="three-dots"></MoyoIcon>
        </MoyoButton>
        <MoyoMenu>
          <MoyoMenuItem checked>Web Design</MoyoMenuItem>
          <MoyoMenuItem>Web Development</MoyoMenuItem>
          <MoyoMenuItem>Marketing</MoyoMenuItem>
        </MoyoMenu>
      </MoyoDropdown>
    </MoyoBreadcrumbItem>
  </MoyoBreadcrumb>
);
```

[component-metadata:moyo-breadcrumb]
