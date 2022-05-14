# Alert

[component-header:moyo-alert]

Alerts are used to display important messages inline or as toast notifications.

```html preview
<moyo-alert open>
  <moyo-icon slot="icon" name="info-circle"></moyo-icon>
  This is a standard alert. You can customize its content and even the icon.
</moyo-alert>
```

```jsx react
import { MoyoAlert, MoyoIcon } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoAlert open>
    <MoyoIcon slot="icon" name="info-circle" />
    This is a standard alert. You can customize its content and even the icon.
  </MoyoAlert>
);
```

?> Alerts will not be visible if the `open` attribute is not present.

## Examples

### Variants

Set the `variant` attribute to change the alert's variant.

```html preview
<moyo-alert variant="primary" open>
  <moyo-icon slot="icon" name="info-circle"></moyo-icon>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</moyo-alert>

<br />

<moyo-alert variant="success" open>
  <moyo-icon slot="icon" name="check2-circle"></moyo-icon>
  <strong>Your changes have been saved</strong><br />
  You can safely exit the app now.
</moyo-alert>

<br />

<moyo-alert variant="neutral" open>
  <moyo-icon slot="icon" name="gear"></moyo-icon>
  <strong>Your settings have been updated</strong><br />
  Settings will take affect on next login.
</moyo-alert>

<br />

<moyo-alert variant="warning" open>
  <moyo-icon slot="icon" name="exclamation-triangle"></moyo-icon>
  <strong>Your session has ended</strong><br />
  Please login again to continue.
</moyo-alert>

<br />

<moyo-alert variant="danger" open>
  <moyo-icon slot="icon" name="exclamation-octagon"></moyo-icon>
  <strong>Your account has been deleted</strong><br />
  We're very sorry to see you go!
</moyo-alert>
```

```jsx react
import { MoyoAlert, MoyoIcon } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <>
    <MoyoAlert variant="primary" open>
      <MoyoIcon slot="icon" name="info-circle" />
      <strong>This is super informative</strong>
      <br />
      You can tell by how pretty the alert is.
    </MoyoAlert>

    <br />

    <MoyoAlert variant="success" open>
      <MoyoIcon slot="icon" name="check2-circle" />
      <strong>Your changes have been saved</strong>
      <br />
      You can safely exit the app now.
    </MoyoAlert>

    <br />

    <MoyoAlert variant="neutral" open>
      <MoyoIcon slot="icon" name="gear" />
      <strong>Your settings have been updated</strong>
      <br />
      Settings will take affect on next login.
    </MoyoAlert>

    <br />

    <MoyoAlert variant="warning" open>
      <MoyoIcon slot="icon" name="exclamation-triangle" />
      <strong>Your session has ended</strong>
      <br />
      Please login again to continue.
    </MoyoAlert>

    <br />

    <MoyoAlert variant="danger" open>
      <MoyoIcon slot="icon" name="exclamation-octagon" />
      <strong>Your account has been deleted</strong>
      <br />
      We're very sorry to see you go!
    </MoyoAlert>
  </>
);
```

### Closable

Add the `closable` attribute to show a close button that will hide the alert.

```html preview
<moyo-alert variant="primary" open closable class="alert-closable">
  <moyo-icon slot="icon" name="info-circle"></moyo-icon>
  You can close this alert any time!
</moyo-alert>

<script>
  const alert = document.querySelector('.alert-closable');
  alert.addEventListener('moyo-after-hide', () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

```jsx react
import { useState } from 'react';
import { MoyoAlert, MoyoIcon } from '@tovutifunk/tovuti/dist/react';

const App = () => {
  const [open, setOpen] = useState(true);

  function handleHide() {
    setOpen(false);
    setTimeout(() => setOpen(true), 2000);
  }

  return (
    <MoyoAlert open={open} closable onMoyoAfterHide={handleHide}>
      <MoyoIcon slot="icon" name="info-circle" />
      You can close this alert any time!
    </MoyoAlert>
  );
};
```

### Without Icons

Icons are optional. Simply omit the `icon` slot if you don't want them.

```html preview
<moyo-alert variant="primary" open> Nothing fancy here, just a simple alert. </moyo-alert>
```

```jsx react
import { MoyoAlert } from '@tovutifunk/tovuti/dist/react';

const App = () => (
  <MoyoAlert variant="primary" open>
    Nothing fancy here, just a simple alert.
  </MoyoAlert>
);
```

### Duration

Set the `duration` attribute to automatically hide an alert after a period of time. This is useful for alerts that don't require acknowledgement.

```html preview
<div class="alert-duration">
  <moyo-button variant="primary">Show Alert</moyo-button>

  <moyo-alert variant="primary" duration="3000" closable>
    <moyo-icon slot="icon" name="info-circle"></moyo-icon>
    This alert will automatically hide itself after three seconds, unless you interact with it.
  </moyo-alert>
</div>

<script>
  const container = document.querySelector('.alert-duration');
  const button = container.querySelector('moyo-button');
  const alert = container.querySelector('moyo-alert');

  button.addEventListener('click', () => alert.show());
</script>

<style>
  .alert-duration moyo-alert {
    margin-top: var(--moyo-spacing-medium);
  }
</style>
```

```jsx react
import { useState } from 'react';
import { MoyoAlert, MoyoButton, MoyoIcon } from '@tovutifunk/tovuti/dist/react';

const css = `
  .alert-duration moyo-alert {
    margin-top: var(--moyo-spacing-medium);
  }
`;

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="alert-duration">
        <MoyoButton variant="primary" onClick={() => setOpen(true)}>
          Show Alert
        </MoyoButton>

        <MoyoAlert variant="primary" duration="3000" open={open} closable onMoyoAfterHide={() => setOpen(false)}>
          <MoyoIcon slot="icon" name="info-circle" />
          This alert will automatically hide itself after three seconds, unless you interact with it.
        </MoyoAlert>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Toast Notifications

To display an alert as a toast notification, or "toast", create the alert and call its `toast()` method. This will move the alert out of its position in the DOM and into [the toast stack](#the-toast-stack) where it will be shown. Once dismissed, it will be removed from the DOM completely. To reuse a toast, store a reference to it and call `toast()` again later on.

You should always use the `closable` attribute so users can dismiss the notification. It's also common to set a reasonable `duration` when the notification doesn't require acknowledgement.

```html preview
<div class="alert-toast">
  <moyo-button variant="primary">Primary</moyo-button>
  <moyo-button variant="success">Success</moyo-button>
  <moyo-button variant="neutral">Neutral</moyo-button>
  <moyo-button variant="warning">Warning</moyo-button>
  <moyo-button variant="danger">Danger</moyo-button>

  <moyo-alert variant="primary" duration="3000" closable>
    <moyo-icon slot="icon" name="info-circle"></moyo-icon>
    <strong>This is super informative</strong><br />
    You can tell by how pretty the alert is.
  </moyo-alert>

  <moyo-alert variant="success" duration="3000" closable>
    <moyo-icon slot="icon" name="check2-circle"></moyo-icon>
    <strong>Your changes have been saved</strong><br />
    You can safely exit the app now.
  </moyo-alert>

  <moyo-alert variant="neutral" duration="3000" closable>
    <moyo-icon slot="icon" name="gear"></moyo-icon>
    <strong>Your settings have been updated</strong><br />
    Settings will take affect on next login.
  </moyo-alert>

  <moyo-alert variant="warning" duration="3000" closable>
    <moyo-icon slot="icon" name="exclamation-triangle"></moyo-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
  </moyo-alert>

  <moyo-alert variant="danger" duration="3000" closable>
    <moyo-icon slot="icon" name="exclamation-octagon"></moyo-icon>
    <strong>Your account has been deleted</strong><br />
    We're very sorry to see you go!
  </moyo-alert>
</div>

<script>
  const container = document.querySelector('.alert-toast');

  ['primary', 'success', 'neutral', 'warning', 'danger'].map(variant => {
    const button = container.querySelector(`moyo-button[variant="${variant}"]`);
    const alert = container.querySelector(`moyo-alert[variant="${variant}"]`);

    button.addEventListener('click', () => alert.toast());
  });
</script>
```

```jsx react
import { useRef } from 'react';
import { MoyoAlert, MoyoButton, MoyoIcon } from '@tovutifunk/tovuti/dist/react';

function showToast(alert) {
  alert.toast();
}

const App = () => {
  const primary = useRef(null);
  const success = useRef(null);
  const neutral = useRef(null);
  const warning = useRef(null);
  const danger = useRef(null);

  return (
    <>
      <MoyoButton variant="primary" onClick={() => primary.current.toast()}>
        Primary
      </MoyoButton>

      <MoyoButton variant="success" onClick={() => success.current.toast()}>
        Success
      </MoyoButton>

      <MoyoButton variant="neutral" onClick={() => neutral.current.toast()}>
        Neutral
      </MoyoButton>

      <MoyoButton variant="warning" onClick={() => warning.current.toast()}>
        Warning
      </MoyoButton>

      <MoyoButton variant="danger" onClick={() => danger.current.toast()}>
        Danger
      </MoyoButton>

      <MoyoAlert ref={primary} variant="primary" duration="3000" closable>
        <MoyoIcon slot="icon" name="info-circle" />
        <strong>This is super informative</strong>
        <br />
        You can tell by how pretty the alert is.
      </MoyoAlert>

      <MoyoAlert ref={success} variant="success" duration="3000" closable>
        <MoyoIcon slot="icon" name="check2-circle" />
        <strong>Your changes have been saved</strong>
        <br />
        You can safely exit the app now.
      </MoyoAlert>

      <MoyoAlert ref={neutral} variant="neutral" duration="3000" closable>
        <MoyoIcon slot="icon" name="gear" />
        <strong>Your settings have been updated</strong>
        <br />
        Settings will take affect on next login.
      </MoyoAlert>

      <MoyoAlert ref={warning} variant="warning" duration="3000" closable>
        <MoyoIcon slot="icon" name="exclamation-triangle" />
        <strong>Your session has ended</strong>
        <br />
        Please login again to continue.
      </MoyoAlert>

      <MoyoAlert ref={danger} variant="danger" duration="3000" closable>
        <MoyoIcon slot="icon" name="exclamation-octagon" />
        <strong>Your account has been deleted</strong>
        <br />
        We're very sorry to see you go!
      </MoyoAlert>
    </>
  );
};
```

### Creating Toasts Imperatively

For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the `toast()` method as shown in the example below.

```html preview
<div class="alert-toast-wrapper">
  <moyo-button variant="primary">Create Toast</moyo-button>
</div>

<script>
  const container = document.querySelector('.alert-toast-wrapper');
  const button = container.querySelector('moyo-button');
  let count = 0;

  // Always escape HTML for text arguments!
  function escapeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // Custom function to emit toast notifications
  function notify(message, variant = 'primary', icon = 'info-circle', duration = 3000) {
    const alert = Object.assign(document.createElement('moyo-alert'), {
      variant,
      closable: true,
      duration: duration,
      innerHTML: `
        <moyo-icon name="${icon}" slot="icon"></moyo-icon>
        ${escapeHtml(message)}
      `
    });

    document.body.append(alert);
    return alert.toast();
  }

  button.addEventListener('click', () => {
    notify(`This is custom toast #${++count}`);
  });
</script>
```

### The Toast Stack

The toast stack is a fixed position singleton element created and managed internally by the alert component. It will be added and removed from the DOM as needed when toasts are shown. When more than one toast is visible, they will stack vertically in the toast stack.

By default, the toast stack is positioned at the top-right of the viewport. You can change its position by targeting `.moyo-toast-stack` in your stylesheet. To make toasts appear at the top-left of the viewport, for example, use the following styles.

```css
.moyo-toast-stack {
  left: 0;
  right: auto;
}
```

?> By design, it is not possible to show toasts in more than one stack simultaneously. Such behavior is confusing and makes for a poor user experience.

[component-metadata:moyo-alert]
