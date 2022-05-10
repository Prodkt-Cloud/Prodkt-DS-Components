import { LitElement } from 'lit';
export default class MoyoProgressRing extends LitElement {
    static styles: import("lit").CSSResult;
    private readonly localize;
    indicator: SVGCircleElement;
    indicatorOffset: string;
    value: number;
    label: string;
    lang: string;
    updated(changedProps: Map<string, unknown>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'moyo-progress-ring': MoyoProgressRing;
    }
}
