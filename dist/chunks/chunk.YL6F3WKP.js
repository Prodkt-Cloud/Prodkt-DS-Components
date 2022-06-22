import {
  divider_styles_default
} from "./chunk.ZIYBMH5Z.js";
import {
  watch
} from "./chunk.W6MGCO4G.js";
import {
  e,
  n
} from "./chunk.QCFW6O2I.js";
import {
  s
} from "./chunk.IXU25QGK.js";
import {
  __decorateClass
} from "./chunk.K2NRSETB.js";

// src/components/divider/divider.ts
var MoyoDivider = class extends s {
  constructor() {
    super(...arguments);
    this.vertical = false;
  }
  firstUpdated() {
    this.setAttribute("role", "separator");
  }
  handleVerticalChange() {
    this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
  }
};
MoyoDivider.styles = divider_styles_default;
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoDivider.prototype, "vertical", 2);
__decorateClass([
  watch("vertical")
], MoyoDivider.prototype, "handleVerticalChange", 1);
MoyoDivider = __decorateClass([
  n("moyo-divider")
], MoyoDivider);

export {
  MoyoDivider
};
