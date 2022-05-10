import {
  watch
} from "./chunk.PQ5VRVXF.js";
import {
  emit
} from "./chunk.CDTZZV7W.js";
import {
  e,
  e2,
  n
} from "./chunk.72DLNKYZ.js";
import {
  animation_styles_default
} from "./chunk.337E2633.js";
import {
  $,
  s
} from "./chunk.PEQICPKO.js";
import {
  dist_exports
} from "./chunk.N4ABZTWF.js";
import {
  __decorateClass
} from "./chunk.ICGTMF5Z.js";

// src/components/animation/animation.ts
var MoyoAnimation = class extends s {
  constructor() {
    super(...arguments);
    this.hasStarted = false;
    this.name = "none";
    this.play = false;
    this.delay = 0;
    this.direction = "normal";
    this.duration = 1e3;
    this.easing = "linear";
    this.endDelay = 0;
    this.fill = "auto";
    this.iterations = Infinity;
    this.iterationStart = 0;
    this.playbackRate = 1;
  }
  get currentTime() {
    var _a, _b;
    return (_b = (_a = this.animation) == null ? void 0 : _a.currentTime) != null ? _b : 0;
  }
  set currentTime(time) {
    if (this.animation) {
      this.animation.currentTime = time;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.createAnimation();
    this.handleAnimationCancel = this.handleAnimationCancel.bind(this);
    this.handleAnimationFinish = this.handleAnimationFinish.bind(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.destroyAnimation();
  }
  handleAnimationChange() {
    if (!this.hasUpdated) {
      return;
    }
    this.createAnimation();
  }
  handleAnimationFinish() {
    this.play = false;
    this.hasStarted = false;
    emit(this, "moyo-finish");
  }
  handleAnimationCancel() {
    this.play = false;
    this.hasStarted = false;
    emit(this, "moyo-cancel");
  }
  handlePlayChange() {
    if (this.animation) {
      if (this.play && !this.hasStarted) {
        this.hasStarted = true;
        emit(this, "moyo-start");
      }
      if (this.play) {
        this.animation.play();
      } else {
        this.animation.pause();
      }
      return true;
    }
    return false;
  }
  handlePlaybackRateChange() {
    if (this.animation) {
      this.animation.playbackRate = this.playbackRate;
    }
  }
  handleSlotChange() {
    this.destroyAnimation();
    this.createAnimation();
  }
  async createAnimation() {
    var _a, _b;
    const easing = (_a = dist_exports.easings[this.easing]) != null ? _a : this.easing;
    const keyframes = (_b = this.keyframes) != null ? _b : dist_exports[this.name];
    const slot = await this.defaultSlot;
    const element = slot.assignedElements()[0];
    if (!element || !keyframes) {
      return false;
    }
    this.destroyAnimation();
    this.animation = element.animate(keyframes, {
      delay: this.delay,
      direction: this.direction,
      duration: this.duration,
      easing,
      endDelay: this.endDelay,
      fill: this.fill,
      iterationStart: this.iterationStart,
      iterations: this.iterations
    });
    this.animation.playbackRate = this.playbackRate;
    this.animation.addEventListener("cancel", this.handleAnimationCancel);
    this.animation.addEventListener("finish", this.handleAnimationFinish);
    if (this.play) {
      this.hasStarted = true;
      emit(this, "moyo-start");
    } else {
      this.animation.pause();
    }
    return true;
  }
  destroyAnimation() {
    if (this.animation) {
      this.animation.cancel();
      this.animation.removeEventListener("cancel", this.handleAnimationCancel);
      this.animation.removeEventListener("finish", this.handleAnimationFinish);
      this.hasStarted = false;
    }
  }
  cancel() {
    var _a;
    (_a = this.animation) == null ? void 0 : _a.cancel();
  }
  finish() {
    var _a;
    (_a = this.animation) == null ? void 0 : _a.finish();
  }
  render() {
    return $` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
};
MoyoAnimation.styles = animation_styles_default;
__decorateClass([
  e2("slot")
], MoyoAnimation.prototype, "defaultSlot", 2);
__decorateClass([
  e()
], MoyoAnimation.prototype, "name", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoAnimation.prototype, "play", 2);
__decorateClass([
  e({ type: Number })
], MoyoAnimation.prototype, "delay", 2);
__decorateClass([
  e()
], MoyoAnimation.prototype, "direction", 2);
__decorateClass([
  e({ type: Number })
], MoyoAnimation.prototype, "duration", 2);
__decorateClass([
  e()
], MoyoAnimation.prototype, "easing", 2);
__decorateClass([
  e({ attribute: "end-delay", type: Number })
], MoyoAnimation.prototype, "endDelay", 2);
__decorateClass([
  e()
], MoyoAnimation.prototype, "fill", 2);
__decorateClass([
  e({ type: Number })
], MoyoAnimation.prototype, "iterations", 2);
__decorateClass([
  e({ attribute: "iteration-start", type: Number })
], MoyoAnimation.prototype, "iterationStart", 2);
__decorateClass([
  e({ attribute: false })
], MoyoAnimation.prototype, "keyframes", 2);
__decorateClass([
  e({ attribute: "playback-rate", type: Number })
], MoyoAnimation.prototype, "playbackRate", 2);
__decorateClass([
  watch("name"),
  watch("delay"),
  watch("direction"),
  watch("duration"),
  watch("easing"),
  watch("endDelay"),
  watch("fill"),
  watch("iterations"),
  watch("iterationsStart"),
  watch("keyframes")
], MoyoAnimation.prototype, "handleAnimationChange", 1);
__decorateClass([
  watch("play")
], MoyoAnimation.prototype, "handlePlayChange", 1);
__decorateClass([
  watch("playbackRate")
], MoyoAnimation.prototype, "handlePlaybackRateChange", 1);
MoyoAnimation = __decorateClass([
  n("moyo-animation")
], MoyoAnimation);

export {
  MoyoAnimation
};
