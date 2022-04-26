import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import { serialize } from '../../utilities/form';
import type MoyoInput from './input';

describe('<moyo-input>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<MoyoInput>(html` <moyo-input label="Name"></moyo-input> `);
    await expect(el).to.be.accessible();
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<MoyoInput>(html` <moyo-input disabled></moyo-input> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part="input"]')!;

    expect(input.disabled).to.be.true;
  });

  describe('value methods', () => {
    it('should set the value as a date when using valueAsDate', async () => {
      const el = await fixture<MoyoInput>(html` <moyo-input type="date"></moyo-input> `);
      const today = new Date();

      el.valueAsDate = today;
      await el.updateComplete;

      expect(el.value).to.equal(today.toISOString().split('T')[0]);
    });

    it('should set the value as a number when using valueAsNumber', async () => {
      const el = await fixture<MoyoInput>(html` <moyo-input type="number"></moyo-input> `);
      const num = 12345;

      el.valueAsNumber = num;
      await el.updateComplete;

      expect(el.value).to.equal(num.toString());
    });
  });

  it('should focus the input when clicking on the label', async () => {
    const el = await fixture<MoyoInput>(html` <moyo-input label="Name"></moyo-input> `);
    const label = el.shadowRoot!.querySelector('[part="form-control-label"]')!;
    const submitHandler = sinon.spy();

    el.addEventListener('moyo-focus', submitHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });

  describe('when using constraint validation', () => {
    it('should be valid by default', async () => {
      const el = await fixture<MoyoInput>(html` <moyo-input></moyo-input> `);
      expect(el.invalid).to.be.false;
    });

    it('should be invalid when required and empty', async () => {
      const el = await fixture<MoyoInput>(html` <moyo-input required></moyo-input> `);
      expect(el.reportValidity()).to.be.false;
      expect(el.invalid).to.be.true;
    });

    it('should be invalid when the pattern does not match', async () => {
      const el = await fixture<MoyoInput>(html` <moyo-input pattern="^test" value="fail"></moyo-input> `);
      expect(el.invalid).to.be.true;
      expect(el.reportValidity()).to.be.false;
    });

    it('should be invalid when required and disabled is removed', async () => {
      const el = await fixture<MoyoInput>(html` <moyo-input disabled required></moyo-input> `);
      el.disabled = false;
      await el.updateComplete;
      expect(el.invalid).to.be.true;
    });
  });

  describe('when serializing', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><moyo-input name="a" value="1"></moyo-input></form> `);
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('1');
    });

    it('should serialize its name and value with JSON', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><moyo-input name="a" value="1"></moyo-input></form> `);
      const json = serialize(form);
      expect(json.a).to.equal('1');
    });
  });

  describe('when submitting a form', () => {
    it('should submit the form when pressing enter in a form without a submit button', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><moyo-input></moyo-input></form> `);
      const input = form.querySelector('moyo-input')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

      form.addEventListener('submit', submitHandler);
      input.focus();
      await sendKeys({ press: 'Enter' });
      await waitUntil(() => submitHandler.calledOnce);

      expect(submitHandler).to.have.been.calledOnce;
    });
  });
});
