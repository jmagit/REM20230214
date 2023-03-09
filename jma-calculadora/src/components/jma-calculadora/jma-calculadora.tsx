import { Component, EventEmitter, h, Prop, State, Event, Method, Host, Listen, Build, Watch } from '@stencil/core';

const Pantalla = props => (
  <output class="Pantalla">
    {props.coma ? props.pantalla.replace(/\./g, ",") : props.pantalla}
  </output>
);

const Resumen = ({ coma, resumen }) => (
  <output class="Resumen">
    {coma ? resumen.replace(/\./g, ",") : resumen}
  </output>
);

@Component({
  tag: 'jma-calculadora',
  styleUrl: 'jma-calculadora.scss',
  shadow: true,
})
export class JmaCalculadora {

  /**
   * Permite establecer el valor inicial
   */
  @Prop({mutable: true}) value: number;
  /**
      * Permite establecer la coma como separador decimal
     */
  @Prop() comaDecimal = false;

  /**
   * El evento "updated" se dispara cuando se calcula un nuevo resultado
   */
  @Event() updated: EventEmitter<number>;
  /**
   * El evento "equaled" se dispara cuando se pulsa el = y se obtiene el resultado total
   */
  @Event() equaled: EventEmitter<number>;

  /**
   * Restaura la calculadora a su valor inicial
   * @param valor Valor inicial en pantalla, 0 por defecto
   * @returns Promesa resuelta
   */
  @Method()
  async init(valor = 0): Promise<void> {
    this.inicia(valor);
  }

  @State() pantalla = '0'
  @State() resumen = '';
  acumulado = 0;
  operador = '+';
  limpiar = true;

  componentWillLoad() {
    // eslint-disable-next-line @stencil-community/strict-boolean-conditions
    if (this.value) {
      this.ponOperando(this.value)
    }
  }

  @Watch('value')
  actualizaPantalla(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      const limpiar = this.limpiar
      this.ponOperando(newValue);
      this.limpiar = limpiar
    }
  }

  protected raiseUpdated(value: number) {
    if(this.value !== value) this.value = value;
    this.updated.emit(value);
  }
  protected raiseEqualed(value: number) {
    this.equaled.emit(value);
  }

  inicia(valor = 0) {
    this.acumulado = 0;
    this.operador = '+';
    this.pantalla = valor.toString();
    this.resumen = '';
    this.limpiar = true;
  }

  ponDigito(value: number | string): void {
    if (typeof (value) !== 'string')
      value = value.toString();
    if (value.length != 1 || value < '0' || value > '9') {
      console.error('No es un valor numérico.');
      return;
    }
    if (this.limpiar || this.pantalla == '0') {
      this.pantalla = value;
      this.limpiar = false;
    } else
      this.pantalla += value;
  }

  ponOperando(value: number | string): void {
    if (typeof value === "number" || (!Number.isNaN(parseFloat(value)) && parseFloat(value).toString() == value)) {
      this.pantalla = value.toString();
      this.limpiar = false;
    } else {
      console.error('No es un valor numérico.');
    }
  }

  ponComa(): void {
    if (this.limpiar) {
      this.pantalla = '0.';
      this.limpiar = false;
    } else if (this.pantalla.indexOf('.') === -1) {
      this.pantalla += '.';
    } else {
      console.warn('Ya está la coma');
    }
  }

  borrar(): void {
    if (this.limpiar || this.pantalla.length == 1 || (this.pantalla.length == 2 && this.pantalla.startsWith('-'))) {
      this.pantalla = '0';
      this.limpiar = true;
    } else
      this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1);
  }

  cambiaSigno(): void {
    this.pantalla = (-this.pantalla).toString();
    if (this.limpiar) {
      this.acumulado = -this.acumulado;
    }
  }

  calcula(value: string): void {
    if ('+-*/='.indexOf(value) == -1) {
      console.error(`Operación no soportada: ${value}`);
      return;
    }

    const operando = parseFloat(this.pantalla);
    switch (this.operador) {
      case '+':
        this.acumulado += operando;
        break;
      case '-':
        this.acumulado -= operando;
        break;
      case '*':
        this.acumulado *= operando;
        break;
      case '/':
        this.acumulado /= operando;
        break;
    }
    // Con eval()
    // acumulado = eval (acumulado + operador + miPantalla);
    this.resumen = value == '=' ? '' : (`${this.acumulado} ${value}`);
    // Number: double-precision IEEE 754 floating point.
    // 9.9 + 1.3, 0.1 + 0.2, 1.0 - 0.9
    this.pantalla = parseFloat(this.acumulado.toPrecision(15)).toString();
    // this.pantalla = this.acumulado.toString();
    this.operador = value;
    this.limpiar = true;
    this.raiseUpdated(+this.pantalla);
    if (value === '=') this.raiseEqualed(+this.pantalla);
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if ('0' <= ev.key && ev.key <= '9')
      this.ponDigito(ev.key)
    else if ('+-*/='.indexOf(ev.key) >= 0)
      this.calcula(ev.key)
    else
    switch (ev.key.toLowerCase()) {
      case '.': if (!this.comaDecimal) this.ponComa();  break;
      case ',': if (this.comaDecimal) this.ponComa();  break;
      case 'backspace': this.borrar(); break;
      case 'c': this.inicia(); break;
    }
    if (Build.isDev)  console.log(`Tecla: ${ev.key}`)
  }

  render() {
    return (
      <Host class="Calculadora">
        <div class="Calculadora">
          <Resumen resumen={this.resumen} coma={this.comaDecimal} />
          <Pantalla pantalla={this.pantalla} coma={this.comaDecimal} />
          <input class="btnOperar col-1x2" type="button" value="C" onClick={this.inicia.bind(this, 0)} />
          <input class="btnOperar" type="button" value="&#9003;" onClick={this.borrar.bind(this)} />
          <input class="btnOperar" type="button" value="/" onClick={this.calcula.bind(this, '/')} />
          <input class="btnDigito" type="button" value="7" onClick={this.ponDigito.bind(this, '7')} />
          <input class="btnDigito" type="button" value="8" onClick={this.ponDigito.bind(this, '8')} />
          <input class="btnDigito" type="button" value="9" onClick={this.ponDigito.bind(this, '9')} />
          <input class="btnOperar" type="button" value="*" onClick={this.calcula.bind(this, '*')} />
          <input class="btnDigito" type="button" value="4" onClick={this.ponDigito.bind(this, '4')} />
          <input class="btnDigito" type="button" value="5" onClick={this.ponDigito.bind(this, '5')} />
          <input class="btnDigito" type="button" value="6" onClick={this.ponDigito.bind(this, '6')} />
          <input class="btnOperar" type="button" value="-" onClick={this.calcula.bind(this, '-')} />
          <input class="btnDigito" type="button" value="1" onClick={this.ponDigito.bind(this, '1')} />
          <input class="btnDigito" type="button" value="2" onClick={this.ponDigito.bind(this, '2')} />
          <input class="btnDigito" type="button" value="3" onClick={this.ponDigito.bind(this, '3')} />
          <input class="btnOperar" type="button" value="+" onClick={this.calcula.bind(this, '+')} />
          <input class="btnDigito" type="button" value="±" onClick={this.cambiaSigno.bind(this)} />
          <input class="btnDigito" type="button" value="0" onClick={this.ponDigito.bind(this, '0')} />
          <input class="btnDigito" type="button" value={this.comaDecimal ? ',' : '.'} onClick={this.ponComa.bind(this)} />
          <input class="btnOperar" type="button" value="=" onClick={this.calcula.bind(this, '=')} />
        </div>
      </Host>
    );
  }
}
