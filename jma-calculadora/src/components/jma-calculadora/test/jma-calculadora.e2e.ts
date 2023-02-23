import { newE2EPage } from '@stencil/core/testing';

describe('jma-calculadora', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jma-calculadora></jma-calculadora>');

    const element = await page.find('jma-calculadora');
    expect(element).toHaveClass('hydrated');
  });
});
