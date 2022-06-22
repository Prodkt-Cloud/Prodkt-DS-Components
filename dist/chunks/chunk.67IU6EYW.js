import {
  details_styles_default
} from "./chunk.CI3PZTGC.js";
import {
  animateTo,
  shimKeyframesHeightAuto,
  stopAnimations
} from "./chunk.63W3F5G5.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.LMSITQL7.js";
import {
  o
} from "./chunk.STPE66T5.js";
import {
  watch
} from "./chunk.W6MGCO4G.js";
import {
  emit,
  waitForEvent
} from "./chunk.UY5AQKHP.js";
import {
  e,
  i,
  n
} from "./chunk.QCFW6O2I.js";
import {
  $,
  s
} from "./chunk.IXU25QGK.js";
import {
  __decorateClass
} from "./chunk.K2NRSETB.js";

// src/components/details/details.ts
var MoyoDetails = class extends s {
  constructor() {
    super(...arguments);
    this.open = false;
    this.disabled = false;
  }
  firstUpdated() {
    this.body.hidden = !this.open;
    this.body.style.height = this.open ? "auto" : "0";
  }
  async show() {
    if (this.open || this.disabled) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "moyo-after-show");
  }
  async hide() {
    if (!this.open || this.disabled) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "moyo-after-hide");
  }
  handleSummaryClick() {
    if (!this.disabled) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
      this.header.focus();
    }
  }
  handleSummaryKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      this.hide();
    }
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      this.show();
    }
  }
  async handleOpenChange() {
    if (this.open) {
      emit(this, "moyo-show");
      await stopAnimations(this.body);
      this.body.hidden = false;
      const { keyframes, options } = getAnimation(this, "details.show");
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.style.height = "auto";
      emit(this, "moyo-after-show");
    } else {
      emit(this, "moyo-hide");
      await stopAnimations(this.body);
      const { keyframes, options } = getAnimation(this, "details.hide");
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.hidden = true;
      this.body.style.height = "auto";
      emit(this, "moyo-after-hide");
    }
  }
  render() {
    return $`
      <div
        part="base"
        class=${o({
      details: true,
      "details--open": this.open,
      "details--disabled": this.disabled
    })}
      >
        <header
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls="content"
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <div part="summary" class="details__summary">
            <slot name="summary">${this.summary}</slot>
          </div>

          <span part="summary-icon" class="details__summary-icon">
            <moyo-icon name="chevron-right" library="system"></moyo-icon>
          </span>
        </header>

        <div class="details__body">
          <div part="content" id="content" class="details__content" role="region" aria-labelledby="header">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
};
MoyoDetails.styles = details_styles_default;
__decorateClass([
  i(".details")
], MoyoDetails.prototype, "details", 2);
__decorateClass([
  i(".details__header")
], MoyoDetails.prototype, "header", 2);
__decorateClass([
  i(".details__body")
], MoyoDetails.prototype, "body", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoDetails.prototype, "open", 2);
__decorateClass([
  e()
], MoyoDetails.prototype, "summary", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoDetails.prototype, "disabled", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], MoyoDetails.prototype, "handleOpenChange", 1);
MoyoDetails = __decorateClass([
  n("moyo-details")
], MoyoDetails);
setDefaultAnimation("details.show", {
  keyframes: [
    { height: "0", opacity: "0" },
    { height: "auto", opacity: "1" }
  ],
  options: { duration: 250, easing: "linear" }
});
setDefaultAnimation("details.hide", {
  keyframes: [
    { height: "auto", opacity: "1" },
    { height: "0", opacity: "0" }
  ],
  options: { duration: 250, easing: "linear" }
});

export {
  MoyoDetails
};
