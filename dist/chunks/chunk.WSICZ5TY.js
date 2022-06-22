import {
  focusVisibleSelector
} from "./chunk.NAG7FARZ.js";
import {
  component_styles_default
} from "./chunk.ZOHC4QYC.js";
import {
  r
} from "./chunk.IXU25QGK.js";

// src/components/menu-item/menu-item.styles.ts
var menu_item_styles_default = r`
  ${component_styles_default}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--moyo-font-sans);
    font-size: var(--moyo-font-size-medium);
    font-weight: var(--moyo-font-weight-normal);
    line-height: var(--moyo-line-height-normal);
    letter-spacing: var(--moyo-letter-spacing-normal);
    text-align: left;
    color: var(--moyo-color-neutral-700);
    padding: var(--moyo-spacing-2x-small) var(--moyo-spacing-2x-small);
    transition: var(--moyo-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    color: var(--moyo-color-neutral-400);
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-right: var(--moyo-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-left: var(--moyo-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(${focusVisibleSelector}:not(.moyo-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--moyo-color-primary-600);
    color: var(--moyo-color-neutral-0);
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }
`;

export {
  menu_item_styles_default
};
