import {
  component_styles_default
} from "./chunk.ZOHC4QYC.js";
import {
  r
} from "./chunk.IXU25QGK.js";

// src/components/alert/alert.styles.ts
var alert_styles_default = r`
  ${component_styles_default}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--moyo-panel-background-color);
    border: solid var(--moyo-panel-border-width) var(--moyo-panel-border-color);
    border-top-width: calc(var(--moyo-panel-border-width) * 3);
    border-radius: var(--moyo-border-radius-medium);
    box-shadow: var(--box-shadow);
    font-family: var(--moyo-font-sans);
    font-size: var(--moyo-font-size-small);
    font-weight: var(--moyo-font-weight-normal);
    line-height: 1.6;
    color: var(--moyo-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--moyo-font-size-large);
    padding-left: var(--moyo-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--moyo-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--moyo-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--moyo-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--moyo-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--moyo-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--moyo-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--moyo-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--moyo-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--moyo-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--moyo-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    padding: var(--moyo-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--moyo-font-size-large);
    padding-right: var(--moyo-spacing-medium);
  }
`;

export {
  alert_styles_default
};
