import {
  menu_label_styles_default
} from "./chunk.ODMU7NZY.js";
import {
  n
} from "./chunk.72DLNKYZ.js";
import {
  $,
  s
} from "./chunk.PEQICPKO.js";
import {
  __decorateClass
} from "./chunk.ICGTMF5Z.js";

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
