import { newE2EPage } from '@stencil/core/testing';

describe('my-contactos-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-contactos-form></my-contactos-form>');

    const element = await page.find('my-contactos-form');
    expect(element).toHaveClass('hydrated');
  });
});
