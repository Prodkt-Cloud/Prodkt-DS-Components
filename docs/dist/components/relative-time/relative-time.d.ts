import { LitElement } from 'lit';
export default class MoyoRelativeTime extends LitElement {
    private readonly localize;
    private updateTimeout;
    private isoTime;
    private relativeTime;
    private titleTime;
    date: Date | string;
    lang: string;
    format: 'long' | 'short' | 'narrow';
    numeric: 'always' | 'auto';
    sync: boolean;
    disconnectedCallback(): void;
    render(): "" | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'moyo-relative-time': MoyoRelativeTime;
    }
}