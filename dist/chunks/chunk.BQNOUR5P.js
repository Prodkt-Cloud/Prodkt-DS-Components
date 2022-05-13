import {
  l as l2
} from "./chunk.O2TDYW3A.js";
import {
  FormSubmitController
} from "./chunk.N2T2IJMA.js";
import {
  checkbox_styles_default
} from "./chunk.SZTKF4H3.js";
import {
  o
} from "./chunk.7BXY5XRG.js";
import {
  watch
} from "./chunk.PQ5VRVXF.js";
import {
  emit
} from "./chunk.CDTZZV7W.js";
import {
  l
} from "./chunk.R37SUKY2.js";
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

// src/components/checkbox/checkbox.ts
var MoyoCheckbox = class extends s {
  constructor() {
    super(...arguments);
    this.formSubmitController = new FormSubmitController(this, {
      value: (control) => control.checked ? control.value : void 0
    });
    this.hasFocus = false;
    this.disabled = false;
    this.required = false;
    this.checked = false;
    this.indeterminate = false;
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
  handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    emit(this, "moyo-change");
  }
  handleBlur() {
    this.hasFocus = false;
    emit(this, "moyo-blur");
  }
  handleDisabledChange() {
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
  }
  handleFocus() {
    this.hasFocus = true;
    emit(this, "moyo-focus");
  }
  handleStateChange() {
    this.invalid = !this.input.checkValidity();
  }
  render() {
    return $`
      <label
        part="base"
        class=${o({
      checkbox: true,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate
    })}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          name=${l(this.name)}
          value=${l(this.value)}
          .indeterminate=${l2(this.indeterminate)}
          .checked=${l2(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked ? "true" : "false"}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span part="control" class="checkbox__control">
          ${this.checked ? $`
                <span part="checked-icon" class="checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(3.428571, 3.428571)">
                          <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                          <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              ` : ""}
          ${!this.checked && this.indeterminate ? $`
                <span part="indeterminate-icon" class="checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(2.285714, 6.857143)">
                          <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              ` : ""}
        </span>

        <span part="label" class="checkbox__label">
          <slot></slot>
        </span>
      </label>
    `;
  }
};
MoyoCheckbox.styles = checkbox_styles_default;
__decorateClass([
  i('input[type="checkbox"]')
], MoyoCheckbox.prototype, "input", 2);
__decorateClass([
  t()
], MoyoCheckbox.prototype, "hasFocus", 2);
__decorateClass([
  e()
], MoyoCheckbox.prototype, "name", 2);
__decorateClass([
  e()
], MoyoCheckbox.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoCheckbox.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoCheckbox.prototype, "required", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoCheckbox.prototype, "checked", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoCheckbox.prototype, "indeterminate", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoCheckbox.prototype, "invalid", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], MoyoCheckbox.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("checked", { waitUntilFirstUpdate: true }),
  watch("indeterminate", { waitUntilFirstUpdate: true })
], MoyoCheckbox.prototype, "handleStateChange", 1);
MoyoCheckbox = __decorateClass([
  n("moyo-checkbox")
], MoyoCheckbox);

export {
  MoyoCheckbox
};
