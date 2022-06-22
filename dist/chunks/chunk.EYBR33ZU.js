import {
  breadcrumb_item_styles_default
} from "./chunk.QGYULHH5.js";
import {
  HasSlotController
} from "./chunk.UHGCFDN7.js";
import {
  l
} from "./chunk.EEOR7ZZH.js";
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

// src/components/breadcrumb-item/breadcrumb-item.ts
var MoyoBreadcrumbItem = class extends s {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "prefix", "suffix");
    this.rel = "noreferrer noopener";
  }
  render() {
    const isLink = this.href ? true : false;
    return $`
      <div
        part="base"
        class=${o({
      "breadcrumb-item": true,
      "breadcrumb-item--has-prefix": this.hasSlotController.test("prefix"),
      "breadcrumb-item--has-suffix": this.hasSlotController.test("suffix")
    })}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${isLink ? $`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${l(this.target ? this.target : void 0)}"
                rel=${l(this.target ? this.rel : void 0)}
              >
                <slot></slot>
              </a>
            ` : $`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `;
  }
};
MoyoBreadcrumbItem.styles = breadcrumb_item_styles_default;
__decorateClass([
  e()
], MoyoBreadcrumbItem.prototype, "href", 2);
__decorateClass([
  e()
], MoyoBreadcrumbItem.prototype, "target", 2);
__decorateClass([
  e()
], MoyoBreadcrumbItem.prototype, "rel", 2);
MoyoBreadcrumbItem = __decorateClass([
  n("moyo-breadcrumb-item")
], MoyoBreadcrumbItem);

export {
  MoyoBreadcrumbItem
};
