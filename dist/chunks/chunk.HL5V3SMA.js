import {
  menu_item_styles_default
} from "./chunk.WSICZ5TY.js";
import {
  getTextContent
} from "./chunk.UHGCFDN7.js";
import {
  o
} from "./chunk.STPE66T5.js";
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

// src/components/menu-item/menu-item.ts
var MoyoMenuItem = class extends s {
  constructor() {
    super(...arguments);
    this.checked = false;
    this.value = "";
    this.disabled = false;
  }
  firstUpdated() {
    this.setAttribute("role", "menuitem");
  }
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }
  handleCheckedChange() {
    this.setAttribute("aria-checked", this.checked ? "true" : "false");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();
    if (typeof this.cachedTextLabel === "undefined") {
      this.cachedTextLabel = textLabel;
      return;
    }
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      emit(this, "moyo-label-change");
    }
  }
  render() {
    return $`
      <div
        part="base"
        class=${o({
      "menu-item": true,
      "menu-item--checked": this.checked,
      "menu-item--disabled": this.disabled,
      "menu-item--has-submenu": false
    })}
      >
        <span class="menu-item__check">
          <moyo-icon name="check-lg" library="default" aria-hidden="true"></moyo-icon>
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span class="menu-item__chevron">
          <moyo-icon name="chevron-right" library="default" aria-hidden="true"></moyo-icon>
        </span>
      </div>
    `;
  }
};
MoyoMenuItem.styles = menu_item_styles_default;
__decorateClass([
  i("slot:not([name])")
], MoyoMenuItem.prototype, "defaultSlot", 2);
__decorateClass([
  i(".menu-item")
], MoyoMenuItem.prototype, "menuItem", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoMenuItem.prototype, "checked", 2);
__decorateClass([
  e()
], MoyoMenuItem.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoMenuItem.prototype, "disabled", 2);
__decorateClass([
  watch("checked")
], MoyoMenuItem.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], MoyoMenuItem.prototype, "handleDisabledChange", 1);
MoyoMenuItem = __decorateClass([
  n("moyo-menu-item")
], MoyoMenuItem);

export {
  MoyoMenuItem
};
