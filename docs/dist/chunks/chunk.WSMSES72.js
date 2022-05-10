import {
  textarea_styles_default
} from "./chunk.PDDE75RC.js";
import {
  l as l2
} from "./chunk.O2TDYW3A.js";
import {
  FormSubmitController
} from "./chunk.N2T2IJMA.js";
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
  watch
} from "./chunk.PQ5VRVXF.js";
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
  $,
  s
} from "./chunk.PEQICPKO.js";
import {
  __decorateClass
} from "./chunk.ICGTMF5Z.js";

// src/components/textarea/textarea.ts
var MoyoTextarea = class extends s {
  constructor() {
    super(...arguments);
    this.formSubmitController = new FormSubmitController(this);
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.hasFocus = false;
    this.size = "medium";
    this.value = "";
    this.filled = false;
    this.label = "";
    this.helpText = "";
    this.rows = 4;
    this.resize = "vertical";
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.invalid = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight());
    this.updateComplete.then(() => {
      this.setTextareaHeight();
      this.resizeObserver.observe(this.input);
    });
  }
  firstUpdated() {
    this.invalid = !this.input.checkValidity();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this.input);
  }
  focus(options) {
    this.input.focus(options);
  }
  blur() {
    this.input.blur();
  }
  select() {
    this.input.select();
  }
  scrollPosition(position) {
    if (position) {
      if (typeof position.top === "number")
        this.input.scrollTop = position.top;
      if (typeof position.left === "number")
        this.input.scrollLeft = position.left;
      return;
    }
    return {
      top: this.input.scrollTop,
      left: this.input.scrollTop
    };
  }
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  setRangeText(replacement, start, end, selectMode = "preserve") {
    this.input.setRangeText(replacement, start, end, selectMode);
    if (this.value !== this.input.value) {
      this.value = this.input.value;
      emit(this, "moyo-input");
    }
    if (this.value !== this.input.value) {
      this.value = this.input.value;
      this.setTextareaHeight();
      emit(this, "moyo-input");
      emit(this, "moyo-change");
    }
  }
  reportValidity() {
    return this.input.reportValidity();
  }
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }
  handleBlur() {
    this.hasFocus = false;
    emit(this, "moyo-blur");
  }
  handleChange() {
    this.value = this.input.value;
    this.setTextareaHeight();
    emit(this, "moyo-change");
  }
  handleDisabledChange() {
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
  }
  handleFocus() {
    this.hasFocus = true;
    emit(this, "moyo-focus");
  }
  handleInput() {
    this.value = this.input.value;
    this.setTextareaHeight();
    emit(this, "moyo-input");
  }
  handleRowsChange() {
    this.setTextareaHeight();
  }
  handleValueChange() {
    this.invalid = !this.input.checkValidity();
  }
  setTextareaHeight() {
    if (this.resize === "auto") {
      this.input.style.height = "auto";
      this.input.style.height = `${this.input.scrollHeight}px`;
    } else {
      this.input.style.height = void 0;
    }
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    return $`
      <div
        part="form-control"
        class=${o({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${o({
      textarea: true,
      "textarea--small": this.size === "small",
      "textarea--medium": this.size === "medium",
      "textarea--large": this.size === "large",
      "textarea--standard": !this.filled,
      "textarea--filled": this.filled,
      "textarea--disabled": this.disabled,
      "textarea--focused": this.hasFocus,
      "textarea--empty": this.value.length === 0,
      "textarea--invalid": this.invalid,
      "textarea--resize-none": this.resize === "none",
      "textarea--resize-vertical": this.resize === "vertical",
      "textarea--resize-auto": this.resize === "auto"
    })}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              name=${l(this.name)}
              .value=${l2(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${l(this.placeholder)}
              rows=${l(this.rows)}
              minlength=${l(this.minlength)}
              maxlength=${l(this.maxlength)}
              autocapitalize=${l(this.autocapitalize)}
              autocorrect=${l(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${l(this.spellcheck)}
              enterkeyhint=${l(this.enterkeyhint)}
              inputmode=${l(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
MoyoTextarea.styles = textarea_styles_default;
__decorateClass([
  i(".textarea__control")
], MoyoTextarea.prototype, "input", 2);
__decorateClass([
  t()
], MoyoTextarea.prototype, "hasFocus", 2);
__decorateClass([
  e({ reflect: true })
], MoyoTextarea.prototype, "size", 2);
__decorateClass([
  e()
], MoyoTextarea.prototype, "name", 2);
__decorateClass([
  e()
], MoyoTextarea.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoTextarea.prototype, "filled", 2);
__decorateClass([
  e()
], MoyoTextarea.prototype, "label", 2);
__decorateClass([
  e({ attribute: "help-text" })
], MoyoTextarea.prototype, "helpText", 2);
__decorateClass([
  e()
], MoyoTextarea.prototype, "placeholder", 2);
__decorateClass([
  e({ type: Number })
], MoyoTextarea.prototype, "rows", 2);
__decorateClass([
  e()
], MoyoTextarea.prototype, "resize", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoTextarea.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoTextarea.prototype, "readonly", 2);
__decorateClass([
  e({ type: Number })
], MoyoTextarea.prototype, "minlength", 2);
__decorateClass([
  e({ type: Number })
], MoyoTextarea.prototype, "maxlength", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoTextarea.prototype, "required", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoTextarea.prototype, "invalid", 2);
__decorateClass([
  e()
], MoyoTextarea.prototype, "autocapitalize", 2);
__decorateClass([
  e()
], MoyoTextarea.prototype, "autocorrect", 2);
__decorateClass([
  e()
], MoyoTextarea.prototype, "autocomplete", 2);
__decorateClass([
  e({ type: Boolean })
], MoyoTextarea.prototype, "autofocus", 2);
__decorateClass([
  e()
], MoyoTextarea.prototype, "enterkeyhint", 2);
__decorateClass([
  e({ type: Boolean })
], MoyoTextarea.prototype, "spellcheck", 2);
__decorateClass([
  e()
], MoyoTextarea.prototype, "inputmode", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], MoyoTextarea.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("rows", { waitUntilFirstUpdate: true })
], MoyoTextarea.prototype, "handleRowsChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], MoyoTextarea.prototype, "handleValueChange", 1);
MoyoTextarea = __decorateClass([
  n("moyo-textarea")
], MoyoTextarea);

export {
  MoyoTextarea
};
