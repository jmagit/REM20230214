import { newSpecPage } from '@stencil/core/testing';
import { MyContactosList } from '../my-contactos-list';

describe('my-contactos-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyContactosList],
      html: `<my-contactos-list></my-contactos-list>`,
    });
    expect(page.root).toEqualHtml(`
      <my-contactos-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-contactos-list>
    `);
  });
});
