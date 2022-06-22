import {
  responsive_media_styles_default
} from "./chunk.HYV4LTMG.js";
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

// src/components/responsive-media/responsive-media.ts
var MoyoResponsiveMedia = class extends s {
  constructor() {
    super(...arguments);
    this.aspectRatio = "16:9";
    this.fit = "cover";
  }
  render() {
    const split = this.aspectRatio.split(":");
    const x = parseFloat(split[0]);
    const y = parseFloat(split[1]);
    const paddingBottom = !isNaN(x) && !isNaN(y) && x > 0 && y > 0 ? `${y / x * 100}%` : "0";
    return $`
      <div
        class=${o({
      "responsive-media": true,
      "responsive-media--cover": this.fit === "cover",
      "responsive-media--contain": this.fit === "contain"
    })}
        style="padding-bottom: ${paddingBottom}"
      >
        <slot></slot>
      </div>
    `;
  }
};
MoyoResponsiveMedia.styles = responsive_media_styles_default;
__decorateClass([
  e({ attribute: "aspect-ratio" })
], MoyoResponsiveMedia.prototype, "aspectRatio", 2);
__decorateClass([
  e()
], MoyoResponsiveMedia.prototype, "fit", 2);
MoyoResponsiveMedia = __decorateClass([
  n("moyo-responsive-media")
], MoyoResponsiveMedia);

export {
  MoyoResponsiveMedia
};
