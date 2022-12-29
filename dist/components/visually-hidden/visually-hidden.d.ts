import { LitElement } from 'lit';
export default class MoyoVisuallyHidden extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'moyo-visually-hidden': MoyoVisuallyHidden;
    }
}
