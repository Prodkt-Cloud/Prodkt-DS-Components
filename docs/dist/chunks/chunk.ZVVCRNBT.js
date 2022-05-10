import {
  autoIncrement
} from "./chunk.KFR7NC2M.js";
import {
  tab_styles_default
} from "./chunk.PZ452WQG.js";
import {
  LocalizeController
} from "./chunk.KD5Z264M.js";
import {
  o
} from "./chunk.7BXY5XRG.js";
import {
  emit
} from "./chunk.CDTZZV7W.js";
import {
  e,
  i,
  n
} from "./chunk.72DLNKYZ.js";
import {
  $,
  s
} from "./chunk.PEQICPKO.js";
import {
  __decorateClass
} from "./chunk.ICGTMF5Z.js";

// src/components/tab/tab.ts
var MoyoTab = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.attrId = autoIncrement();
    this.componentId = `moyo-tab-${this.attrId}`;
    this.panel = "";
    this.active = false;
    this.closable = false;
    this.disabled = false;
  }
  focus(options) {
    this.tab.focus(options);
  }
  blur() {
    this.tab.blur();
  }
  handleCloseClick() {
    emit(this, "moyo-close");
  }
  render() {
    this.id = this.id.length > 0 ? this.id : this.componentId;
    return $`
      <div
        part="base"
        class=${o({
      tab: true,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
        role="tab"
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-selected=${this.active ? "true" : "false"}
        tabindex=${this.disabled || !this.active ? "-1" : "0"}
      >
        <slot></slot>
        ${this.closable ? $`
              <moyo-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></moyo-icon-button>
            ` : ""}
      </div>
    `;
  }
};
MoyoTab.styles = tab_styles_default;
__decorateClass([
  i(".tab")
], MoyoTab.prototype, "tab", 2);
__decorateClass([
  e({ reflect: true })
], MoyoTab.prototype, "panel", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoTab.prototype, "active", 2);
__decorateClass([
  e({ type: Boolean })
], MoyoTab.prototype, "closable", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoTab.prototype, "disabled", 2);
__decorateClass([
  e()
], MoyoTab.prototype, "lang", 2);
MoyoTab = __decorateClass([
  n("moyo-tab")
], MoyoTab);

export {
  MoyoTab
};
