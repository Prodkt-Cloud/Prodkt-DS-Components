import { LitElement } from 'lit';
export default class MoyoDivider extends LitElement {
    static styles: import("lit").CSSResult;
    vertical: boolean;
    firstUpdated(): void;
    handleVerticalChange(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'moyo-divider': MoyoDivider;
    }
}
