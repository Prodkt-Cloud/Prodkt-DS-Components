import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--moyo-border-radius-medium);
    font-size: inherit;
    color: var(--moyo-color-neutral-600);
    padding: var(--moyo-spacing-x-small);
    cursor: pointer;
    transition: var(--moyo-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: var(--moyo-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--moyo-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button${focusVisibleSelector} {
    box-shadow: var(--moyo-focus-ring);
  }
`;
