import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu {
    background: var(--moyo-panel-background-color);
    border: solid var(--moyo-panel-border-width) var(--moyo-panel-border-color);
    border-radius: var(--moyo-border-radius-medium);
    background: var(--moyo-panel-background-color);
    padding: var(--moyo-spacing-x-small) 0;
  }

  ::slotted(moyo-divider) {
    --spacing: var(--moyo-spacing-x-small);
  }
`;
