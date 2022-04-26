import { expect, fixture, html } from '@open-wc/testing';

describe('<moyo-mutation-observer>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <moyo-mutation-observer></moyo-mutation-observer> `);

    expect(el).to.exist;
  });
});
