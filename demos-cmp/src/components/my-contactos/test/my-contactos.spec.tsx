import { newSpecPage } from '@stencil/core/testing';
import { MyContactos } from '../my-contactos';

describe('my-contactos', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyContactos],
      html: `<my-contactos></my-contactos>`,
    });
    expect(page.root).toEqualHtml(`
      <my-contactos>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-contactos>
    `);
  });
});
