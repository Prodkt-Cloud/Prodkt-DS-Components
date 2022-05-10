import { LitElement } from 'lit';
import '../../components/button-group/button-group';
import type MoyoRadio from '../../components/radio/radio';
export default class MoyoRadioGroup extends LitElement {
    static styles: import("lit").CSSResult;
    defaultSlot: HTMLSlotElement;
    hasButtonGroup: boolean;
    label: string;
    fieldset: boolean;
    connectedCallback(): void;
    getAllRadios(): MoyoRadio[];
    handleRadioClick(event: MouseEvent): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleSlotChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'moyo-radio-group': MoyoRadioGroup;
    }
}
