# Visually Hidden

[component-header:moyo-visually-hidden]

The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.

According to [The A11Y Project](https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/), "there are real world situations where visually hiding content may be appropriate, while the content should remain available to assistive technologies, such as screen readers. For instance, hiding a search field's label as a common magnifying glass icon is used in its stead."

Since visually hidden content can receive focus when tabbing, the element will become visible when something inside receives focus. This behavior is intentional, as sighted keyboards user won't be able to determine where the focus indicator is without it.

```html preview
<div style="min-height: 100px;">
  <moyo-visually-hidden>
    <a href="#">Skip to main content</a>
  </moyo-visually-hidden>
</div>
```

## Examples

### Links That Open in New Windows

In this example, the link will open a new window. Screen readers will announce "opens in a new window" even though the text content isn't visible to sighted users.

```html preview
<a href="https://example.com/" target="_blank">
  Visit External Page
  <moyo-icon name="box-arrow-up-right"></moyo-icon>
  <moyo-visually-hidden>opens in a new window</moyo-visually-hidden>
</a>
```

### Content Conveyed By Context

Adding a title or label may seem redundant at times, but they're very helpful for unsighted users. Rather than omit them, you can provide context to unsighted users with visually hidden content.

```html preview
<moyo-card style="width: 100%; max-width: 360px;">
  <header>
    <moyo-visually-hidden>Personal Info</moyo-visually-hidden>
  </header>
  <moyo-input label="Name" style="margin-bottom: .5rem;"></moyo-input>
  <moyo-input label="Email" type="email"></moyo-input>
</moyo-card>
```

[component-metadata:moyo-visually-hidden]
