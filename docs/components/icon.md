# Icon

[component-header:moyo-icon]

Icons are symbols that can be used to represent various options within an application.

Tovuti comes bundled with over 1,500 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These icons are part of the `default` icon library. If you prefer, you can register [custom icon libraries](#icon-libraries) as well.

Click or tap on an icon below to copy its name and use it like this.

```html
<moyo-icon name="icon-name-here"></moyo-icon>
```

<div class="icon-search">
  <div class="icon-search-controls">
    <moyo-input placeholder="Search Icons" clearable>
      <moyo-icon slot="prefix" name="search"></moyo-icon>
    </moyo-input>
    <moyo-select value="outline">
      <moyo-menu-item value="outline">Outlined</moyo-menu-item>
      <moyo-menu-item value="fill">Filled</moyo-menu-item>
      <moyo-menu-item value="all">All icons</moyo-menu-item>
    </moyo-select>
  </div>
  <div class="icon-list"></div>
  <input type="text" class="icon-copy-input" aria-hidden="true" tabindex="-1">
</div>

## Examples

### Colors

Icons inherit their color from the current text color. Thus, you can set the `color` property on the `<moyo-icon>` element or an ancestor to change the color.

```html preview
<div style="color: #4a90e2;">
  <moyo-icon name="exclamation-triangle"></moyo-icon>
  <moyo-icon name="archive"></moyo-icon>
  <moyo-icon name="battery-charging"></moyo-icon>
  <moyo-icon name="bell"></moyo-icon>
</div>
<div style="color: #9013fe;">
  <moyo-icon name="clock"></moyo-icon>
  <moyo-icon name="cloud"></moyo-icon>
  <moyo-icon name="download"></moyo-icon>
  <moyo-icon name="file-earmark"></moyo-icon>
</div>
<div style="color: #417505;">
  <moyo-icon name="flag"></moyo-icon>
  <moyo-icon name="heart"></moyo-icon>
  <moyo-icon name="image"></moyo-icon>
  <moyo-icon name="lightning"></moyo-icon>
</div>
<div style="color: #f5a623;">
  <moyo-icon name="mic"></moyo-icon>
  <moyo-icon name="search"></moyo-icon>
  <moyo-icon name="star"></moyo-icon>
  <moyo-icon name="trash"></moyo-icon>
</div>
```

```jsx react
import { MoyoIcon } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <div style={{ color: '#4a90e2' }}>
      <MoyoIcon name="exclamation-triangle"></MoyoIcon>
      <MoyoIcon name="archive"></MoyoIcon>
      <MoyoIcon name="battery-charging"></MoyoIcon>
      <MoyoIcon name="bell"></MoyoIcon>
    </div>
    <div style={{ color: '#9013fe' }}>
      <MoyoIcon name="clock"></MoyoIcon>
      <MoyoIcon name="cloud"></MoyoIcon>
      <MoyoIcon name="download"></MoyoIcon>
      <MoyoIcon name="file-earmark"></MoyoIcon>
    </div>
    <div style={{ color: '#417505' }}>
      <MoyoIcon name="flag"></MoyoIcon>
      <MoyoIcon name="heart"></MoyoIcon>
      <MoyoIcon name="image"></MoyoIcon>
      <MoyoIcon name="lightning"></MoyoIcon>
    </div>
    <div style={{ color: '#f5a623' }}>
      <MoyoIcon name="mic"></MoyoIcon>
      <MoyoIcon name="search"></MoyoIcon>
      <MoyoIcon name="star"></MoyoIcon>
      <MoyoIcon name="trash"></MoyoIcon>
    </div>
  </>
);
```

### Sizing

Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element as shown below.

```html preview
<div style="font-size: 32px;">
  <moyo-icon name="exclamation-triangle"></moyo-icon>
  <moyo-icon name="archive"></moyo-icon>
  <moyo-icon name="battery-charging"></moyo-icon>
  <moyo-icon name="bell"></moyo-icon>
  <moyo-icon name="clock"></moyo-icon>
  <moyo-icon name="cloud"></moyo-icon>
  <moyo-icon name="download"></moyo-icon>
  <moyo-icon name="file-earmark"></moyo-icon>
  <moyo-icon name="flag"></moyo-icon>
  <moyo-icon name="heart"></moyo-icon>
  <moyo-icon name="image"></moyo-icon>
  <moyo-icon name="lightning"></moyo-icon>
  <moyo-icon name="mic"></moyo-icon>
  <moyo-icon name="search"></moyo-icon>
  <moyo-icon name="star"></moyo-icon>
  <moyo-icon name="trash"></moyo-icon>
</div>
```

```jsx react
import { MoyoIcon } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <div style={{ fontSize: '32px' }}>
    <MoyoIcon name="exclamation-triangle" />
    <MoyoIcon name="archive" />
    <MoyoIcon name="battery-charging" />
    <MoyoIcon name="bell" />
    <MoyoIcon name="clock" />
    <MoyoIcon name="cloud" />
    <MoyoIcon name="download" />
    <MoyoIcon name="file-earmark" />
    <MoyoIcon name="flag" />
    <MoyoIcon name="heart" />
    <MoyoIcon name="image" />
    <MoyoIcon name="lightning" />
    <MoyoIcon name="mic" />
    <MoyoIcon name="search" />
    <MoyoIcon name="star" />
    <MoyoIcon name="trash" />
  </div>
);
```

### Labels

For non-decorative icons, use the `label` attribute to announce it to assistive devices.

```html preview
<moyo-icon name="star-fill" label="Add to favorites"></moyo-icon>
```

```jsx react
import { MoyoIcon } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoIcon name="star-fill" label="Add to favorites" />;
```

### Custom Icons

Custom icons can be loaded individually with the `src` attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon, it might make sense to register a [custom icon library](#icon-libraries).

```html preview
<moyo-icon src="https://prodkt.cloud/assets/images/shoe.svg" style="font-size: 8rem;"></moyo-icon>
```

```jsx react
import { MoyoIcon } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoIcon src="https://prodkt.cloud/assets/images/shoe.svg" style={{ fontSize: '8rem' }}></MoyoIcon>;
```

## Icon Libraries

You can register additional icons to use with the `<moyo-icon>` component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.

Tovuti ships with two built-in icon libraries, `default` and `system`. The [default icon library](#customizing-the-default-library) contains all of the icons in the Bootstrap Icons project. The [system icon library](#customizing-the-system-library) contains only a small subset of icons that are used internally by Tovuti components.

To register an additional icon library, use the `registerIconLibrary()` function that's exported from `utilities/icon-library.js`. At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists. Refer to the examples below to better understand how it works.

If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via `currentColor`, so you may need to apply `fill="currentColor` or `stroke="currentColor"` to the SVG element using this function.

Here's an example that registers an icon library located in the `/assets/icons` directory.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('my-icons', {
    resolver: name => `/assets/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

To display an icon, set the `library` and `name` attributes of an `<moyo-icon>` element.

```html
<!-- This will show the icon located at /assets/icons/smile.svg -->
<moyo-icon library="my-icons" name="smile"></moyo-icon>
```

If an icon is used before registration occurs, it will be empty initially but shown when registered.

The following examples demonstrate how to register a number of popular, open source icon libraries via CDN. Feel free to adapt the code as you see fit to use your own origin or naming conventions.

### Boxicons

This will register the [Boxicons](https://boxicons.com/) library using the jsDelivr CDN. This library has three variations: regular (`bx-*`), solid (`bxs-*`), and logos (`bxl-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Creative Commons 4.0 License](https://github.com/atisawd/boxicons#license).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('boxicons', {
    resolver: name => {
      let folder = 'regular';
      if (name.substring(0, 4) === 'bxs-') folder = 'solid';
      if (name.substring(0, 4) === 'bxl-') folder = 'logos';
      return `https://cdn.jsdelivr.net/npm/boxicons@2.0.5/svg/${folder}/${name}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <moyo-icon library="boxicons" name="bx-bot"></moyo-icon>
  <moyo-icon library="boxicons" name="bx-cookie"></moyo-icon>
  <moyo-icon library="boxicons" name="bx-joystick"></moyo-icon>
  <moyo-icon library="boxicons" name="bx-save"></moyo-icon>
  <moyo-icon library="boxicons" name="bx-server"></moyo-icon>
  <moyo-icon library="boxicons" name="bx-wine"></moyo-icon>
  <br />
  <moyo-icon library="boxicons" name="bxs-bot"></moyo-icon>
  <moyo-icon library="boxicons" name="bxs-cookie"></moyo-icon>
  <moyo-icon library="boxicons" name="bxs-joystick"></moyo-icon>
  <moyo-icon library="boxicons" name="bxs-save"></moyo-icon>
  <moyo-icon library="boxicons" name="bxs-server"></moyo-icon>
  <moyo-icon library="boxicons" name="bxs-wine"></moyo-icon>
  <br />
  <moyo-icon library="boxicons" name="bxl-apple"></moyo-icon>
  <moyo-icon library="boxicons" name="bxl-chrome"></moyo-icon>
  <moyo-icon library="boxicons" name="bxl-edge"></moyo-icon>
  <moyo-icon library="boxicons" name="bxl-firefox"></moyo-icon>
  <moyo-icon library="boxicons" name="bxl-opera"></moyo-icon>
  <moyo-icon library="boxicons" name="bxl-microsoft"></moyo-icon>
</div>
```

### Lucide

This will register the [Lucide](https://lucide.dev/) icon library using the jsDelivr CDN. This project is a community-maintained fork of the popular [Feather](https://feathericons.com/) icon library.

Icons in this library are licensed under the [MIT License](https://github.com/lucide-icons/lucide/blob/master/LICENSE).

```html preview
<div style="font-size: 24px;">
  <moyo-icon library="lucide" name="feather"></moyo-icon>
  <moyo-icon library="lucide" name="pie-chart"></moyo-icon>
  <moyo-icon library="lucide" name="settings"></moyo-icon>
  <moyo-icon library="lucide" name="map-pin"></moyo-icon>
  <moyo-icon library="lucide" name="printer"></moyo-icon>
  <moyo-icon library="lucide" name="shopping-cart"></moyo-icon>
</div>

<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('lucide', {
    resolver: name => `https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/${name}.svg`
  });
</script>
```

### Font Awesome

This will register the [Font Awesome Free](https://fontawesome.com/) library using the jsDelivr CDN. This library has three variations: regular (`far-*`), solid (`fas-*`), and brands (`fab-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Font Awesome Free License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt). Some of the icons that appear on the Font Awesome website require a license and are therefore not available in the CDN.

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('fa', {
    resolver: name => {
      const filename = name.replace(/^fa[rbs]-/, '');
      let folder = 'regular';
      if (name.substring(0, 4) === 'fas-') folder = 'solid';
      if (name.substring(0, 4) === 'fab-') folder = 'brands';
      return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${folder}/${filename}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <moyo-icon library="fa" name="far-bell"></moyo-icon>
  <moyo-icon library="fa" name="far-comment"></moyo-icon>
  <moyo-icon library="fa" name="far-hand-point-right"></moyo-icon>
  <moyo-icon library="fa" name="far-hdd"></moyo-icon>
  <moyo-icon library="fa" name="far-heart"></moyo-icon>
  <moyo-icon library="fa" name="far-star"></moyo-icon>
  <br />
  <moyo-icon library="fa" name="fas-archive"></moyo-icon>
  <moyo-icon library="fa" name="fas-book"></moyo-icon>
  <moyo-icon library="fa" name="fas-chess-knight"></moyo-icon>
  <moyo-icon library="fa" name="fas-dice"></moyo-icon>
  <moyo-icon library="fa" name="fas-pizza-slice"></moyo-icon>
  <moyo-icon library="fa" name="fas-scroll"></moyo-icon>
  <br />
  <moyo-icon library="fa" name="fab-apple"></moyo-icon>
  <moyo-icon library="fa" name="fab-chrome"></moyo-icon>
  <moyo-icon library="fa" name="fab-edge"></moyo-icon>
  <moyo-icon library="fa" name="fab-firefox"></moyo-icon>
  <moyo-icon library="fa" name="fab-opera"></moyo-icon>
  <moyo-icon library="fa" name="fab-microsoft"></moyo-icon>
</div>
```

### Heroicons

This will register the [Heroicons](https://heroicons.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('heroicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/heroicons@0.4.2/outline/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <moyo-icon library="heroicons" name="chat"></moyo-icon>
  <moyo-icon library="heroicons" name="cloud"></moyo-icon>
  <moyo-icon library="heroicons" name="cog"></moyo-icon>
  <moyo-icon library="heroicons" name="document-text"></moyo-icon>
  <moyo-icon library="heroicons" name="gift"></moyo-icon>
  <moyo-icon library="heroicons" name="volume-up"></moyo-icon>
</div>
```

### Iconoir

This will register the [Iconoir](https://iconoir.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/lucaburgio/iconoir/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('iconoir', {
    resolver: name => `https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@latest/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <moyo-icon library="iconoir" name="check-circled-outline"></moyo-icon>
  <moyo-icon library="iconoir" name="drawer"></moyo-icon>
  <moyo-icon library="iconoir" name="keyframes"></moyo-icon>
  <moyo-icon library="iconoir" name="headset-help"></moyo-icon>
  <moyo-icon library="iconoir" name="color-picker"></moyo-icon>
  <moyo-icon library="iconoir" name="wifi"></moyo-icon>
</div>
```

### Ionicons

This will register the [Ionicons](https://ionicons.com/) library using the jsDelivr CDN. This library has three variations: outline (default), filled (`*-filled`), and sharp (`*-sharp`). A mutator function is required to polyfill a handful of styles we're not including.

Icons in this library are licensed under the [MIT License](https://github.com/ionic-team/ionicons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('ionicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${name}.svg`,
    mutator: svg => {
      svg.setAttribute('fill', 'currentColor');
      svg.setAttribute('stroke', 'currentColor');
      [...svg.querySelectorAll('.ionicon-fill-none')].map(el => el.setAttribute('fill', 'none'));
      [...svg.querySelectorAll('.ionicon-stroke-width')].map(el => el.setAttribute('stroke-width', '32px'));
    }
  });
</script>

<div style="font-size: 24px;">
  <moyo-icon library="ionicons" name="alarm"></moyo-icon>
  <moyo-icon library="ionicons" name="american-football"></moyo-icon>
  <moyo-icon library="ionicons" name="bug"></moyo-icon>
  <moyo-icon library="ionicons" name="chatbubble"></moyo-icon>
  <moyo-icon library="ionicons" name="settings"></moyo-icon>
  <moyo-icon library="ionicons" name="warning"></moyo-icon>
  <br />
  <moyo-icon library="ionicons" name="alarm-outline"></moyo-icon>
  <moyo-icon library="ionicons" name="american-football-outline"></moyo-icon>
  <moyo-icon library="ionicons" name="bug-outline"></moyo-icon>
  <moyo-icon library="ionicons" name="chatbubble-outline"></moyo-icon>
  <moyo-icon library="ionicons" name="settings-outline"></moyo-icon>
  <moyo-icon library="ionicons" name="warning-outline"></moyo-icon>
  <br />
  <moyo-icon library="ionicons" name="alarm-sharp"></moyo-icon>
  <moyo-icon library="ionicons" name="american-football-sharp"></moyo-icon>
  <moyo-icon library="ionicons" name="bug-sharp"></moyo-icon>
  <moyo-icon library="ionicons" name="chatbubble-sharp"></moyo-icon>
  <moyo-icon library="ionicons" name="settings-sharp"></moyo-icon>
  <moyo-icon library="ionicons" name="warning-sharp"></moyo-icon>
</div>
```

### Jam Icons

This will register the [Jam Icons](https://jam-icons.com/) library using the jsDelivr CDN. This library has two variations: regular (default) and filled (`*-f`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [MIT License](https://github.com/michaelampr/jam/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('jam', {
    resolver: name => `https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <moyo-icon library="jam" name="calendar"></moyo-icon>
  <moyo-icon library="jam" name="camera"></moyo-icon>
  <moyo-icon library="jam" name="filter"></moyo-icon>
  <moyo-icon library="jam" name="leaf"></moyo-icon>
  <moyo-icon library="jam" name="picture"></moyo-icon>
  <moyo-icon library="jam" name="set-square"></moyo-icon>
  <br />
  <moyo-icon library="jam" name="calendar-f"></moyo-icon>
  <moyo-icon library="jam" name="camera-f"></moyo-icon>
  <moyo-icon library="jam" name="filter-f"></moyo-icon>
  <moyo-icon library="jam" name="leaf-f"></moyo-icon>
  <moyo-icon library="jam" name="picture-f"></moyo-icon>
  <moyo-icon library="jam" name="set-square-f"></moyo-icon>
</div>
```

### Material Icons

This will register the [Material Icons](https://material.io/resources/icons/?style=baseline) library using the jsDelivr CDN. This library has three variations: outline (default), round (`*_round`), and sharp (`*_sharp`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/google/material-design-icons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('material', {
    resolver: name => {
      const match = name.match(/^(.*?)(_(round|sharp))?$/);
      return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'outline'}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <moyo-icon library="material" name="notifications"></moyo-icon>
  <moyo-icon library="material" name="email"></moyo-icon>
  <moyo-icon library="material" name="delete"></moyo-icon>
  <moyo-icon library="material" name="volume_up"></moyo-icon>
  <moyo-icon library="material" name="settings"></moyo-icon>
  <moyo-icon library="material" name="shopping_basket"></moyo-icon>
  <br />
  <moyo-icon library="material" name="notifications_round"></moyo-icon>
  <moyo-icon library="material" name="email_round"></moyo-icon>
  <moyo-icon library="material" name="delete_round"></moyo-icon>
  <moyo-icon library="material" name="volume_up_round"></moyo-icon>
  <moyo-icon library="material" name="settings_round"></moyo-icon>
  <moyo-icon library="material" name="shopping_basket_round"></moyo-icon>
  <br />
  <moyo-icon library="material" name="notifications_sharp"></moyo-icon>
  <moyo-icon library="material" name="email_sharp"></moyo-icon>
  <moyo-icon library="material" name="delete_sharp"></moyo-icon>
  <moyo-icon library="material" name="volume_up_sharp"></moyo-icon>
  <moyo-icon library="material" name="settings_sharp"></moyo-icon>
  <moyo-icon library="material" name="shopping_basket_sharp"></moyo-icon>
</div>
```

### Remix Icon

This will register the [Remix Icon](https://remixicon.com/) library using the jsDelivr CDN. This library groups icons by categories, so the name must include the category and icon separated by a slash, as well as the `-line` or `-fill` suffix as needed. A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Remix-Design/RemixIcon/blob/master/License).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('remixicon', {
    resolver: name => {
      const match = name.match(/^(.*?)\/(.*?)?$/);
      match[1] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
      return `https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/${match[1]}/${match[2]}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <moyo-icon library="remixicon" name="business/cloud-line"></moyo-icon>
  <moyo-icon library="remixicon" name="design/brush-line"></moyo-icon>
  <moyo-icon library="remixicon" name="business/pie-chart-line"></moyo-icon>
  <moyo-icon library="remixicon" name="development/bug-line"></moyo-icon>
  <moyo-icon library="remixicon" name="media/image-line"></moyo-icon>
  <moyo-icon library="remixicon" name="system/alert-line"></moyo-icon>
  <br />
  <moyo-icon library="remixicon" name="business/cloud-fill"></moyo-icon>
  <moyo-icon library="remixicon" name="design/brush-fill"></moyo-icon>
  <moyo-icon library="remixicon" name="business/pie-chart-fill"></moyo-icon>
  <moyo-icon library="remixicon" name="development/bug-fill"></moyo-icon>
  <moyo-icon library="remixicon" name="media/image-fill"></moyo-icon>
  <moyo-icon library="remixicon" name="system/alert-fill"></moyo-icon>
</div>
```

### Unicons

This will register the [Unicons](https://iconscout.com/unicons) library using the jsDelivr CDN. This library has two variations: line (default) and solid (`*-s`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Iconscout/unicons/blob/master/LICENSE). Some of the icons that appear on the Unicons website, particularly many of the solid variations, require a license and are therefore not available in the CDN.

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('unicons', {
    resolver: name => {
      const match = name.match(/^(.*?)(-s)?$/);
      return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.3/svg/${match[2] === '-s' ? 'solid' : 'line'}/${
        match[1]
      }.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <moyo-icon library="unicons" name="clock"></moyo-icon>
  <moyo-icon library="unicons" name="graph-bar"></moyo-icon>
  <moyo-icon library="unicons" name="padlock"></moyo-icon>
  <moyo-icon library="unicons" name="polygon"></moyo-icon>
  <moyo-icon library="unicons" name="rocket"></moyo-icon>
  <moyo-icon library="unicons" name="star"></moyo-icon>
  <br />
  <moyo-icon library="unicons" name="clock-s"></moyo-icon>
  <moyo-icon library="unicons" name="graph-bar-s"></moyo-icon>
  <moyo-icon library="unicons" name="padlock-s"></moyo-icon>
  <moyo-icon library="unicons" name="polygon-s"></moyo-icon>
  <moyo-icon library="unicons" name="rocket-s"></moyo-icon>
  <moyo-icon library="unicons" name="star-s"></moyo-icon>
</div>
```

### Customizing the Default Library

The default icon library contains over 1,300 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These are the icons that display when you use `<moyo-icon>` without the `library` attribute. If you prefer to have these icons resolve elsewhere or to a different icon library, register an icon library using the `default` name and a custom resolver.

This example will load the same set of icons from the jsDelivr CDN instead of your local assets folder.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('default', {
    resolver: name => `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.0.0/icons/${name}.svg`
  });
</script>
```

### Customizing the System Library

The system library contains only the icons used internally by Tovuti components. Unlike the default icon library, the system library does not rely on physical assets. Instead, its icons are hard-coded as data URIs into the resolver to ensure their availability.

If you want to change the icons Tovuti uses internally, you can register an icon library using the `system` name and a custom resolver. If you choose to do this, it's your responsibility to provide all of the icons that are required by components. You can reference `src/components/library.system.ts` for a complete list of system icons used by Tovuti.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('system', {
    resolver: name => `/path/to/custom/icons/${name}.svg`
  });
</script>
```

<!-- Supporting scripts and styles for the search utility -->
<script>
  fetch('/dist/assets/icons/icons.json')
    .then(res => res.json())  
    .then(icons => {
      const container = document.querySelector('.icon-search');
      const input = container.querySelector('moyo-input');
      const select = container.querySelector('moyo-select');
      const copyInput = container.querySelector('.icon-copy-input');
      const loader = container.querySelector('.icon-loader');
      const list = container.querySelector('.icon-list');
      const queue = [];
      let inputTimeout;

      // Generate icons
      icons.map(i => {
        const item = document.createElement('div');
        item.classList.add('icon-list-item');
        item.setAttribute('data-name', i.name);
        item.setAttribute('data-terms', [i.name, i.title, ...(i.tags || []), ...(i.categories || [])].join(' '));
        item.innerHTML = `
          <svg width="1em" height="1em" fill="currentColor">
            <use xlink:href="/assets/icons/sprite.svg#${i.name}"></use>
          </svg>      
        `;

        const tooltip = document.createElement('moyo-tooltip');
        tooltip.content = i.name;
        
        tooltip.appendChild(item);
        list.appendChild(tooltip);

        item.addEventListener('click', () => {
          copyInput.value = i.name;
          copyInput.select();
          document.execCommand('copy');
          tooltip.content = 'Copied!';
          setTimeout(() => tooltip.content = i.name, 1000);
        });
      });

      // Filter as the user types
      input.addEventListener('moyo-input', () => {
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(() => {
          [...list.querySelectorAll('.icon-list-item')].map(item => {
            const filter = input.value.toLowerCase();
            if (filter === '') {
              item.hidden = false;
            } else {
              const terms = item.getAttribute('data-terms').toLowerCase();
              item.hidden = terms.indexOf(filter) < 0;
            }
          });
        }, 250);
      });

      // Sort by type and remember preference
      const iconType = localStorage.getItem('moyo-icon:type') || 'outline';
      select.value = iconType;
      list.setAttribute('data-type', select.value);
      select.addEventListener('moyo-change', () => {
        list.setAttribute('data-type', select.value);
        localStorage.setItem('moyo-icon:type', select.value);
      });
    });
</script>

<style>
  .icon-search {
    border: solid 1px var(--moyo-panel-border-color);
    border-radius: var(--moyo-border-radius-medium);
    padding: var(--moyo-spacing-medium);
  }

  .icon-search [hidden] {
    display: none;
  }

  .icon-search-controls {
    display: flex;
  }

  .icon-search-controls moyo-input {
    flex: 1 1 auto;
  }

  .icon-search-controls moyo-select {
    width: 10rem;
    flex: 0 0 auto;
    margin-left: 1rem;
  }

  .icon-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
  }

  .icon-list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    margin-top: 1rem;
  }

  .icon-loader[hidden],
  .icon-list[hidden] {
    display: none;
  }

  .icon-list-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--moyo-border-radius-medium);
    font-size: 24px;
    width: 2em;
    height: 2em;
    margin: 0 auto;
    cursor: copy;
    transition: var(--moyo-transition-medium) all;
  }

  .icon-list-item:hover {
    background-color: var(--moyo-color-primary-50);
    color: var(--moyo-color-primary-600);
  }

  .icon-list[data-type="outline"] .icon-list-item[data-name$="-fill"] {
    display: none;
  }

  .icon-list[data-type="fill"] .icon-list-item:not([data-name$="-fill"]) {
    display: none;
  }

  .icon-copy-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 1000px) {
    .icon-list {
      grid-template-columns: repeat(8, 1fr);
    }

    .icon-list-item {
      font-size: 20px;
    }

    .icon-search-controls {
      display: block;
    }

    .icon-search-controls moyo-select {
      width: auto;
      margin: 1rem 0 0 0;
    }
  }

  @media screen and (max-width: 500px) {
    .icon-list {
      grid-template-columns: repeat(4, 1fr);
    }    
  }
</style>

[component-metadata:moyo-icon]
