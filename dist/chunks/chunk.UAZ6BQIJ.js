import {
  component_styles_default
} from "./chunk.ZOHC4QYC.js";
import {
  r
} from "./chunk.IXU25QGK.js";

// src/components/drawer/drawer.styles.ts
var drawer_styles_default = r`
  ${component_styles_default}

  :host {
    --size: 25rem;
    --header-spacing: var(--moyo-spacing-large);
    --body-spacing: var(--moyo-spacing-large);
    --footer-spacing: var(--moyo-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--moyo-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--moyo-panel-background-color);
    box-shadow: var(--moyo-shadow-x-large);
    transition: var(--moyo-transition-medium) transform;
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--moyo-font-size-large);
    line-height: var(--moyo-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--moyo-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .drawer__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(moyo-button:not(:last-of-type)) {
    margin-right: var(--moyo-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--moyo-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    position: absolute;
  }
`;

export {
  drawer_styles_default
};
