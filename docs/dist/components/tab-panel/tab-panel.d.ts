import { LitElement } from 'lit';
export default class MoyoTabPanel extends LitElement {
    static styles: import("lit").CSSResult;
    private readonly attrId;
    private readonly componentId;
    name: string;
    active: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'moyo-tab-panel': MoyoTabPanel;
    }
}
