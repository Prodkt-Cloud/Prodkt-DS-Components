import {
  progress_ring_styles_default
} from "./chunk.ZJYVOYP5.js";
import {
  LocalizeController
} from "./chunk.KD5Z264M.js";
import {
  e,
  i,
  n,
  t
} from "./chunk.72DLNKYZ.js";
import {
  $,
  s
} from "./chunk.PEQICPKO.js";
import {
  __decorateClass
} from "./chunk.ICGTMF5Z.js";

// src/components/progress-ring/progress-ring.ts
var MoyoProgressRing = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.label = "";
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("percentage")) {
      const radius = parseFloat(getComputedStyle(this.indicator).getPropertyValue("r"));
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - this.value / 100 * circumference;
      this.indicatorOffset = `${offset}px`;
    }
  }
  render() {
    return $`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <span part="label" class="progress-ring__label">
          <slot></slot>
        </span>
      </div>
    `;
  }
};
MoyoProgressRing.styles = progress_ring_styles_default;
__decorateClass([
  i(".progress-ring__indicator")
], MoyoProgressRing.prototype, "indicator", 2);
__decorateClass([
  t()
], MoyoProgressRing.prototype, "indicatorOffset", 2);
__decorateClass([
  e({ type: Number, reflect: true })
], MoyoProgressRing.prototype, "value", 2);
__decorateClass([
  e()
], MoyoProgressRing.prototype, "label", 2);
__decorateClass([
  e()
], MoyoProgressRing.prototype, "lang", 2);
MoyoProgressRing = __decorateClass([
  n("moyo-progress-ring")
], MoyoProgressRing);

export {
  MoyoProgressRing
};
