import { LitElement } from 'lit';
import '../../components/icon/icon';
export default class MoyoAvatar extends LitElement {
    static styles: import("lit").CSSResult;
    private hasError;
    image: string;
    label: string;
    initials: string;
    shape: 'circle' | 'square' | 'rounded';
    handleImageChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'moyo-avatar': MoyoAvatar;
    }
}
