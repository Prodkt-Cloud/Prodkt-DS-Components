import {
  e,
  i,
  n
} from "./chunk.QCFW6O2I.js";
import {
  breadcrumb_styles_default
} from "./chunk.F6CSIHSR.js";
import {
  $,
  s
} from "./chunk.IXU25QGK.js";
import {
  __decorateClass
} from "./chunk.K2NRSETB.js";

// src/components/breadcrumb/breadcrumb.ts
var MoyoBreadcrumb = class extends s {
  constructor() {
    super(...arguments);
    this.label = "Breadcrumb";
  }
  getSeparator() {
    const separator = this.separatorSlot.assignedElements({ flatten: true })[0];
    const clone = separator.cloneNode(true);
    [clone, ...clone.querySelectorAll("[id]")].forEach((el) => el.removeAttribute("id"));
    clone.slot = "separator";
    return clone;
  }
  handleSlotChange() {
    const items = [...this.defaultSlot.assignedElements({ flatten: true })].filter((item) => item.tagName.toLowerCase() === "moyo-breadcrumb-item");
    items.forEach((item, index) => {
      const separator = item.querySelector('[slot="separator"]');
      if (separator === null) {
        item.append(this.getSeparator());
      }
      if (index === items.length - 1) {
        item.setAttribute("aria-current", "page");
      } else {
        item.removeAttribute("aria-current");
      }
    });
  }
  render() {
    return $`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <moyo-icon name="chevron-right" library="system"></moyo-icon>
      </slot>
    `;
  }
};
MoyoBreadcrumb.styles = breadcrumb_styles_default;
__decorateClass([
  i("slot")
], MoyoBreadcrumb.prototype, "defaultSlot", 2);
__decorateClass([
  i('slot[name="separator"]')
], MoyoBreadcrumb.prototype, "separatorSlot", 2);
__decorateClass([
  e()
], MoyoBreadcrumb.prototype, "label", 2);
MoyoBreadcrumb = __decorateClass([
  n("moyo-breadcrumb")
], MoyoBreadcrumb);

export {
  MoyoBreadcrumb
};
