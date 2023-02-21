import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';

/**
 * Ejemplo de componente en Stencil
 */
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  errorColor = true;

  @State() contador = 0;
  @State() numeros: Array<Number> = [];

  constructor() {
    let intervalo = setInterval(() => {
      this.contador++
      this.numeros = [this.contador, ...this.numeros ]
      console.log(`Contador: ${this.contador}`)
    }, 1000)
    setTimeout(() => clearInterval(intervalo), 60000)
  }

  /**
   * Concatena dos valores numéricos
   * @version 2.0
   * @param a Operando 1
   * @param b Operando 2
   * @returns Concatenación de los operandos
   * @throws
   */
  suma(a: number, b: number): string {
    return '' + a + b;
  }
  private getText(): any {
    return <i> {format(this.first, this.middle, this.last)}</i>;
  }

  compara(oldValue: any, newValue: any) {
    return oldValue === newValue;
  }

  render() {
    let nombre = <b>Mundo</b>
    // let cad = <p>Esto es un párrafo</p>
    let tamaño = { width: 150, height: 50 }
    let valor = true;
    nombre = null;
    let listado = [
      { id: 1, nombre: 'Madrid' },
      { id: 2, nombre: 'Barcelona' },
      { id: 3, nombre: 'Sevilla' },
      { id: 4, nombre: 'Valencia' },
    ]
    // let oldValue = listado;
    // let newValue = listado;
    // if(!this.compara(oldValue, newValue)) {
    //   this.render();
    // }
    // // newValue.push({ id: 1, nombre: 'Madrid' })
    // // if(!this.compara(oldValue, newValue)) {
    // //   this.render();
    // // }
    // newValue = [ ...newValue]
    // //newValue = [ ...newValue, { id: 1, nombre: 'Madrid' }]
    // if(!this.compara(oldValue, newValue)) {
    //   this.render();
    // }
    let obj1 = { id: 1, nombre: 'Madrid' }
    let obj2 = { id: 1, nombre: 'Madrid' }
    obj1 = obj2
    obj1.id = 7;
    obj1 = { ...obj1, id: 7 }

    let lista: any;
    if (valor) {
      lista = <ul>
        {listado.map(item =>
          <li key={item.id}>
            {item.nombre.toUpperCase()}
          </li>)}
      </ul>
    } else {
      lista = [1, 2, 3, 5].map((item, index) => <input type='button' key={index} value={item} />)
    }
    let logoURL = "https://stenciljs.com/docs/img/logo-dark.svg"
    // if(valor)
    //   return <h1>Esperando</h1>
    return (
      <div>
        <my-demo initValue={this.contador} delta={3} objeto={obj1}  />
        <ul>
            {this.numeros.map((item, index) =>
              <li key={item.toString()}>
                Contador: {item}
              </li>)
            }
          </ul>
        <img id="logo" src={logoURL} title="Logo" {...tamaño} />
        <div class={{ errores: this.errorColor }}>
          Hola {nombre ?? <b>desconocido</b>}! I'm {this.getText()}
        </div>
        <div>
          Otra cosa. Valor: {valor ? 'true' : 'false'}
          {/* {valor && cad} */}
        </div>
        {/* {cad} */}
        <ul>
          {listado.map(item =>
            <li key={item.id}>
              {item.nombre.toUpperCase()}
            </li>)
          }
        </ul>

        {[1, 2, 3, 5].map((item, index) => <input type='button' key={index} value={item} />)}
        {lista}
        {!valor ?
          (<ul>
            {listado.map(item =>
              <li key={item.id}>
                {item.nombre.toUpperCase()}
              </li>)
            }
          </ul>)
          :
          [1, 2, 3, 5].map((item, index) => <input type='button' key={index} value={item} />)
        }
      </div>
    );
  }
}
