import {
  split_panel_styles_default
} from "./chunk.ALGAB54B.js";
import {
  drag
} from "./chunk.RBICTPSA.js";
import {
  clamp
} from "./chunk.43G6GBOK.js";
import {
  LocalizeController
} from "./chunk.NLYU4R6O.js";
import {
  l
} from "./chunk.EEOR7ZZH.js";
import {
  watch
} from "./chunk.W6MGCO4G.js";
import {
  emit
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

// src/components/split-panel/split-panel.ts
var MoyoSplitPanel = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.position = 50;
    this.vertical = false;
    this.disabled = false;
    this.snapThreshold = 12;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver((entries) => this.handleResize(entries));
    this.updateComplete.then(() => this.resizeObserver.observe(this));
    this.detectSize();
    this.cachedPositionInPixels = this.percentageToPixels(this.position);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this);
  }
  detectSize() {
    const { width, height } = this.getBoundingClientRect();
    this.size = this.vertical ? height : width;
  }
  percentageToPixels(value) {
    return this.size * (value / 100);
  }
  pixelsToPercentage(value) {
    return value / this.size * 100;
  }
  handleDrag(event) {
    if (this.disabled) {
      return;
    }
    event.preventDefault();
    drag(this, (x, y) => {
      let newPositionInPixels = this.vertical ? y : x;
      if (this.primary === "end") {
        newPositionInPixels = this.size - newPositionInPixels;
      }
      if (this.snap) {
        const snaps = this.snap.split(" ");
        snaps.forEach((value) => {
          let snapPoint;
          if (value.endsWith("%")) {
            snapPoint = this.size * (parseFloat(value) / 100);
          } else {
            snapPoint = parseFloat(value);
          }
          if (newPositionInPixels >= snapPoint - this.snapThreshold && newPositionInPixels <= snapPoint + this.snapThreshold) {
            newPositionInPixels = snapPoint;
          }
        });
      }
      this.position = clamp(this.pixelsToPercentage(newPositionInPixels), 0, 100);
    });
  }
  handleKeyDown(event) {
    if (this.disabled) {
      return;
    }
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      let newPosition = this.position;
      const incr = (event.shiftKey ? 10 : 1) * (this.primary === "end" ? -1 : 1);
      event.preventDefault();
      if (event.key === "ArrowLeft" && !this.vertical || event.key === "ArrowUp" && this.vertical) {
        newPosition -= incr;
      }
      if (event.key === "ArrowRight" && !this.vertical || event.key === "ArrowDown" && this.vertical) {
        newPosition += incr;
      }
      if (event.key === "Home") {
        newPosition = this.primary === "end" ? 100 : 0;
      }
      if (event.key === "End") {
        newPosition = this.primary === "end" ? 0 : 100;
      }
      this.position = clamp(newPosition, 0, 100);
    }
  }
  handlePositionChange() {
    this.cachedPositionInPixels = this.percentageToPixels(this.position);
    this.positionInPixels = this.percentageToPixels(this.position);
    emit(this, "moyo-reposition");
  }
  handlePositionInPixelsChange() {
    this.position = this.pixelsToPercentage(this.positionInPixels);
  }
  handleVerticalChange() {
    this.detectSize();
  }
  handleResize(entries) {
    const { width, height } = entries[0].contentRect;
    this.size = this.vertical ? height : width;
    if (this.primary) {
      this.position = this.pixelsToPercentage(this.cachedPositionInPixels);
    }
  }
  render() {
    const gridTemplate = this.vertical ? "gridTemplateRows" : "gridTemplateColumns";
    const gridTemplateAlt = this.vertical ? "gridTemplateColumns" : "gridTemplateRows";
    const primary = `
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `;
    const secondary = "auto";
    if (this.primary === "end") {
      this.style[gridTemplate] = `${secondary} var(--divider-width) ${primary}`;
    } else {
      this.style[gridTemplate] = `${primary} var(--divider-width) ${secondary}`;
    }
    this.style[gridTemplateAlt] = "";
    return $`
      <div part="panel start" class="start">
        <slot name="start"></slot>
      </div>

      <div
        part="divider"
        class="divider"
        tabindex=${l(this.disabled ? void 0 : "0")}
        role="separator"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="handle"></slot>
      </div>

      <div part="panel end" class="end">
        <slot name="end"></slot>
      </div>
    `;
  }
};
MoyoSplitPanel.styles = split_panel_styles_default;
__decorateClass([
  i(".divider")
], MoyoSplitPanel.prototype, "divider", 2);
__decorateClass([
  e({ type: Number, reflect: true })
], MoyoSplitPanel.prototype, "position", 2);
__decorateClass([
  e({ attribute: "position-in-pixels", type: Number })
], MoyoSplitPanel.prototype, "positionInPixels", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoSplitPanel.prototype, "vertical", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoSplitPanel.prototype, "disabled", 2);
__decorateClass([
  e()
], MoyoSplitPanel.prototype, "primary", 2);
__decorateClass([
  e()
], MoyoSplitPanel.prototype, "snap", 2);
__decorateClass([
  e({ type: Number, attribute: "snap-threshold" })
], MoyoSplitPanel.prototype, "snapThreshold", 2);
__decorateClass([
  watch("position")
], MoyoSplitPanel.prototype, "handlePositionChange", 1);
__decorateClass([
  watch("positionInPixels")
], MoyoSplitPanel.prototype, "handlePositionInPixelsChange", 1);
__decorateClass([
  watch("vertical")
], MoyoSplitPanel.prototype, "handleVerticalChange", 1);
MoyoSplitPanel = __decorateClass([
  n("moyo-split-panel")
], MoyoSplitPanel);

export {
  MoyoSplitPanel
};
