import {
  component_styles_default
} from "./chunk.ZOHC4QYC.js";
import {
  r
} from "./chunk.IXU25QGK.js";

// src/components/tag/tag.styles.ts
var tag_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--moyo-color-primary-50);
    border-color: var(--moyo-color-primary-200);
    color: var(--moyo-color-primary-800);
  }

  .tag--success {
    background-color: var(--moyo-color-success-50);
    border-color: var(--moyo-color-success-200);
    color: var(--moyo-color-success-800);
  }

  .tag--neutral {
    background-color: var(--moyo-color-neutral-50);
    border-color: var(--moyo-color-neutral-200);
    color: var(--moyo-color-neutral-800);
  }

  .tag--warning {
    background-color: var(--moyo-color-warning-50);
    border-color: var(--moyo-color-warning-200);
    color: var(--moyo-color-warning-800);
  }

  .tag--danger {
    background-color: var(--moyo-color-danger-50);
    border-color: var(--moyo-color-danger-200);
    color: var(--moyo-color-danger-800);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--moyo-button-font-size-small);
    height: calc(var(--moyo-input-height-small) * 0.8);
    line-height: calc(var(--moyo-input-height-small) - var(--moyo-input-border-width) * 2);
    border-radius: var(--moyo-input-border-radius-small);
    padding: 0 var(--moyo-spacing-x-small);
  }

  .tag--small .tag__remove {
    margin-left: var(--moyo-spacing-2x-small);
    margin-right: calc(-1 * var(--moyo-spacing-3x-small));
  }

  .tag--medium {
    font-size: var(--moyo-button-font-size-medium);
    height: calc(var(--moyo-input-height-medium) * 0.8);
    line-height: calc(var(--moyo-input-height-medium) - var(--moyo-input-border-width) * 2);
    border-radius: var(--moyo-input-border-radius-medium);
    padding: 0 var(--moyo-spacing-small);
  }

  .tag__remove {
    margin-left: var(--moyo-spacing-2x-small);
    margin-right: calc(-1 * var(--moyo-spacing-2x-small));
  }

  .tag--large {
    font-size: var(--moyo-button-font-size-large);
    height: calc(var(--moyo-input-height-large) * 0.8);
    line-height: calc(var(--moyo-input-height-large) - var(--moyo-input-border-width) * 2);
    border-radius: var(--moyo-input-border-radius-large);
    padding: 0 var(--moyo-spacing-medium);
  }

  .tag__remove {
    font-size: 1.4em;
    margin-left: var(--moyo-spacing-2x-small);
    margin-right: calc(-1 * var(--moyo-spacing-x-small));
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--moyo-border-radius-pill);
  }
`;

export {
  tag_styles_default
};
