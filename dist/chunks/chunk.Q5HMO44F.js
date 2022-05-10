import {
  focusVisibleSelector
} from "./chunk.IVOHDN3H.js";
import {
  component_styles_default
} from "./chunk.KNVYX3FQ.js";
import {
  r
} from "./chunk.PEQICPKO.js";

// src/components/radio/radio.styles.ts
var radio_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .radio {
    display: inline-flex;
    align-items: center;
    font-family: var(--moyo-input-font-family);
    font-size: var(--moyo-input-font-size-medium);
    font-weight: var(--moyo-input-font-weight);
    color: var(--moyo-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio__icon {
    display: inline-flex;
    width: var(--moyo-toggle-size);
    height: var(--moyo-toggle-size);
  }

  .radio__icon svg {
    width: 100%;
    height: 100%;
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--moyo-toggle-size);
    height: var(--moyo-toggle-size);
    border: solid var(--moyo-input-border-width) var(--moyo-input-border-color);
    border-radius: 50%;
    background-color: var(--moyo-input-background-color);
    color: transparent;
    transition: var(--moyo-transition-fast) border-color, var(--moyo-transition-fast) background-color,
      var(--moyo-transition-fast) color, var(--moyo-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--moyo-input-border-color-hover);
    background-color: var(--moyo-input-background-color-hover);
  }

  /* Focus */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__input${focusVisibleSelector} ~ .radio__control {
    border-color: var(--moyo-input-border-color-focus);
    background-color: var(--moyo-input-background-color-focus);
    box-shadow: var(--moyo-focus-ring);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--moyo-color-neutral-0);
    border-color: var(--moyo-color-primary-600);
    background-color: var(--moyo-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--moyo-color-primary-500);
    background-color: var(--moyo-color-primary-500);
  }

  /* Checked + focus */
  .radio.radio--checked:not(.radio--disabled) .radio__input${focusVisibleSelector} ~ .radio__control {
    border-color: var(--moyo-color-primary-500);
    background-color: var(--moyo-color-primary-500);
    box-shadow: var(--moyo-focus-ring);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    line-height: var(--moyo-toggle-size);
    margin-left: 0.5em;
    user-select: none;
  }
`;

export {
  radio_styles_default
};
