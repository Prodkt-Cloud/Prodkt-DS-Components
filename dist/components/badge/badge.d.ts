import { LitElement } from 'lit';
export default class MoyoBadge extends LitElement {
    static styles: import("lit").CSSResult;
    variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger';
    pill: boolean;
    pulse: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'moyo-badge': MoyoBadge;
    }
}
