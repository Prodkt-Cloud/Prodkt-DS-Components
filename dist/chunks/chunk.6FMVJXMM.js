import {
  skeleton_styles_default
} from "./chunk.FDQSATY7.js";
import {
  o
} from "./chunk.STPE66T5.js";
import {
  e,
  n
} from "./chunk.QCFW6O2I.js";
import {
  $,
  s
} from "./chunk.IXU25QGK.js";
import {
  __decorateClass
} from "./chunk.K2NRSETB.js";

// src/components/skeleton/skeleton.ts
var MoyoSkeleton = class extends s {
  constructor() {
    super(...arguments);
    this.effect = "none";
  }
  render() {
    return $`
      <div
        part="base"
        class=${o({
      skeleton: true,
      "skeleton--pulse": this.effect === "pulse",
      "skeleton--sheen": this.effect === "sheen"
    })}
        aria-busy="true"
        aria-live="polite"
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
  }
};
MoyoSkeleton.styles = skeleton_styles_default;
__decorateClass([
  e()
], MoyoSkeleton.prototype, "effect", 2);
MoyoSkeleton = __decorateClass([
  n("moyo-skeleton")
], MoyoSkeleton);

export {
  MoyoSkeleton
};
