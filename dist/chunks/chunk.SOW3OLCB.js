import {
  menu_label_styles_default
} from "./chunk.AVC34MIX.js";
import {
  n
} from "./chunk.QCFW6O2I.js";
import {
  $,
  s
} from "./chunk.IXU25QGK.js";
import {
  __decorateClass
} from "./chunk.K2NRSETB.js";

// src/components/menu-label/menu-label.ts
var MoyoMenuLabel = class extends s {
  render() {
    return $`
      <div part="base" class="menu-label">
        <slot></slot>
      </div>
    `;
  }
};
MoyoMenuLabel.styles = menu_label_styles_default;
MoyoMenuLabel = __decorateClass([
  n("moyo-menu-label")
], MoyoMenuLabel);

export {
  MoyoMenuLabel
};
