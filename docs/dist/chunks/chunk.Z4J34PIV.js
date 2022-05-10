import {
  component_styles_default
} from "./chunk.KNVYX3FQ.js";
import {
  r
} from "./chunk.PEQICPKO.js";

// src/components/radio-group/radio-group.styles.ts
var radio_group_styles_default = r`
  ${component_styles_default}

  :host {
    display: block;
  }

  .radio-group {
    border: solid var(--moyo-panel-border-width) var(--moyo-panel-border-color);
    border-radius: var(--moyo-border-radius-medium);
    padding: var(--moyo-spacing-large);
    padding-top: var(--moyo-spacing-x-small);
  }

  .radio-group .radio-group__label {
    font-family: var(--moyo-input-font-family);
    font-size: var(--moyo-input-font-size-medium);
    font-weight: var(--moyo-input-font-weight);
    color: var(--moyo-input-color);
    padding: 0 var(--moyo-spacing-2x-small);
  }

  ::slotted(moyo-radio:not(:last-of-type)) {
    display: block;
    margin-bottom: var(--moyo-spacing-2x-small);
  }

  .radio-group:not(.radio-group--has-fieldset) {
    border: none;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  .radio-group:not(.radio-group--has-fieldset) .radio-group__label {
    position: absolute;
    width: 0;
    height: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }
`;

export {
  radio_group_styles_default
};
