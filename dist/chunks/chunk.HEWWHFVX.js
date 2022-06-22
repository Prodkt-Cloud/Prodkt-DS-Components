import {
  tooltip_styles_default
} from "./chunk.HC3LUIVC.js";
import {
  D,
  N,
  T,
  b,
  m,
  z
} from "./chunk.X4CQOOTK.js";
import {
  animateTo,
  parseDuration,
  stopAnimations
} from "./chunk.63W3F5G5.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.LMSITQL7.js";
import {
  watch
} from "./chunk.W6MGCO4G.js";
import {
  emit,
  waitForEvent
} from "./chunk.UY5AQKHP.js";
import {
  o
} from "./chunk.STPE66T5.js";
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

// src/components/tooltip/tooltip.ts
var MoyoTooltip = class extends s {
  constructor() {
    super(...arguments);
    this.content = "";
    this.placement = "top";
    this.disabled = false;
    this.distance = 10;
    this.open = false;
    this.skidding = 0;
    this.trigger = "hover focus";
    this.hoist = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.updateComplete.then(() => {
      this.addEventListener("blur", this.handleBlur, true);
      this.addEventListener("focus", this.handleFocus, true);
      this.addEventListener("click", this.handleClick);
      this.addEventListener("keydown", this.handleKeyDown);
      this.addEventListener("mouseover", this.handleMouseOver);
      this.addEventListener("mouseout", this.handleMouseOut);
      this.target = this.getTarget();
    });
  }
  async firstUpdated() {
    this.tooltip.hidden = !this.open;
    if (this.open) {
      await this.updateComplete;
      this.updatePositioner();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("blur", this.handleBlur, true);
    this.removeEventListener("focus", this.handleFocus, true);
    this.removeEventListener("click", this.handleClick);
    this.removeEventListener("keydown", this.handleKeyDown);
    this.removeEventListener("mouseover", this.handleMouseOver);
    this.removeEventListener("mouseout", this.handleMouseOut);
    this.stopPositioner();
  }
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "moyo-after-show");
  }
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "moyo-after-hide");
  }
  getTarget() {
    const target = [...this.children].find((el) => el.tagName.toLowerCase() !== "style" && el.getAttribute("slot") !== "content");
    if (!target) {
      throw new Error("Invalid tooltip target: no child element was found.");
    }
    return target;
  }
  handleBlur() {
    if (this.hasTrigger("focus")) {
      this.hide();
    }
  }
  handleClick() {
    if (this.hasTrigger("click")) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
  }
  handleFocus() {
    if (this.hasTrigger("focus")) {
      this.show();
    }
  }
  handleKeyDown(event) {
    if (this.open && event.key === "Escape") {
      event.stopPropagation();
      this.hide();
    }
  }
  handleMouseOver() {
    if (this.hasTrigger("hover")) {
      const delay = parseDuration(getComputedStyle(this).getPropertyValue("--show-delay"));
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = window.setTimeout(() => void this.show(), delay);
    }
  }
  handleMouseOut() {
    if (this.hasTrigger("hover")) {
      const delay = parseDuration(getComputedStyle(this).getPropertyValue("--hide-delay"));
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = window.setTimeout(() => void this.hide(), delay);
    }
  }
  async handleOpenChange() {
    if (this.disabled) {
      return;
    }
    if (this.open) {
      emit(this, "moyo-show");
      await stopAnimations(this.tooltip);
      this.startPositioner();
      this.tooltip.hidden = false;
      const { keyframes, options } = getAnimation(this, "tooltip.show");
      await animateTo(this.tooltip, keyframes, options);
      emit(this, "moyo-after-show");
    } else {
      emit(this, "moyo-hide");
      await stopAnimations(this.tooltip);
      const { keyframes, options } = getAnimation(this, "tooltip.hide");
      await animateTo(this.tooltip, keyframes, options);
      this.tooltip.hidden = true;
      this.stopPositioner();
      emit(this, "moyo-after-hide");
    }
  }
  handleOptionsChange() {
    this.updatePositioner();
  }
  handleDisabledChange() {
    if (this.disabled && this.open) {
      this.hide();
    }
  }
  hasTrigger(triggerType) {
    const triggers = this.trigger.split(" ");
    return triggers.includes(triggerType);
  }
  startPositioner() {
    this.stopPositioner();
    this.updatePositioner();
    this.positionerCleanup = N(this.target, this.positioner, this.updatePositioner.bind(this));
  }
  updatePositioner() {
    if (!this.open || !this.target || !this.positioner) {
      return;
    }
    z(this.target, this.positioner, {
      placement: this.placement,
      middleware: [
        T({ mainAxis: this.distance, crossAxis: this.skidding }),
        b(),
        D(),
        m({
          element: this.arrow,
          padding: 10
        })
      ],
      strategy: this.hoist ? "fixed" : "absolute"
    }).then(({ x, y, middlewareData, placement }) => {
      const arrowX = middlewareData.arrow.x;
      const arrowY = middlewareData.arrow.y;
      const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
      this.positioner.setAttribute("data-placement", placement);
      Object.assign(this.positioner.style, {
        position: this.hoist ? "fixed" : "absolute",
        left: `${x}px`,
        top: `${y}px`
      });
      Object.assign(this.arrow.style, {
        left: typeof arrowX === "number" ? `${arrowX}px` : "",
        top: typeof arrowY === "number" ? `${arrowY}px` : "",
        right: "",
        bottom: "",
        [staticSide]: "calc(var(--moyo-tooltip-arrow-size) * -1)"
      });
    });
  }
  stopPositioner() {
    if (this.positionerCleanup) {
      this.positionerCleanup();
      this.positionerCleanup = void 0;
      this.positioner.removeAttribute("data-placement");
    }
  }
  render() {
    return $`
      <div class="tooltip-target" aria-describedby="tooltip">
        <slot></slot>
      </div>

      <div class="tooltip-positioner">
        <div
          part="base"
          id="tooltip"
          class=${o({
      tooltip: true,
      "tooltip--open": this.open
    })}
          role="tooltip"
          aria-hidden=${this.open ? "false" : "true"}
        >
          <div class="tooltip__arrow"></div>
          <div class="tooltip__content" aria-live=${this.open ? "polite" : "off"}>
            <slot name="content"> ${this.content} </slot>
          </div>
        </div>
      </div>
    `;
  }
};
MoyoTooltip.styles = tooltip_styles_default;
__decorateClass([
  i(".tooltip-positioner")
], MoyoTooltip.prototype, "positioner", 2);
__decorateClass([
  i(".tooltip")
], MoyoTooltip.prototype, "tooltip", 2);
__decorateClass([
  i(".tooltip__arrow")
], MoyoTooltip.prototype, "arrow", 2);
__decorateClass([
  e()
], MoyoTooltip.prototype, "content", 2);
__decorateClass([
  e()
], MoyoTooltip.prototype, "placement", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoTooltip.prototype, "disabled", 2);
__decorateClass([
  e({ type: Number })
], MoyoTooltip.prototype, "distance", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoTooltip.prototype, "open", 2);
__decorateClass([
  e({ type: Number })
], MoyoTooltip.prototype, "skidding", 2);
__decorateClass([
  e()
], MoyoTooltip.prototype, "trigger", 2);
__decorateClass([
  e({ type: Boolean })
], MoyoTooltip.prototype, "hoist", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], MoyoTooltip.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("content"),
  watch("distance"),
  watch("hoist"),
  watch("placement"),
  watch("skidding")
], MoyoTooltip.prototype, "handleOptionsChange", 1);
__decorateClass([
  watch("disabled")
], MoyoTooltip.prototype, "handleDisabledChange", 1);
MoyoTooltip = __decorateClass([
  n("moyo-tooltip")
], MoyoTooltip);
setDefaultAnimation("tooltip.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.8)" },
    { opacity: 1, transform: "scale(1)" }
  ],
  options: { duration: 150, easing: "ease" }
});
setDefaultAnimation("tooltip.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.8)" }
  ],
  options: { duration: 150, easing: "ease" }
});

export {
  MoyoTooltip
};
