import {
  spinner_styles_default
} from "./chunk.USPI73HZ.js";
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
