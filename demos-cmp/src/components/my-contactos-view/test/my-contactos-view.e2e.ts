import { newE2EPage } from '@stencil/core/testing';

describe('my-contactos-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-contactos-view></my-contactos-view>');

    const element = await page.find('my-contactos-view');
    expect(element).toHaveClass('hydrated');
  });
});
