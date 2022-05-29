import { LitElement } from 'lit';
export default class MoyoProgressBar extends LitElement {
    static styles: import("lit").CSSResult;
    private readonly localize;
    value: number;
    indeterminate: boolean;
    label: string;
    lang: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'moyo-progress-bar': MoyoProgressBar;
    }
}
