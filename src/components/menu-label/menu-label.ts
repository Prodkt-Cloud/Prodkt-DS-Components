import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './menu-label.styles';

/**
 * @since Beta-46
 * @status stable
 *
 * @slot - The menu label's content.
 *
 * @csspart base - The component's internal wrapper.
 */
@customElement('moyo-menu-label')
export default class MoyoMenuLabel extends LitElement {
  static styles = styles;

  render() {
    return html`
      <div part="base" class="menu-label">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'moyo-menu-label': MoyoMenuLabel;
  }
}
