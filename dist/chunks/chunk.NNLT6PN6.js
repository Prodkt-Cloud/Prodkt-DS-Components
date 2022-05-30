import {
  animated_image_styles_default
} from "./chunk.ZFBBQO6I.js";
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

// src/components/animated-image/animated-image.ts
var MoyoAnimatedImage = class extends s {
  constructor() {
    super(...arguments);
    this.isLoaded = false;
  }
  handleClick() {
    this.play = !this.play;
  }
  handleLoad() {
    const canvas = document.createElement("canvas");
    const { width, height } = this.animatedImage;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(this.animatedImage, 0, 0, width, height);
    this.frozenFrame = canvas.toDataURL("image/gif");
    if (!this.isLoaded) {
      emit(this, "moyo-load");
      this.isLoaded = true;
    }
  }
  handleError() {
    emit(this, "moyo-error");
  }
  handlePlayChange() {
    if (this.play) {
      this.animatedImage.src = "";
      this.animatedImage.src = this.src;
    }
  }
  handleSrcChange() {
    this.isLoaded = false;
  }
  render() {
    return $`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play ? "false" : "true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded ? $`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play ? "true" : "false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                ${this.play ? $`<moyo-icon part="pause-icon" name="pause-fill" library="system"></moyo-icon>` : $`<moyo-icon part="play-icon" name="play-fill" library="system"></moyo-icon>`}
              </div>
            ` : ""}
      </div>
    `;
  }
};
MoyoAnimatedImage.styles = animated_image_styles_default;
__decorateClass([
  t()
], MoyoAnimatedImage.prototype, "frozenFrame", 2);
__decorateClass([
  t()
], MoyoAnimatedImage.prototype, "isLoaded", 2);
__decorateClass([
  i(".animated-image__animated")
], MoyoAnimatedImage.prototype, "animatedImage", 2);
__decorateClass([
  e()
], MoyoAnimatedImage.prototype, "src", 2);
__decorateClass([
  e()
], MoyoAnimatedImage.prototype, "alt", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], MoyoAnimatedImage.prototype, "play", 2);
__decorateClass([
  watch("play")
], MoyoAnimatedImage.prototype, "handlePlayChange", 1);
__decorateClass([
  watch("src")
], MoyoAnimatedImage.prototype, "handleSrcChange", 1);
MoyoAnimatedImage = __decorateClass([
  n("moyo-animated-image")
], MoyoAnimatedImage);

export {
  MoyoAnimatedImage
};
