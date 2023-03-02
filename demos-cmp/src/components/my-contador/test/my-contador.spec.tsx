import { newSpecPage } from '@stencil/core/testing';
import { MyContador } from '../my-contador';

describe('my-contador', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyContador],
      html: `<my-contador></my-contador>`,
    });
    expect(page.root).toEqualHtml(`
      <my-contador>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-contador>
    `);
  });
});
