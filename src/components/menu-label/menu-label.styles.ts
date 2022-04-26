import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu-label {
    font-family: var(--moyo-font-sans);
    font-size: var(--moyo-font-size-small);
    font-weight: var(--moyo-font-weight-semibold);
    line-height: var(--moyo-line-height-normal);
    letter-spacing: var(--moyo-letter-spacing-normal);
    color: var(--moyo-color-neutral-500);
    padding: var(--moyo-spacing-2x-small) var(--moyo-spacing-x-large);
    user-select: none;
  }
`;
