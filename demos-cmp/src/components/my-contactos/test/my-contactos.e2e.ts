import { newE2EPage } from '@stencil/core/testing';

describe('my-contactos', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-contactos></my-contactos>');

    const element = await page.find('my-contactos');
    expect(element).toHaveClass('hydrated');
  });
});
