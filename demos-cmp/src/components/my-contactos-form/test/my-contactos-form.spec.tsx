import { newSpecPage } from '@stencil/core/testing';
import { MyContactosForm } from '../my-contactos-form';

describe('my-contactos-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyContactosForm],
      html: `<my-contactos-form></my-contactos-form>`,
    });
    expect(page.root).toEqualHtml(`
      <my-contactos-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-contactos-form>
    `);
  });
});
