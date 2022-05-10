import {
  form_control_styles_default
} from "./chunk.F65LFIGE.js";
import {
  component_styles_default
} from "./chunk.KNVYX3FQ.js";
import {
  r
} from "./chunk.PEQICPKO.js";

// src/components/textarea/textarea.styles.ts
var textarea_styles_default = r`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--moyo-input-font-family);
    font-weight: var(--moyo-input-font-weight);
    line-height: var(--moyo-line-height-normal);
    letter-spacing: var(--moyo-input-letter-spacing);
    vertical-align: middle;
    transition: var(--moyo-transition-fast) color, var(--moyo-transition-fast) border, var(--moyo-transition-fast) box-shadow,
      var(--moyo-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--moyo-input-background-color);
    border: solid var(--moyo-input-border-width) var(--moyo-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--moyo-input-background-color-hover);
    border-color: var(--moyo-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--moyo-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--moyo-input-background-color-focus);
    border-color: var(--moyo-input-border-color-focus);
    box-shadow: var(--moyo-focus-ring);
    color: var(--moyo-input-color-focus);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--moyo-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--moyo-input-background-color-disabled);
    border-color: var(--moyo-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--moyo-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--moyo-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--moyo-input-filled-background-color);
    color: var(--moyo-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--moyo-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--moyo-input-filled-background-color-focus);
    box-shadow: var(--moyo-focus-ring);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--moyo-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--moyo-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--moyo-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--moyo-input-border-radius-small);
    font-size: var(--moyo-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--moyo-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--moyo-input-border-radius-medium);
    font-size: var(--moyo-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--moyo-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--moyo-input-border-radius-large);
    font-size: var(--moyo-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--moyo-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
  }
`;

export {
  textarea_styles_default
};
