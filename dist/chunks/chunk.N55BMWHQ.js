import {
  progress_bar_styles_default
} from "./chunk.AXEEUJJJ.js";
import {
  i
} from "./chunk.DFVP743R.js";
import {
  LocalizeController
} from "./chunk.NLYU4R6O.js";
import {
  o
} from "./chunk.7BXY5XRG.js";
import {
  l
} from "./chunk.R37SUKY2.js";
import {
  e,
  n
} from "./chunk.72DLNKYZ.js";
import {
  $,
  s
} from "./chunk.PEQICPKO.js";
import {
  __decorateClass
} from "./chunk.ICGTMF5Z.js";

// src/components/progress-bar/progress-bar.ts
var MoyoProgressBar = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.indeterminate = false;
    this.label = "";
  }
  render() {
    return $`
      <div
        part="base"
        class=${o({
      "progress-bar": true,
      "progress-bar--indeterminate": this.indeterminate
    })}
        role="progressbar"
        title=${l(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${i({ width: `${this.value}%` })}>
          ${!this.indeterminate ? $`
                <span part="label" class="progress-bar__label">
                  <slot></slot>
                </span>
              ` : ""}
        </div>
      </div>
    `;
  }
};
MoyoProgressBar.styles = progress_bar_styles_default;
__decorateClass([
  e({ type: Number, reflect: true })
], MoyoProgressBar.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoProgressBar.prototype, "indeterminate", 2);
__decorateClass([
  e()
], MoyoProgressBar.prototype, "label", 2);
__decorateClass([
  e()
], MoyoProgressBar.prototype, "lang", 2);
MoyoProgressBar = __decorateClass([
  n("moyo-progress-bar")
], MoyoProgressBar);

export {
  MoyoProgressBar
};
