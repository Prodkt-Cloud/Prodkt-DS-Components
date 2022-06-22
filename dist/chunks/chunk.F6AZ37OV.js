import {
  card_styles_default
} from "./chunk.JOL32GAL.js";
import {
  HasSlotController
} from "./chunk.UHGCFDN7.js";
import {
  o
} from "./chunk.STPE66T5.js";
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

// src/components/card/card.ts
var MoyoCard = class extends s {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "footer", "header", "image");
  }
  render() {
    return $`
      <div
        part="base"
        class=${o({
      card: true,
      "card--has-footer": this.hasSlotController.test("footer"),
      "card--has-image": this.hasSlotController.test("image"),
      "card--has-header": this.hasSlotController.test("header")
    })}
      >
        <div part="image" class="card__image">
          <slot name="image"></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
};
MoyoCard.styles = card_styles_default;
MoyoCard = __decorateClass([
  n("moyo-card")
], MoyoCard);

export {
  MoyoCard
};
