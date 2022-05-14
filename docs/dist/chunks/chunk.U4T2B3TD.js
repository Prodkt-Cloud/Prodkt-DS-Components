import {
  LocalizeController
} from "./chunk.NLYU4R6O.js";
import {
  e,
  n
} from "./chunk.72DLNKYZ.js";
import {
  $,
  s
} from "./chunk.PEQICPKO.js";
import {
  __decorateClass
} from "./chunk.ICGTMF5Z.js";

// src/components/format-date/format-date.ts
var MoyoFormatDate = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.date = new Date();
    this.hourFormat = "auto";
  }
  render() {
    const date = new Date(this.date);
    const hour12 = this.hourFormat === "auto" ? void 0 : this.hourFormat === "12";
    if (isNaN(date.getMilliseconds())) {
      return void 0;
    }
    return $`
      <time datetime=${date.toISOString()}>
        ${this.localize.date(date, {
      weekday: this.weekday,
      era: this.era,
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      timeZoneName: this.timeZoneName,
      timeZone: this.timeZone,
      hour12
    })}
      </time>
    `;
  }
};
__decorateClass([
  e()
], MoyoFormatDate.prototype, "date", 2);
__decorateClass([
  e()
], MoyoFormatDate.prototype, "lang", 2);
__decorateClass([
  e()
], MoyoFormatDate.prototype, "weekday", 2);
__decorateClass([
  e()
], MoyoFormatDate.prototype, "era", 2);
__decorateClass([
  e()
], MoyoFormatDate.prototype, "year", 2);
__decorateClass([
  e()
], MoyoFormatDate.prototype, "month", 2);
__decorateClass([
  e()
], MoyoFormatDate.prototype, "day", 2);
__decorateClass([
  e()
], MoyoFormatDate.prototype, "hour", 2);
__decorateClass([
  e()
], MoyoFormatDate.prototype, "minute", 2);
__decorateClass([
  e()
], MoyoFormatDate.prototype, "second", 2);
__decorateClass([
  e({ attribute: "time-zone-name" })
], MoyoFormatDate.prototype, "timeZoneName", 2);
__decorateClass([
  e({ attribute: "time-zone" })
], MoyoFormatDate.prototype, "timeZone", 2);
__decorateClass([
  e({ attribute: "hour-format" })
], MoyoFormatDate.prototype, "hourFormat", 2);
MoyoFormatDate = __decorateClass([
  n("moyo-format-date")
], MoyoFormatDate);

export {
  MoyoFormatDate
};
