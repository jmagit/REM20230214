import { newSpecPage } from '@stencil/core/testing';
import { JmaCalculadora } from '../jma-calculadora';

describe('jma-calculadora', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JmaCalculadora],
      html: `<jma-calculadora></jma-calculadora>`,
    });
    expect(page.root).toEqualHtml(`
      <jma-calculadora>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jma-calculadora>
    `);
  });
});
