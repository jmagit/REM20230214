import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { JmaCalculadora } from '../jma-calculadora';

describe('jma-calculadora', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JmaCalculadora],
      html: `<jma-calculadora></jma-calculadora>`,
    });
    expect(page.root).toEqualHtml(`
      <jma-calculadora class="Calculadora">
        <mock:shadow-root>
          <div class="Calculadora"><output class="Resumen"></output><output class="Pantalla">0</output>
            <input class="btnOperar col-1x2" type="button" value="C">
            <input class="btnOperar" type="button" value="⌫">
            <input class="btnOperar" type="button" value="/">
            <input class="btnDigito" type="button" value="7">
            <input class="btnDigito" type="button" value="8">
            <input class="btnDigito" type="button" value="9">
            <input class="btnOperar" type="button" value="*">
            <input class="btnDigito" type="button" value="4">
            <input class="btnDigito" type="button" value="5">
            <input class="btnDigito" type="button" value="6">
            <input class="btnOperar" type="button" value="-">
            <input class="btnDigito" type="button" value="1">
            <input class="btnDigito" type="button" value="2">
            <input class="btnDigito" type="button" value="3">
            <input class="btnOperar" type="button" value="+">
            <input class="btnDigito" type="button" value="±">
            <input class="btnDigito" type="button" value="0">
            <input class="btnDigito" type="button" value=".">
            <input class="btnOperar" type="button" value="=">
          </div>
        </mock:shadow-root>
      </jma-calculadora>
    `);
  });
  it('renders with props', async () => {
    let valor = 666
    const page = await newSpecPage({
      components: [JmaCalculadora],
      template: () => (<jma-calculadora value={valor} coma-decimal />)
    });
    expect(page.root).toEqualHtml(`
      <jma-calculadora class="Calculadora" coma-decimal="">
        <mock:shadow-root>
          <div class="Calculadora"><output class="Resumen"></output><output class="Pantalla">${valor}</output>
            <input class="btnOperar col-1x2" type="button" value="C">
            <input class="btnOperar" type="button" value="⌫">
            <input class="btnOperar" type="button" value="/">
            <input class="btnDigito" type="button" value="7">
            <input class="btnDigito" type="button" value="8">
            <input class="btnDigito" type="button" value="9">
            <input class="btnOperar" type="button" value="*">
            <input class="btnDigito" type="button" value="4">
            <input class="btnDigito" type="button" value="5">
            <input class="btnDigito" type="button" value="6">
            <input class="btnOperar" type="button" value="-">
            <input class="btnDigito" type="button" value="1">
            <input class="btnDigito" type="button" value="2">
            <input class="btnDigito" type="button" value="3">
            <input class="btnOperar" type="button" value="+">
            <input class="btnDigito" type="button" value="±">
            <input class="btnDigito" type="button" value="0">
            <input class="btnDigito" type="button" value=",">
            <input class="btnOperar" type="button" value="=">
          </div>
        </mock:shadow-root>
      </jma-calculadora>
    `);
  });

  it('Method: init', async () => {
    const page = await newSpecPage({
      components: [JmaCalculadora],
      html: `<jma-calculadora></jma-calculadora>`,
    });
    const value = '69'
    await page.root.init(value)
    await page.waitForChanges()
    expect(page.root.shadowRoot.querySelector('.Pantalla').textContent).toEqual(value)
  });

  it('Prop: value', async () => {
    const page = await newSpecPage({
      components: [JmaCalculadora],
      html: `<jma-calculadora value='9999'></jma-calculadora>`,
    });
    let value = '1.2'
    page.root.value = value
    await page.waitForChanges()
    expect(page.root.shadowRoot.querySelector('.Pantalla').textContent).toEqual(value)
    value = '2.1'
    page.root.value = value
    await page.waitForChanges()
    expect(page.root.shadowRoot.querySelector('.Pantalla').textContent).toEqual(value)
  });

  it('Event: updated', async () => {
    const value = '123'
    const callback = jest.fn().mockImplementation(ev => {
      expect(ev.detail).toEqual(+value)
      expect(ev.target.value).toEqual(+value)
    });
    const page = await newSpecPage({
      components: [JmaCalculadora],
      html: `<jma-calculadora value='${value}'></jma-calculadora>`,
    });
    page.root.addEventListener('updated', callback);
    await page.waitForChanges()
    page.root.shadowRoot.querySelector('input[value="+"]').click()
    await page.waitForChanges()
    expect(callback).toHaveBeenCalled()
  });

  it('Event: equaled', async () => {
    const value = '321'
    const callback = jest.fn().mockImplementation(ev => {
      expect(ev.detail).toEqual(+value)
      expect(ev.target.value).toEqual(+value)
    });
    const page = await newSpecPage({
      components: [JmaCalculadora],
      template: () => (<jma-calculadora value={value} onEqualed={ev => callback(ev)} coma-decimal></jma-calculadora>)
    });
    page.root.shadowRoot.querySelector('input[value="="]').click()
    await page.waitForChanges()
    expect(callback).toHaveBeenCalled()
  });
  it('Prop: comaDecimal', async () => {
    let value = '3.21'
    const page = await newSpecPage({
      components: [JmaCalculadora],
      html: `<jma-calculadora value='${value}'></jma-calculadora>`,
    });
    page.root.shadowRoot.querySelector('input[value="-"]').click()
    await page.waitForChanges()
    expect(page.root.shadowRoot.querySelector('.Pantalla').textContent).toEqual(value)
    expect(page.root.shadowRoot.querySelector('.Resumen').textContent).toEqual(`${value} -`)
    page.root.comaDecimal = true
    await page.waitForChanges()
    value = '3,21'
    expect(page.root.shadowRoot.querySelector('.Pantalla').textContent).toEqual(value)
    expect(page.root.shadowRoot.querySelector('.Resumen').textContent).toEqual(`${value} -`)
  });
});
