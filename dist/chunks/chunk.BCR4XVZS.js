import {
  radio_styles_default
} from "./chunk.WVSS3OD3.js";
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

// src/components/radio/radio.ts
var MoyoRadio = class extends s {
  constructor() {
    super(...arguments);
    this.formSubmitController = new FormSubmitController(this, {
      value: (control) => control.checked ? control.value : void 0
    });
    this.hasFocus = false;
    this.disabled = false;
    this.checked = false;
    this.invalid = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "radio");
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
  handleClick() {
    if (!this.disabled) {
      this.checked = true;
    }
  }
  handleFocus() {
    this.hasFocus = true;
    emit(this, "moyo-focus");
  }
  handleCheckedChange() {
    this.setAttribute("aria-checked", this.checked ? "true" : "false");
    if (this.hasUpdated) {
      emit(this, "moyo-change");
    }
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    if (this.hasUpdated) {
      this.input.disabled = this.disabled;
      this.invalid = !this.input.checkValidity();
    }
  }
  render() {
    return $`
      <label
        part="base"
        class=${o({
      radio: true,
      "radio--checked": this.checked,
      "radio--disabled": this.disabled,
      "radio--focused": this.hasFocus
    })}
      >
        <input
          class="radio__input"
          type="radio"
          name=${l(this.name)}
          value=${l(this.value)}
          .checked=${l2(this.checked)}
          .disabled=${this.disabled}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />
        <span part="control" class="radio__control">
          <span part="checked-icon" class="radio__icon">
            <svg viewBox="0 0 16 16">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g fill="currentColor">
                  <circle cx="8" cy="8" r="3.42857143"></circle>
                </g>
              </g>
            </svg>
          </span>
        </span>

        <span part="label" class="radio__label">
          <slot></slot>
        </span>
      </label>
    `;
  }
};
MoyoRadio.styles = radio_styles_default;
__decorateClass([
  i(".radio__input")
], MoyoRadio.prototype, "input", 2);
__decorateClass([
  t()
], MoyoRadio.prototype, "hasFocus", 2);
__decorateClass([
  e()
], MoyoRadio.prototype, "name", 2);
__decorateClass([
  e()
], MoyoRadio.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoRadio.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoRadio.prototype, "checked", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoRadio.prototype, "invalid", 2);
__decorateClass([
  watch("checked")
], MoyoRadio.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], MoyoRadio.prototype, "handleDisabledChange", 1);
MoyoRadio = __decorateClass([
  n("moyo-radio")
], MoyoRadio);

export {
  MoyoRadio
};
