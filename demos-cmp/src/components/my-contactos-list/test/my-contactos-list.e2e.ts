import { newE2EPage } from '@stencil/core/testing';

describe('my-contactos-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-contactos-list></my-contactos-list>');

    const element = await page.find('my-contactos-list');
    expect(element).toHaveClass('hydrated');
  });
});
