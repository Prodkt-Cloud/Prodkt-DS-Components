import { LitElement } from 'lit';
export default class MoyoFormatNumber extends LitElement {
    private readonly localize;
    value: number;
    lang: string;
    type: 'currency' | 'decimal' | 'percent';
    noGrouping: boolean;
    currency: string;
    currencyDisplay: 'symbol' | 'narrowSymbol' | 'code' | 'name';
    minimumIntegerDigits: number;
    minimumFractionDigits: number;
    maximumFractionDigits: number;
    minimumSignificantDigits: number;
    maximumSignificantDigits: number;
    render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'moyo-format-number': MoyoFormatNumber;
    }
}
