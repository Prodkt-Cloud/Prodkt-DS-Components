import {
  tag_styles_default
} from "./chunk.Z3IBIEFW.js";
import {
  LocalizeController
} from "./chunk.NLYU4R6O.js";
import {
  o
} from "./chunk.7BXY5XRG.js";
import {
  emit
} from "./chunk.CDTZZV7W.js";
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

// src/components/tag/tag.ts
var MoyoTag = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.variant = "neutral";
    this.size = "medium";
    this.pill = false;
    this.removable = false;
  }
  handleRemoveClick() {
    emit(this, "moyo-remove");
  }
  render() {
    return $`
      <span
        part="base"
        class=${o({
      tag: true,
      "tag--primary": this.variant === "primary",
      "tag--success": this.variant === "success",
      "tag--neutral": this.variant === "neutral",
      "tag--warning": this.variant === "warning",
      "tag--danger": this.variant === "danger",
      "tag--text": this.variant === "text",
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      "tag--pill": this.pill,
      "tag--removable": this.removable
    })}
      >
        <span part="content" class="tag__content">
          <slot></slot>
        </span>

        ${this.removable ? $`
              <moyo-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
              ></moyo-icon-button>
            ` : ""}
      </span>
    `;
  }
};
MoyoTag.styles = tag_styles_default;
__decorateClass([
  e({ reflect: true })
], MoyoTag.prototype, "variant", 2);
__decorateClass([
  e({ reflect: true })
], MoyoTag.prototype, "size", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoTag.prototype, "pill", 2);
__decorateClass([
  e({ type: Boolean })
], MoyoTag.prototype, "removable", 2);
MoyoTag = __decorateClass([
  n("moyo-tag")
], MoyoTag);

export {
  MoyoTag
};
