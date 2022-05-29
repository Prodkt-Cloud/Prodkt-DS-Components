import { LitElement } from 'lit';
export default class MoyoMenuLabel extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'moyo-menu-label': MoyoMenuLabel;
    }
}
