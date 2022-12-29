import { LitElement } from 'lit';
import '../../components/icon/icon';
export default class MoyoBreadcrumb extends LitElement {
    static styles: import("lit").CSSResult;
    defaultSlot: HTMLSlotElement;
    separatorSlot: HTMLSlotElement;
    label: string;
    private getSeparator;
    handleSlotChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'moyo-breadcrumb': MoyoBreadcrumb;
    }
}
