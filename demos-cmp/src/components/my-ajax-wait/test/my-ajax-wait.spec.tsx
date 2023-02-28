import { newSpecPage } from '@stencil/core/testing';
import { MyAjaxWait } from '../my-ajax-wait';

describe('my-ajax-wait', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyAjaxWait],
      html: `<my-ajax-wait></my-ajax-wait>`,
    });
    expect(page.root).toEqualHtml(`
      <my-ajax-wait>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-ajax-wait>
    `);
  });
});
