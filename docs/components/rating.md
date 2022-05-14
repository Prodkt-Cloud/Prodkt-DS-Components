# Rating

[component-header:moyo-rating]

Ratings give users a way to quickly view and provide feedback.

```html preview
<moyo-rating></moyo-rating>
```

```jsx react
import { MoyoRating } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoRating />;
```

## Examples

### Maximum Value

Ratings are 0-5 by default. To change the maximum possible value, use the `max` attribute.

```html preview
<moyo-rating max="3"></moyo-rating>
```

```jsx react
import { MoyoRating } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoRating max={3} />;
```

### Precision

Use the `precision` attribute to let users select fractional ratings.

```html preview
<moyo-rating precision="0.5" value="2.5"></moyo-rating>
```

```jsx react
import { MoyoRating } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoRating precision={0.5} value={2.5} />;
```

## Symbol Sizes

Set the `--symbol-size` custom property to adjust the size.

```html preview
<moyo-rating style="--symbol-size: 2rem;"></moyo-rating>
```

```jsx react
import { MoyoRating } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoRating style={{ '--symbol-size': '2rem' }} />;
```

### Readonly

Use the `readonly` attribute to display a rating that users can't change.

```html preview
<moyo-rating readonly value="3"></moyo-rating>
```

```jsx react
import { MoyoRating } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoRating readonly value={3} />;
```

### Disabled

Use the `disable` attribute to disable the rating.

```html preview
<moyo-rating disabled value="3"></moyo-rating>
```

```jsx react
import { MoyoRating } from '@tovutifunk/tovuti/dist/react';

const App = () => <MoyoRating disabled value={3} />;
```

### Custom Icons

You can provide custom icons by passing a function to the `getSymbol` property.

```html preview
<moyo-rating class="rating-hearts" style="--symbol-color-active: #ff4136;"></moyo-rating>

<script>
  const rating = document.querySelector('.rating-hearts');
  rating.getSymbol = () => '<moyo-icon name="heart-fill"></moyo-icon>';
</script>
```

```jsx react
import '@tovutifunk/tovuti/dist/components/icon/icon';
import { MoyoRating } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoRating
    getSymbol={() => '<moyo-icon name="heart-fill"></moyo-icon>'}
    style={{ '--symbol-color-active': '#ff4136' }}
  />
);
```

### Value-based Icons

You can also use the `getSymbol` property to render different icons based on value.

```html preview
<moyo-rating class="rating-emojis"></moyo-rating>

<script>
  const rating = document.querySelector('.rating-emojis');

  rating.getSymbol = value => {
    const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
    return `<moyo-icon name="${icons[value - 1]}"></moyo-icon>`;
  };
</script>
```

```jsx react
import '@tovutifunk/tovuti/dist/components/icon/icon';
import { MoyoRating } from '@tovutifunk/tovuti/dist/react';

function getSymbol(value) {
  const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
  return `<moyo-icon name="${icons[value - 1]}"></moyo-icon>`;
}

const App = () => <MoyoRating getSymbol={getSymbol} />;
```

[component-metadata:moyo-rating]
