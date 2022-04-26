import { expect, fixture, html } from '@open-wc/testing';

describe('<moyo-split-panel>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <moyo-split-panel></moyo-split-panel> `);

    expect(el).to.exist;
  });
});
