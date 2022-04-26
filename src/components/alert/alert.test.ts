import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type MoyoAlert from './alert';

describe('<moyo-alert>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<MoyoAlert>(html` <moyo-alert open>I am an alert</moyo-alert> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<MoyoAlert>(html` <moyo-alert>I am an alert</moyo-alert> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base.hidden).to.be.true;
  });

  it('should emit moyo-show and moyo-after-show when calling show()', async () => {
    const el = await fixture<MoyoAlert>(html` <moyo-alert>I am an alert</moyo-alert> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('moyo-show', showHandler);
    el.addEventListener('moyo-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit moyo-hide and moyo-after-hide when calling hide()', async () => {
    const el = await fixture<MoyoAlert>(html` <moyo-alert open>I am an alert</moyo-alert> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('moyo-hide', hideHandler);
    el.addEventListener('moyo-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should emit moyo-show and moyo-after-show when setting open = true', async () => {
    const el = await fixture<MoyoAlert>(html` <moyo-alert>I am an alert</moyo-alert> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('moyo-show', showHandler);
    el.addEventListener('moyo-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit moyo-hide and moyo-after-hide when setting open = false', async () => {
    const el = await fixture<MoyoAlert>(html` <moyo-alert open>I am an alert</moyo-alert> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('moyo-hide', hideHandler);
    el.addEventListener('moyo-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });
});
