# Tag

[component-header:moyo-tag]

Tags are used as labels to organize things or to indicate a selection.

```html preview
<moyo-tag variant="primary">Primary</moyo-tag>
<moyo-tag variant="success">Success</moyo-tag>
<moyo-tag variant="neutral">Neutral</moyo-tag>
<moyo-tag variant="warning">Warning</moyo-tag>
<moyo-tag variant="danger">Danger</moyo-tag>
```

```jsx react
import { MoyoTag } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoTag variant="primary">Primary</MoyoTag>
    <MoyoTag variant="success">Success</MoyoTag>
    <MoyoTag variant="neutral">Neutral</MoyoTag>
    <MoyoTag variant="warning">Warning</MoyoTag>
    <MoyoTag variant="danger">Danger</MoyoTag>
  </>
);
```

## Examples

### Sizes

Use the `size` attribute to change a tab's size.

```html preview
<moyo-tag size="small">Small</moyo-tag>
<moyo-tag size="medium">Medium</moyo-tag>
<moyo-tag size="large">Large</moyo-tag>
```

```jsx react
import { MoyoTag } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoTag size="small">Small</MoyoTag>
    <MoyoTag size="medium">Medium</MoyoTag>
    <MoyoTag size="large">Large</MoyoTag>
  </>
);
```

### Pill

Use the `pill` attribute to give tabs rounded edges.

```html preview
<moyo-tag size="small" pill>Small</moyo-tag>
<moyo-tag size="medium" pill>Medium</moyo-tag>
<moyo-tag size="large" pill>Large</moyo-tag>
```

```jsx react
import { MoyoTag } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoTag size="small" pill>
      Small
    </MoyoTag>
    <MoyoTag size="medium" pill>
      Medium
    </MoyoTag>
    <MoyoTag size="large" pill>
      Large
    </MoyoTag>
  </>
);
```

### Removable

Use the `removable` attribute to add a remove button to the tag.

```html preview
<div class="tags-removable">
  <moyo-tag size="small" removable>Small</moyo-tag>
  <moyo-tag size="medium" removable>Medium</moyo-tag>
  <moyo-tag size="large" removable>Large</moyo-tag>
</div>

<script>
  const div = document.querySelector('.tags-removable');

  div.addEventListener('moyo-remove', event => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-removable moyo-tag {
    transition: var(--moyo-transition-medium) opacity;
  }
</style>
```

```jsx react
import { MoyoTag } from '@tovutifunk/tovuti/dist/react';

const css = `
  .tags-removable moyo-tag {
    transition: var(--moyo-transition-medium) opacity;
  }
`;

const App = () => {
  function handleRemove(event) {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  }

  return (
    <>
      <div className="tags-removable">
        <MoyoTag size="small" removable onMoyoRemove={handleRemove}>
          Small
        </MoyoTag>

        <MoyoTag size="medium" removable onMoyoRemove={handleRemove}>
          Medium
        </MoyoTag>

        <MoyoTag size="large" removable onMoyoRemove={handleRemove}>
          Large
        </MoyoTag>
      </div>

      <style>{css}</style>
    </>
  );
};
```

[component-metadata:moyo-tag]
