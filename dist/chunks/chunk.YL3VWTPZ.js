import {
  LocalizeController
} from "./chunk.KD5Z264M.js";
import {
  e,
  n
} from "./chunk.72DLNKYZ.js";
import {
  s
} from "./chunk.PEQICPKO.js";
import {
  __decorateClass
} from "./chunk.ICGTMF5Z.js";

// src/components/format-number/format-number.ts
var MoyoFormatNumber = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.type = "decimal";
    this.noGrouping = false;
    this.currency = "USD";
    this.currencyDisplay = "symbol";
  }
  render() {
    if (isNaN(this.value)) {
      return "";
    }
    return this.localize.number(this.value, {
      style: this.type,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits
    });
  }
};
__decorateClass([
  e({ type: Number })
], MoyoFormatNumber.prototype, "value", 2);
__decorateClass([
  e()
], MoyoFormatNumber.prototype, "lang", 2);
__decorateClass([
  e()
], MoyoFormatNumber.prototype, "type", 2);
__decorateClass([
  e({ attribute: "no-grouping", type: Boolean })
], MoyoFormatNumber.prototype, "noGrouping", 2);
__decorateClass([
  e()
], MoyoFormatNumber.prototype, "currency", 2);
__decorateClass([
  e({ attribute: "currency-display" })
], MoyoFormatNumber.prototype, "currencyDisplay", 2);
__decorateClass([
  e({ attribute: "minimum-integer-digits", type: Number })
], MoyoFormatNumber.prototype, "minimumIntegerDigits", 2);
__decorateClass([
  e({ attribute: "minimum-fraction-digits", type: Number })
], MoyoFormatNumber.prototype, "minimumFractionDigits", 2);
__decorateClass([
  e({ attribute: "maximum-fraction-digits", type: Number })
], MoyoFormatNumber.prototype, "maximumFractionDigits", 2);
__decorateClass([
  e({ attribute: "minimum-significant-digits", type: Number })
], MoyoFormatNumber.prototype, "minimumSignificantDigits", 2);
__decorateClass([
  e({ attribute: "maximum-significant-digits", type: Number })
], MoyoFormatNumber.prototype, "maximumSignificantDigits", 2);
MoyoFormatNumber = __decorateClass([
  n("moyo-format-number")
], MoyoFormatNumber);

export {
  MoyoFormatNumber
};
