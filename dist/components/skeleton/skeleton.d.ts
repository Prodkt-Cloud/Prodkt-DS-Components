import { LitElement } from 'lit';
export default class MoyoSkeleton extends LitElement {
    static styles: import("lit").CSSResult;
    effect: 'pulse' | 'sheen' | 'none';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'moyo-skeleton': MoyoSkeleton;
    }
}
