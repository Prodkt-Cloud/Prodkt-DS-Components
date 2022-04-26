import { expect, fixture, html } from '@open-wc/testing';

describe('<moyo-animated-image>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <moyo-animated-image></moyo-animated-image> `);

    expect(el).to.exist;
  });
});
