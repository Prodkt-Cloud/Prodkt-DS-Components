import {
  switch_styles_default
} from "./chunk.WKPGOHIK.js";
import {
  l as l2
} from "./chunk.QWUM3SHZ.js";
import {
  FormSubmitController
} from "./chunk.ATHOPGQC.js";
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
  o
} from "./chunk.STPE66T5.js";
import {
  e,
  i,
  n,
  t
} from "./chunk.QCFW6O2I.js";
import {
  $,
  s
} from "./chunk.IXU25QGK.js";
import {
  __decorateClass
} from "./chunk.K2NRSETB.js";

// src/components/switch/switch.ts
var MoyoSwitch = class extends s {
  constructor() {
    super(...arguments);
    this.formSubmitController = new FormSubmitController(this, {
      value: (control) => control.checked ? control.value : void 0
    });
    this.hasFocus = false;
    this.disabled = false;
    this.required = false;
    this.checked = false;
    this.invalid = false;
  }
  firstUpdated() {
    this.invalid = !this.input.checkValidity();
  }
  click() {
    this.input.click();
  }
  focus(options) {
    this.input.focus(options);
  }
  blur() {
    this.input.blur();
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
  handleCheckedChange() {
    this.input.checked = this.checked;
    this.invalid = !this.input.checkValidity();
  }
  handleClick() {
    this.checked = !this.checked;
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
  handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.checked = false;
      emit(this, "moyo-change");
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.checked = true;
      emit(this, "moyo-change");
    }
  }
  render() {
    return $`
      <label
        part="base"
        class=${o({
      switch: true,
      "switch--checked": this.checked,
      "switch--disabled": this.disabled,
      "switch--focused": this.hasFocus
    })}
      >
        <input
          class="switch__input"
          type="checkbox"
          name=${l(this.name)}
          value=${l(this.value)}
          .checked=${l2(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked ? "true" : "false"}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <span part="label" class="switch__label">
          <slot></slot>
        </span>
      </label>
    `;
  }
};
MoyoSwitch.styles = switch_styles_default;
__decorateClass([
  i('input[type="checkbox"]')
], MoyoSwitch.prototype, "input", 2);
__decorateClass([
  t()
], MoyoSwitch.prototype, "hasFocus", 2);
__decorateClass([
  e()
], MoyoSwitch.prototype, "name", 2);
__decorateClass([
  e()
], MoyoSwitch.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoSwitch.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoSwitch.prototype, "required", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoSwitch.prototype, "checked", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoSwitch.prototype, "invalid", 2);
__decorateClass([
  watch("checked", { waitUntilFirstUpdate: true })
], MoyoSwitch.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], MoyoSwitch.prototype, "handleDisabledChange", 1);
MoyoSwitch = __decorateClass([
  n("moyo-switch")
], MoyoSwitch);

export {
  MoyoSwitch
};
