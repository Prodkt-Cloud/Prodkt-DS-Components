import {
  focusVisibleSelector
} from "./chunk.NAG7FARZ.js";
import {
  component_styles_default
} from "./chunk.ZOHC4QYC.js";
import {
  r
} from "./chunk.IXU25QGK.js";

// src/components/button/button.styles.ts
var button_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--moyo-input-border-width);
    font-family: var(--moyo-input-font-family);
    font-weight: var(--moyo-font-weight-bold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--moyo-transition-x-fast) background-color, var(--moyo-transition-x-fast) color,
      var(--moyo-transition-x-fast) border, var(--moyo-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(moyo-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--moyo-color-neutral-0);
    border-color: var(--moyo-color-neutral-300);
    color: var(--moyo-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--moyo-color-primary-50);
    border-color: var(--moyo-color-primary-300);
    color: var(--moyo-color-primary-700);
  }

  .button--standard.button--default${focusVisibleSelector}:not(.button--disabled) {
    background-color: var(--moyo-color-primary-50);
    border-color: var(--moyo-color-primary-400);
    color: var(--moyo-color-primary-700);
    box-shadow: var(--moyo-focus-ring);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--moyo-color-primary-100);
    border-color: var(--moyo-color-primary-400);
    color: var(--moyo-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--moyo-color-primary-600);
    border-color: var(--moyo-color-primary-600);
    color: var(--moyo-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--moyo-color-primary-500);
    border-color: var(--moyo-color-primary-500);
    color: var(--moyo-color-neutral-0);
  }

  .button--standard.button--primary${focusVisibleSelector}:not(.button--disabled) {
    background-color: var(--moyo-color-primary-500);
    border-color: var(--moyo-color-primary-500);
    color: var(--moyo-color-neutral-0);
    box-shadow: var(--moyo-focus-ring);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--moyo-color-primary-600);
    border-color: var(--moyo-color-primary-600);
    color: var(--moyo-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--moyo-color-success-600);
    border-color: var(--moyo-color-success-600);
    color: var(--moyo-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--moyo-color-success-500);
    border-color: var(--moyo-color-success-500);
    color: var(--moyo-color-neutral-0);
  }

  .button--standard.button--success${focusVisibleSelector}:not(.button--disabled) {
    background-color: var(--moyo-color-success-600);
    border-color: var(--moyo-color-success-600);
    color: var(--moyo-color-neutral-0);
    box-shadow: var(--moyo-focus-ring);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--moyo-color-success-600);
    border-color: var(--moyo-color-success-600);
    color: var(--moyo-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--moyo-color-neutral-600);
    border-color: var(--moyo-color-neutral-600);
    color: var(--moyo-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--moyo-color-neutral-500);
    border-color: var(--moyo-color-neutral-500);
    color: var(--moyo-color-neutral-0);
  }

  .button--standard.button--neutral${focusVisibleSelector}:not(.button--disabled) {
    background-color: var(--moyo-color-neutral-500);
    border-color: var(--moyo-color-neutral-500);
    color: var(--moyo-color-neutral-0);
    box-shadow: var(--moyo-focus-ring);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--moyo-color-neutral-600);
    border-color: var(--moyo-color-neutral-600);
    color: var(--moyo-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--moyo-color-warning-600);
    border-color: var(--moyo-color-warning-600);
    color: var(--moyo-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--moyo-color-warning-500);
    border-color: var(--moyo-color-warning-500);
    color: var(--moyo-color-neutral-0);
  }

  .button--standard.button--warning${focusVisibleSelector}:not(.button--disabled) {
    background-color: var(--moyo-color-warning-500);
    border-color: var(--moyo-color-warning-500);
    color: var(--moyo-color-neutral-0);
    box-shadow: var(--moyo-focus-ring);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--moyo-color-warning-600);
    border-color: var(--moyo-color-warning-600);
    color: var(--moyo-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--moyo-color-danger-600);
    border-color: var(--moyo-color-danger-600);
    color: var(--moyo-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--moyo-color-danger-500);
    border-color: var(--moyo-color-danger-500);
    color: var(--moyo-color-neutral-0);
  }

  .button--standard.button--danger${focusVisibleSelector}:not(.button--disabled) {
    background-color: var(--moyo-color-danger-500);
    border-color: var(--moyo-color-danger-500);
    color: var(--moyo-color-neutral-0);
    box-shadow: var(--moyo-focus-ring);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--moyo-color-danger-600);
    border-color: var(--moyo-color-danger-600);
    color: var(--moyo-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--moyo-color-neutral-300);
    color: var(--moyo-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--moyo-color-primary-600);
    background-color: var(--moyo-color-primary-600);
    color: var(--moyo-color-neutral-0);
  }

  .button--outline.button--default${focusVisibleSelector}:not(.button--disabled) {
    border-color: var(--moyo-color-primary-500);
    box-shadow: var(--moyo-focus-ring);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--moyo-color-primary-700);
    background-color: var(--moyo-color-primary-700);
    color: var(--moyo-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--moyo-color-primary-600);
    color: var(--moyo-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--moyo-color-primary-600);
    color: var(--moyo-color-neutral-0);
  }

  .button--outline.button--primary${focusVisibleSelector}:not(.button--disabled) {
    border-color: var(--moyo-color-primary-500);
    box-shadow: var(--moyo-focus-ring);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--moyo-color-primary-700);
    background-color: var(--moyo-color-primary-700);
    color: var(--moyo-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--moyo-color-success-600);
    color: var(--moyo-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--moyo-color-success-600);
    color: var(--moyo-color-neutral-0);
  }

  .button--outline.button--success${focusVisibleSelector}:not(.button--disabled) {
    border-color: var(--moyo-color-success-500);
    box-shadow: var(--moyo-focus-ring);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--moyo-color-success-700);
    background-color: var(--moyo-color-success-700);
    color: var(--moyo-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--moyo-color-neutral-600);
    color: var(--moyo-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--moyo-color-neutral-600);
    color: var(--moyo-color-neutral-0);
  }

  .button--outline.button--neutral${focusVisibleSelector}:not(.button--disabled) {
    border-color: var(--moyo-color-neutral-500);
    box-shadow: var(--moyo-focus-ring);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--moyo-color-neutral-700);
    background-color: var(--moyo-color-neutral-700);
    color: var(--moyo-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--moyo-color-warning-600);
    color: var(--moyo-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--moyo-color-warning-600);
    color: var(--moyo-color-neutral-0);
  }

  .button--outline.button--warning${focusVisibleSelector}:not(.button--disabled) {
    border-color: var(--moyo-color-warning-500);
    box-shadow: var(--moyo-focus-ring);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--moyo-color-warning-700);
    background-color: var(--moyo-color-warning-700);
    color: var(--moyo-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--moyo-color-danger-600);
    color: var(--moyo-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--moyo-color-danger-600);
    color: var(--moyo-color-neutral-0);
  }

  .button--outline.button--danger${focusVisibleSelector}:not(.button--disabled) {
    border-color: var(--moyo-color-danger-500);
    box-shadow: var(--moyo-focus-ring);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--moyo-color-danger-700);
    background-color: var(--moyo-color-danger-700);
    color: var(--moyo-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--moyo-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--moyo-color-primary-500);
  }

  .button--text${focusVisibleSelector}:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--moyo-color-primary-500);
    box-shadow: var(--moyo-focus-ring);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--moyo-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--moyo-button-font-size-small);
    height: var(--moyo-input-height-small);
    line-height: calc(var(--moyo-input-height-small) - var(--moyo-input-border-width) * 2);
    border-radius: var(--moyo-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--moyo-button-font-size-medium);
    height: var(--moyo-input-height-medium);
    line-height: calc(var(--moyo-input-height-medium) - var(--moyo-input-border-width) * 2);
    border-radius: var(--moyo-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--moyo-button-font-size-large);
    height: var(--moyo-input-height-large);
    line-height: calc(var(--moyo-input-height-large) - var(--moyo-input-border-width) * 2);
    border-radius: var(--moyo-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--moyo-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--moyo-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--moyo-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--moyo-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--moyo-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--moyo-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading moyo-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(moyo-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--moyo-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--moyo-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--moyo-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-left: var(--moyo-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-left: var(--moyo-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-left: var(--moyo-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-left: var(--moyo-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-left: var(--moyo-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-left: var(--moyo-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-right: var(--moyo-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-right: var(--moyo-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-right: var(--moyo-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-right: var(--moyo-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-right: var(--moyo-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-right: var(--moyo-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.moyo-button-group__button--first:not(.moyo-button-group__button--last)) .button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host(.moyo-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.moyo-button-group__button--last:not(.moyo-button-group__button--first)) .button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* All except the first */
  :host(.moyo-button-group__button:not(.moyo-button-group__button--first)) {
    margin-left: calc(-1 * var(--moyo-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.moyo-button-group__button:not(.moyo-button-group__button--focus, .moyo-button-group__button--first, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.moyo-button-group__button--hover) {
    z-index: 1;
  }

  :host(.moyo-button-group__button--focus),
  :host(.moyo-button-group__button[checked]) {
    z-index: 2;
  }
`;

export {
  button_styles_default
};
