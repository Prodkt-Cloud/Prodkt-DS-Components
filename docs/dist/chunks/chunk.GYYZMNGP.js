import {
  form_control_styles_default
} from "./chunk.F65LFIGE.js";
import {
  focusVisibleSelector
} from "./chunk.IVOHDN3H.js";
import {
  component_styles_default
} from "./chunk.KNVYX3FQ.js";
import {
  r
} from "./chunk.PEQICPKO.js";

// src/components/range/range.styles.ts
var range_styles_default = r`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--moyo-color-neutral-200);
    --track-color-inactive: var(--moyo-color-neutral-200);
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--moyo-input-height-medium);
    vertical-align: middle;
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--moyo-color-primary-600);
    border: solid var(--moyo-input-border-width) var(--moyo-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    transition: var(--moyo-transition-fast) border-color, var(--moyo-transition-fast) background-color,
      var(--moyo-transition-fast) color, var(--moyo-transition-fast) box-shadow, var(--moyo-transition-fast) transform;
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--moyo-color-primary-500);
    border-color: var(--moyo-color-primary-500);
  }

  .range__control:enabled${focusVisibleSelector}::-webkit-slider-thumb {
    background-color: var(--moyo-color-primary-500);
    border-color: var(--moyo-color-primary-500);
    box-shadow: var(--moyo-focus-ring);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--moyo-color-primary-500);
    border-color: var(--moyo-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--moyo-color-primary-600);
    border-color: var(--moyo-color-primary-600);
    transition: var(--moyo-transition-fast) border-color, var(--moyo-transition-fast) background-color,
      var(--moyo-transition-fast) color, var(--moyo-transition-fast) box-shadow, var(--moyo-transition-fast) transform;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--moyo-color-primary-500);
    border-color: var(--moyo-color-primary-500);
  }

  .range__control:enabled${focusVisibleSelector}::-moz-range-thumb {
    background-color: var(--moyo-color-primary-500);
    border-color: var(--moyo-color-primary-500);
    box-shadow: var(--moyo-focus-ring);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--moyo-color-primary-500);
    border-color: var(--moyo-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control${focusVisibleSelector} {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--moyo-z-index-tooltip);
    left: 1px;
    border-radius: var(--moyo-tooltip-border-radius);
    background-color: var(--moyo-tooltip-background-color);
    font-family: var(--moyo-tooltip-font-family);
    font-size: var(--moyo-tooltip-font-size);
    font-weight: var(--moyo-tooltip-font-weight);
    line-height: var(--moyo-tooltip-line-height);
    color: var(--moyo-tooltip-color);
    opacity: 0;
    padding: var(--moyo-tooltip-padding);
    transition: var(--moyo-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    margin-left: calc(-1 * var(--moyo-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--moyo-tooltip-arrow-size) solid var(--moyo-tooltip-background-color);
    border-left: var(--moyo-tooltip-arrow-size) solid transparent;
    border-right: var(--moyo-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--moyo-tooltip-arrow-size) solid var(--moyo-tooltip-background-color);
    border-left: var(--moyo-tooltip-arrow-size) solid transparent;
    border-right: var(--moyo-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }
`;

export {
  range_styles_default
};
