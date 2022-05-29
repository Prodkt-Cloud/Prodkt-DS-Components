import { LitElement } from 'lit';
export default class MoyoMutationObserver extends LitElement {
    static styles: import("lit").CSSResult;
    private mutationObserver;
    attr: string;
    attrOldValue: boolean;
    charData: boolean;
    charDataOldValue: boolean;
    childList: boolean;
    disabled: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    handleDisabledChange(): void;
    handleChange(): void;
    handleMutation(mutationList: MutationRecord[]): void;
    startObserver(): void;
    stopObserver(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'moyo-mutation-observer': MoyoMutationObserver;
    }
}
