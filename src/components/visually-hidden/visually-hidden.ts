import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './visually-hidden.styles';

/**
 * @since Beta-46
 * @status stable
 *
 * @slot - The content you'd like to be visually hidden.
 */
@customElement('moyo-visually-hidden')
export default class MoyoVisuallyHidden extends LitElement {
  static styles = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'moyo-visually-hidden': MoyoVisuallyHidden;
  }
}
