import { LitElement } from 'lit';
import '../../components/icon/icon';
export default class MoyoImageComparer extends LitElement {
    static styles: import("lit").CSSResult;
    base: HTMLElement;
    handle: HTMLElement;
    position: number;
    handleDrag(event: Event): void;
    handleKeyDown(event: KeyboardEvent): void;
    handlePositionChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'moyo-image-comparer': MoyoImageComparer;
    }
}
