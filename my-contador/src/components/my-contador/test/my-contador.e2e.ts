import { newE2EPage } from '@stencil/core/testing';

describe('my-contador', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-contador></my-contador>');

    const element = await page.find('my-contador');
    expect(element).toHaveClass('hydrated');
  });
});
