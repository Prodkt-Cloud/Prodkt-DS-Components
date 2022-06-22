import {
  component_styles_default
} from "./chunk.ZOHC4QYC.js";
import {
  r
} from "./chunk.IXU25QGK.js";

// src/components/menu/menu.styles.ts
var menu_styles_default = r`
  ${component_styles_default}

  :host {
    display: block;
  }

  .menu {
    background: var(--moyo-panel-background-color);
    border: solid var(--moyo-panel-border-width) var(--moyo-panel-border-color);
    border-radius: var(--moyo-border-radius-medium);
    background: var(--moyo-panel-background-color);
    padding: var(--moyo-spacing-x-small) 0;
  }

  ::slotted(moyo-divider) {
    --spacing: var(--moyo-spacing-x-small);
  }
`;

export {
  menu_styles_default
};
