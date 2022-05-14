import { LitElement } from 'lit';
import type MoyoMenuItem from '../../components/menu-item/menu-item';
export interface MenuSelectEventDetail {
    item: MoyoMenuItem;
}
export default class MoyoMenu extends LitElement {
    static styles: import("lit").CSSResult;
    menu: HTMLElement;
    defaultSlot: HTMLSlotElement;
    private typeToSelectString;
    private typeToSelectTimeout;
    firstUpdated(): void;
    getAllItems(options?: {
        includeDisabled: boolean;
    }): MoyoMenuItem[];
    getCurrentItem(): MoyoMenuItem | undefined;
    setCurrentItem(item: MoyoMenuItem): void;
    typeToSelect(event: KeyboardEvent): void;
    handleClick(event: MouseEvent): void;
    handleKeyUp(): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleMouseDown(event: MouseEvent): void;
    handleSlotChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'moyo-menu': MoyoMenu;
    }
}
