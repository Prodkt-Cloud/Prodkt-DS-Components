import {
  component_styles_default
} from "./chunk.ZOHC4QYC.js";
import {
  r
} from "./chunk.IXU25QGK.js";

// src/components/badge/badge.styles.ts
var badge_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--moyo-font-size-x-small);
    font-weight: var(--moyo-font-weight-semibold);
    letter-spacing: var(--moyo-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--moyo-border-radius-medium);
    border: solid 0px var(--moyo-color-neutral-0);
    white-space: nowrap;
    padding: 3px 6px;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--moyo-color-primary-600);
    color: var(--moyo-color-neutral-0);
  }

  .badge--success {
    background-color: var(--moyo-color-success-600);
    color: var(--moyo-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--moyo-color-neutral-600);
    color: var(--moyo-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--moyo-color-warning-600);
    color: var(--moyo-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--moyo-color-danger-600);
    color: var(--moyo-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--moyo-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--moyo-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--moyo-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--moyo-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--moyo-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--moyo-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;

export {
  badge_styles_default
};
