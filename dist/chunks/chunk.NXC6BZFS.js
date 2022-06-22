import {
  spinner_styles_default
} from "./chunk.ZASIK7VG.js";
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

// src/components/spinner/spinner.ts
var MoyoSpinner = class extends s {
  render() {
    return $`
      <svg part="base" class="spinner" role="status">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
MoyoSpinner.styles = spinner_styles_default;
MoyoSpinner = __decorateClass([
  n("moyo-spinner")
], MoyoSpinner);

export {
  MoyoSpinner
};
