import { newE2EPage } from '@stencil/core/testing';

describe('my-ajax-wait', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-ajax-wait></my-ajax-wait>');

    const element = await page.find('my-ajax-wait');
    expect(element).toHaveClass('hydrated');
  });
});
