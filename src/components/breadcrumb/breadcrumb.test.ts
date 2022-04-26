import { expect, fixture, html } from '@open-wc/testing';
import type MoyoBreadcrumb from './breadcrumb';

describe('<moyo-breadcrumb>', () => {
  let el: MoyoBreadcrumb;

  describe('when provided a standard list of el-breadcrumb-item children and no parameters', () => {
    before(async () => {
      el = await fixture<MoyoBreadcrumb>(html`
        <moyo-breadcrumb>
          <moyo-breadcrumb-item>Catalog</moyo-breadcrumb-item>
          <moyo-breadcrumb-item>Clothing</moyo-breadcrumb-item>
          <moyo-breadcrumb-item>Women's</moyo-breadcrumb-item>
          <moyo-breadcrumb-item>Shirts &amp; Tops</moyo-breadcrumb-item>
        </moyo-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });

    it('should render moyo-icon as separator', () => {
      expect(el.querySelectorAll('moyo-icon').length).to.eq(4);
    });

    it('should attach aria-current "page" on the last breadcrumb item.', () => {
      const breadcrumbItems = el.querySelectorAll('moyo-breadcrumb-item');
      const lastNode = breadcrumbItems[3];
      expect(lastNode).attribute('aria-current', 'page');
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "separator" to support Custom Separators', () => {
    before(async () => {
      el = await fixture<MoyoBreadcrumb>(html`
        <moyo-breadcrumb>
          <span class="replacement-separator" slot="separator">/</span>
          <moyo-breadcrumb-item>First</moyo-breadcrumb-item>
          <moyo-breadcrumb-item>Second</moyo-breadcrumb-item>
          <moyo-breadcrumb-item>Third</moyo-breadcrumb-item>
        </moyo-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });

    it('should accept "separator" as an assigned child in the shadow root', () => {
      const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name=separator]')!;
      const childNodes = slot.assignedNodes({ flatten: true });

      expect(childNodes.length).to.eq(1);
    });

    it('should replace the moyo-icon separator with the provided separator', () => {
      expect(el.querySelectorAll('.replacement-separator').length).to.eq(4);
      expect(el.querySelectorAll('moyo-icon').length).to.eq(0);
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "prefix" to support prefix icons', () => {
    before(async () => {
      el = await fixture<MoyoBreadcrumb>(html`
        <moyo-breadcrumb>
          <moyo-breadcrumb-item>
            <span class="prefix-example" slot="prefix">/</span>
            Home
          </moyo-breadcrumb-item>
          <moyo-breadcrumb-item>First</moyo-breadcrumb-item>
          <moyo-breadcrumb-item>Second</moyo-breadcrumb-item>
          <moyo-breadcrumb-item>Third</moyo-breadcrumb-item>
        </moyo-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "suffix" to support suffix icons', () => {
    before(async () => {
      el = await fixture<MoyoBreadcrumb>(html`
        <moyo-breadcrumb>
          <moyo-breadcrumb-item>First</moyo-breadcrumb-item>
          <moyo-breadcrumb-item>Second</moyo-breadcrumb-item>
          <moyo-breadcrumb-item>Third</moyo-breadcrumb-item>
          <moyo-breadcrumb-item>
            <span class="prefix-example" slot="suffix">/</span>
            Security
          </moyo-breadcrumb-item>
        </moyo-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });
  });
});
