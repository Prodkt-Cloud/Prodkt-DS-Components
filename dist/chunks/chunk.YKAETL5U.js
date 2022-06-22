import {
  visually_hidden_styles_default
} from "./chunk.CBMIIUJE.js";
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

// src/components/visually-hidden/visually-hidden.ts
var MoyoVisuallyHidden = class extends s {
  render() {
    return $` <slot></slot> `;
  }
};
MoyoVisuallyHidden.styles = visually_hidden_styles_default;
MoyoVisuallyHidden = __decorateClass([
  n("moyo-visually-hidden")
], MoyoVisuallyHidden);

export {
  MoyoVisuallyHidden
};
