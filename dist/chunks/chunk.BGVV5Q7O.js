import {
  component_styles_default
} from "./chunk.ZOHC4QYC.js";
import {
  r
} from "./chunk.IXU25QGK.js";

// src/components/dropdown/dropdown.styles.ts
var dropdown_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .dropdown {
    position: relative;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__positioner {
    position: absolute;
    z-index: var(--moyo-z-index-dropdown);
  }

  .dropdown__panel {
    font-family: var(--moyo-font-sans);
    font-size: var(--moyo-font-size-medium);
    font-weight: var(--moyo-font-weight-normal);
    color: var(--color);
    box-shadow: var(--moyo-shadow-large);
    overflow: auto;
    overscroll-behavior: none;
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  .dropdown__positioner[data-placement^='top'] .dropdown__panel {
    transform-origin: bottom;
  }

  .dropdown__positioner[data-placement^='bottom'] .dropdown__panel {
    transform-origin: top;
  }

  .dropdown__positioner[data-placement^='left'] .dropdown__panel {
    transform-origin: right;
  }

  .dropdown__positioner[data-placement^='right'] .dropdown__panel {
    transform-origin: left;
  }
`;

export {
  dropdown_styles_default
};
