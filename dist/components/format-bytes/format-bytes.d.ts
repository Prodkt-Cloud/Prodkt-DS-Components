import { LitElement } from 'lit';
export default class MoyoFormatBytes extends LitElement {
    private readonly localize;
    value: number;
    unit: 'byte' | 'bit';
    display: 'long' | 'short' | 'narrow';
    lang: string;
    render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'moyo-format-bytes': MoyoFormatBytes;
    }
}
