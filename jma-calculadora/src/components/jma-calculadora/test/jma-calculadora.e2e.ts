import { newE2EPage } from '@stencil/core/testing';

describe('jma-calculadora', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jma-calculadora></jma-calculadora>');

    const element = await page.find('jma-calculadora');
    expect(element).not.toBeNull();
    expect(element).toHaveClass('hydrated');
  });

  it('pantalla', async () => {
    const page = await newE2EPage();
    await page.setContent('<jma-calculadora></jma-calculadora>');

    const pantalla = await page.find('jma-calculadora >>> .Pantalla');
    expect(pantalla).not.toBeNull();
    expect(pantalla.innerText).toBe('0');
  });

  it('dígitos y coma', async () => {
    const page = await newE2EPage();
    await page.setContent('<jma-calculadora></jma-calculadora>');
    const pantalla = await page.find('jma-calculadora >>> .Pantalla');
    expect(pantalla).not.toBeNull();

    let rslt = '';
    for(let i = 9; i >= 0; i--) {
      rslt += i;
      await (await page.find(`jma-calculadora >>> .btnDigito[value="${i}"]`)).click();
      expect(pantalla.innerText).toBe(rslt);
    }
    await (await page.find(`jma-calculadora >>> .btnDigito[value="."]`)).click()
    await (await page.find(`jma-calculadora >>> .btnDigito[value="1"]`)).click()
    expect(pantalla.innerText).toBe('9876543210.1');
  });

  it('inicializa botón', async () => {
    const page = await newE2EPage();
    const init = '1234'
    await page.setContent(`<jma-calculadora value="${init}"></jma-calculadora>`);
    const pantalla = await page.find('jma-calculadora >>> .Pantalla');
    expect(pantalla).not.toBeNull();
    const resumen = await page.find('jma-calculadora >>> .Resumen');
    expect(resumen).not.toBeNull();

    await (await page.find(`jma-calculadora >>> .btnOperar[value="+"]`)).click()
    expect(pantalla.innerText).toBe(init);
    expect(resumen.innerText).toBe(`${init} +`);
    await (await page.find(`jma-calculadora >>> input[value="C"]`)).click()
    expect(pantalla.innerText).toBe('0');
    expect(resumen.innerText).toBe('');
  });

  it('Borrar negativo', async () => {
    const page = await newE2EPage();
    const init = '-1234'
    await page.setContent(`<jma-calculadora value="${init}"></jma-calculadora>`);
    const pantalla = await page.find('jma-calculadora >>> .Pantalla');
    expect(pantalla).not.toBeNull();

    for(let i = 1; i < init.length; i++) {
      await (await page.find(`jma-calculadora >>> input[value="⌫"]`)).click()
      const cad = init.substring(0, init.length - i);
      expect(pantalla.innerText).toBe(cad === '-' ? '0' : cad);
    }
  });

  it('cálculos y cambio de signo', async () => {
    const page = await newE2EPage();
    await page.setContent('<jma-calculadora></jma-calculadora>');
    const pantalla = await page.find('jma-calculadora >>> .Pantalla');
    expect(pantalla).not.toBeNull();
    const resumen = await page.find('jma-calculadora >>> .Resumen');
    expect(resumen).not.toBeNull();

    await (await page.find(`jma-calculadora >>> .btnDigito[value="1"]`)).click()
    await (await page.find(`jma-calculadora >>> .btnDigito[value="2"]`)).click()
    await (await page.find(`jma-calculadora >>> .btnOperar[value="+"]`)).click()
    expect(pantalla.innerText).toBe('12');
    expect(resumen.innerText).toBe('12 +');
    await (await page.find(`jma-calculadora >>> .btnDigito[value="3"]`)).click()
    expect(pantalla.innerText).toBe('3');
    await (await page.find(`jma-calculadora >>> .btnDigito[value="4"]`)).click()
    expect(pantalla.innerText).toBe('34');
    await (await page.find(`jma-calculadora >>> .btnOperar[value="-"]`)).click()
    expect(pantalla.innerText).toBe('46');
    expect(resumen.innerText).toBe('46 -');
    await (await page.find(`jma-calculadora >>> .btnDigito[value="5"]`)).click()
    expect(pantalla.innerText).toBe('5');
    await (await page.find(`jma-calculadora >>> .btnDigito[value="6"]`)).click()
    expect(pantalla.innerText).toBe('56');
    await (await page.find(`jma-calculadora >>> .btnOperar[value="*"]`)).click()
    expect(pantalla.innerText).toBe('-10');
    expect(resumen.innerText).toBe('-10 *');
    await (await page.find(`jma-calculadora >>> .btnDigito[value="2"]`)).click()
    await (await page.find(`jma-calculadora >>> .btnDigito[value="±"]`)).click()
    expect(pantalla.innerText).toBe('-2');
    await (await page.find(`jma-calculadora >>> .btnOperar[value="/"]`)).click()
    expect(pantalla.innerText).toBe('20');
    expect(resumen.innerText).toBe('20 /');
    await (await page.find(`jma-calculadora >>> .btnDigito[value="8"]`)).click()
    await (await page.find(`jma-calculadora >>> .btnOperar[value="="]`)).click()
    expect(pantalla.innerText).toBe('2.5');
    expect(resumen.innerText).toBe('');
  });

});
