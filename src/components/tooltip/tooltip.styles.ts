import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip-target {
    display: contents;
  }

  .tooltip-positioner {
    position: absolute;
    z-index: var(--moyo-z-index-tooltip);
    pointer-events: none;
  }

  .tooltip-positioner[data-placement^='top'] .tooltip {
    transform-origin: bottom;
  }

  .tooltip-positioner[data-placement^='bottom'] .tooltip {
    transform-origin: top;
  }

  .tooltip-positioner[data-placement^='left'] .tooltip {
    transform-origin: right;
  }

  .tooltip-positioner[data-placement^='right'] .tooltip {
    transform-origin: left;
  }

  .tooltip__content {
    max-width: var(--max-width);
    border-radius: var(--moyo-tooltip-border-radius);
    background-color: var(--moyo-tooltip-background-color);
    font-family: var(--moyo-tooltip-font-family);
    font-size: var(--moyo-tooltip-font-size);
    font-weight: var(--moyo-tooltip-font-weight);
    line-height: var(--moyo-tooltip-line-height);
    color: var(--moyo-tooltip-color);
    padding: var(--moyo-tooltip-padding);
  }

  .tooltip__arrow {
    position: absolute;
    background: var(--moyo-tooltip-background-color);
    width: calc(var(--moyo-tooltip-arrow-size) * 2);
    height: calc(var(--moyo-tooltip-arrow-size) * 2);
    transform: rotate(45deg);
    z-index: -1;
  }
`;
