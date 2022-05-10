import {
  button_styles_default
} from "./chunk.R3BCQZ3Z.js";
import {
  FormSubmitController
} from "./chunk.N2T2IJMA.js";
import {
  l as l2,
  r
} from "./chunk.LOYEL7IY.js";
import {
  HasSlotController
} from "./chunk.UHGCFDN7.js";
import {
  o
} from "./chunk.7BXY5XRG.js";
import {
  l
} from "./chunk.R37SUKY2.js";
import {
  emit
} from "./chunk.CDTZZV7W.js";
import {
  e,
  i,
  n,
  t
} from "./chunk.72DLNKYZ.js";
import {
  s
} from "./chunk.PEQICPKO.js";
import {
  __decorateClass
} from "./chunk.ICGTMF5Z.js";

// src/components/button/button.ts
var MoyoButton = class extends s {
  constructor() {
    super(...arguments);
    this.formSubmitController = new FormSubmitController(this, {
      form: (input) => {
        if (input.hasAttribute("form")) {
          const doc = input.getRootNode();
          const formId = input.getAttribute("form");
          return doc.getElementById(formId);
        }
        return input.closest("form");
      }
    });
    this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
    this.hasFocus = false;
    this.variant = "default";
    this.size = "medium";
    this.caret = false;
    this.disabled = false;
    this.loading = false;
    this.outline = false;
    this.pill = false;
    this.circle = false;
    this.type = "button";
  }
  click() {
    this.button.click();
  }
  focus(options) {
    this.button.focus(options);
  }
  blur() {
    this.button.blur();
  }
  handleBlur() {
    this.hasFocus = false;
    emit(this, "moyo-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    emit(this, "moyo-focus");
  }
  handleClick(event) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (this.type === "submit") {
      this.formSubmitController.submit(this);
    }
  }
  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? r`a` : r`button`;
    return l2`
      <${tag}
        part="base"
        class=${o({
      button: true,
      "button--default": this.variant === "default",
      "button--primary": this.variant === "primary",
      "button--success": this.variant === "success",
      "button--neutral": this.variant === "neutral",
      "button--warning": this.variant === "warning",
      "button--danger": this.variant === "danger",
      "button--text": this.variant === "text",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--caret": this.caret,
      "button--circle": this.circle,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--loading": this.loading,
      "button--standard": !this.outline,
      "button--outline": this.outline,
      "button--pill": this.pill,
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
        ?disabled=${l(isLink ? void 0 : this.disabled)}
        type=${l(isLink ? void 0 : this.type)}
        name=${l(isLink ? void 0 : this.name)}
        value=${l(isLink ? void 0 : this.value)}
        href=${l(isLink ? this.href : void 0)}
        target=${l(isLink ? this.target : void 0)}
        download=${l(isLink ? this.download : void 0)}
        rel=${l(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${l(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret ? l2`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              ` : ""}
        ${this.loading ? l2`<moyo-spinner></moyo-spinner>` : ""}
      </${tag}>
    `;
  }
};
MoyoButton.styles = button_styles_default;
__decorateClass([
  i(".button")
], MoyoButton.prototype, "button", 2);
__decorateClass([
  t()
], MoyoButton.prototype, "hasFocus", 2);
__decorateClass([
  e({ reflect: true })
], MoyoButton.prototype, "variant", 2);
__decorateClass([
  e({ reflect: true })
], MoyoButton.prototype, "size", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoButton.prototype, "caret", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoButton.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoButton.prototype, "loading", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoButton.prototype, "outline", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoButton.prototype, "pill", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoButton.prototype, "circle", 2);
__decorateClass([
  e()
], MoyoButton.prototype, "type", 2);
__decorateClass([
  e()
], MoyoButton.prototype, "name", 2);
__decorateClass([
  e()
], MoyoButton.prototype, "value", 2);
__decorateClass([
  e()
], MoyoButton.prototype, "href", 2);
__decorateClass([
  e()
], MoyoButton.prototype, "target", 2);
__decorateClass([
  e()
], MoyoButton.prototype, "download", 2);
__decorateClass([
  e()
], MoyoButton.prototype, "form", 2);
__decorateClass([
  e({ attribute: "formaction" })
], MoyoButton.prototype, "formAction", 2);
__decorateClass([
  e({ attribute: "formmethod" })
], MoyoButton.prototype, "formMethod", 2);
__decorateClass([
  e({ attribute: "formnovalidate", type: Boolean })
], MoyoButton.prototype, "formNoValidate", 2);
__decorateClass([
  e({ attribute: "formtarget" })
], MoyoButton.prototype, "formTarget", 2);
MoyoButton = __decorateClass([
  n("moyo-button")
], MoyoButton);

export {
  MoyoButton
};
