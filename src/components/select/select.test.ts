import { expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type MoyoSelect from './select';

describe('<moyo-select>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<MoyoSelect>(html`
      <moyo-select>
        <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
        <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
        <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
      </moyo-select>
    `);
    await expect(el).to.be.accessible();
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<MoyoSelect>(html`
      <moyo-select disabled>
        <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
        <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
        <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
      </moyo-select>
    `);
    expect(el.dropdown.disabled).to.be.true;
    expect(el.control.tabIndex).to.equal(-1);
  });

  it('should focus the select when clicking on the label', async () => {
    const el = await fixture<MoyoSelect>(html`
      <moyo-select label="Select One">
        <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
        <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
        <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
      </moyo-select>
    `);
    const label = el.shadowRoot!.querySelector('[part="form-control-label"]')!;
    const submitHandler = sinon.spy();

    el.addEventListener('moyo-focus', submitHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });

  it('should emit moyo-change when the value changes', async () => {
    const el = await fixture<MoyoSelect>(html`
      <moyo-select>
        <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
        <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
        <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
      </moyo-select>
    `);
    const changeHandler = sinon.spy();

    el.addEventListener('moyo-change', changeHandler);
    el.value = 'option-2';
    await waitUntil(() => changeHandler.calledOnce);

    expect(changeHandler).to.have.been.calledOnce;
  });

  it('should open the menu when any letter key is pressed with moyo-select is on focus', async () => {
    const el = await fixture<MoyoSelect>(html`
      <moyo-select>
        <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
        <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
        <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
      </moyo-select>
    `);
    const control = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__control')!;
    control.focus();
    await sendKeys({ press: 'r' });
    await el.updateComplete;

    expect(control.getAttribute('aria-expanded')).to.equal('true');
  });

  it('should not open the menu when ctrl + R is pressed with moyo-select is on focus', async () => {
    const el = await fixture<MoyoSelect>(html`
      <moyo-select>
        <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
        <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
        <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
      </moyo-select>
    `);
    const control = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__control')!;
    control.focus();
    await sendKeys({ down: 'Control' });
    await sendKeys({ press: 'r' });
    await sendKeys({ up: 'Control' });
    await el.updateComplete;
    expect(control.getAttribute('aria-expanded')).to.equal('false');
  });

  it('should focus on the custom control when constraint validation occurs', async () => {
    const el = await fixture<HTMLFormElement>(html`
      <form>
        <moyo-select required>
          <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
          <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
          <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
        </moyo-select>
      </form>
    `);
    const select = el.querySelector('moyo-select')!;
    el.requestSubmit();

    expect(select.shadowRoot!.activeElement).to.equal(select.control);
  });

  it('should update the display label when a menu item changes', async () => {
    const el = await fixture<MoyoSelect>(html`
      <moyo-select value="option-1">
        <moyo-menu-item value="option-1">Option 1</moyo-menu-item>
        <moyo-menu-item value="option-2">Option 2</moyo-menu-item>
        <moyo-menu-item value="option-3">Option 3</moyo-menu-item>
      </moyo-select>
    `);
    const displayLabel = el.shadowRoot!.querySelector('[part="display-label"]')!;
    const menuItem = el.querySelector('moyo-menu-item')!;

    expect(displayLabel.textContent?.trim()).to.equal('Option 1');
    menuItem.textContent = 'updated';

    await oneEvent(el, 'moyo-label-change');
    await el.updateComplete;

    expect(displayLabel.textContent?.trim()).to.equal('updated');
  });
});
