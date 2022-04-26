import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--moyo-font-sans);
    font-size: var(--moyo-font-size-small);
    font-weight: var(--moyo-font-weight-semibold);
    border-radius: var(--moyo-border-radius-medium);
    color: var(--moyo-color-neutral-600);
    padding: var(--moyo-spacing-medium) var(--moyo-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--moyo-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab${focusVisibleSelector}:not(.tab--disabled) {
    color: var(--moyo-color-primary-600);
    box-shadow: inset var(--moyo-focus-ring);
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--moyo-color-primary-600);
  }

  .tab.tab--closable {
    padding-right: var(--moyo-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--moyo-font-size-large);
    margin-left: var(--moyo-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--moyo-spacing-3x-small);
  }
`;
