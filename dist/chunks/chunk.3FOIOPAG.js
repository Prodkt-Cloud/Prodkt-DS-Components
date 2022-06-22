import {
  focusVisibleSelector
} from "./chunk.NAG7FARZ.js";
import {
  component_styles_default
} from "./chunk.ZOHC4QYC.js";
import {
  r
} from "./chunk.IXU25QGK.js";

// src/components/rating/rating.styles.ts
var rating_styles_default = r`
  ${component_styles_default}

  :host {
    --symbol-color: var(--moyo-color-neutral-300);
    --symbol-color-active: var(--moyo-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--moyo-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--moyo-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating${focusVisibleSelector} {
    box-shadow: var(--moyo-focus-ring);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbols--indicator {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--symbol-color-active);
    pointer-events: none;
  }

  .rating__symbol {
    transition: var(--moyo-transition-fast) transform;
  }

  .rating__symbol--hover {
    transform: scale(1.2);
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    transform: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }
`;

export {
  rating_styles_default
};
