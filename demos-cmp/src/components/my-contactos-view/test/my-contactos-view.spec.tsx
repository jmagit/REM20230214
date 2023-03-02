import { newSpecPage } from '@stencil/core/testing';
import { MyContactosView } from '../my-contactos-view';

describe('my-contactos-view', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyContactosView],
      html: `<my-contactos-view></my-contactos-view>`,
    });
    expect(page.root).toEqualHtml(`
      <my-contactos-view>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-contactos-view>
    `);
  });
});
