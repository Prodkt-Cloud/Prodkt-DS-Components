import {
  focusVisibleSelector
} from "./chunk.IVOHDN3H.js";
import {
  component_styles_default
} from "./chunk.KNVYX3FQ.js";
import {
  r
} from "./chunk.PEQICPKO.js";

// src/components/checkbox/checkbox.styles.ts
var checkbox_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .checkbox {
    display: inline-flex;
    align-items: center;
    font-family: var(--moyo-input-font-family);
    font-size: var(--moyo-input-font-size-medium);
    font-weight: var(--moyo-input-font-weight);
    color: var(--moyo-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--moyo-toggle-size);
    height: var(--moyo-toggle-size);
    border: solid var(--moyo-input-border-width) var(--moyo-input-border-color);
    border-radius: 2px;
    background-color: var(--moyo-input-background-color);
    color: var(--moyo-color-neutral-0);
    transition: var(--moyo-transition-fast) border-color, var(--moyo-transition-fast) background-color,
      var(--moyo-transition-fast) color, var(--moyo-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__control .checkbox__icon {
    display: inline-flex;
    width: var(--moyo-toggle-size);
    height: var(--moyo-toggle-size);
  }

  .checkbox__control .checkbox__icon svg {
    width: 100%;
    height: 100%;
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--moyo-input-border-color-hover);
    background-color: var(--moyo-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled)
    .checkbox__input${focusVisibleSelector}
    ~ .checkbox__control {
    border-color: var(--moyo-input-border-color-focus);
    background-color: var(--moyo-input-background-color-focus);
    box-shadow: var(--moyo-focus-ring);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--moyo-color-primary-600);
    background-color: var(--moyo-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--moyo-color-primary-500);
    background-color: var(--moyo-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input${focusVisibleSelector} ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled)
    .checkbox__input${focusVisibleSelector}
    ~ .checkbox__control {
    border-color: var(--moyo-color-primary-500);
    background-color: var(--moyo-color-primary-500);
    box-shadow: var(--moyo-focus-ring);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    line-height: var(--moyo-toggle-size);
    margin-left: 0.5em;
    user-select: none;
  }
`;

export {
  checkbox_styles_default
};
