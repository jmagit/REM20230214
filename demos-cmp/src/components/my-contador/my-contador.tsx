import { Component, Host, h, Prop, EventEmitter, State, Event, Watch, Listen, Method } from '@stencil/core';
import { store } from '../../utils/contador'

const MyPantalla = props => <output part="pantalla salida" class="la-pantalla">{props.display}</output>

/**
 * Demo de componente contador
 */
@Component({
  tag: 'my-contador',
  styleUrl: 'my-contador.css',
  shadow: true,
})
export class MyContador {
  /** Valor inicial del contador */
  @Prop() init: number = 0;
  /** Valor a incrementar/decrementar del contador */
  @Prop({ mutable: true, reflect: true }) delta = 1;

  /**
   * Notifica los cambios en el contador
   */
  @Event({
    cancelable: true,
    bubbles: true,
    composed: true,
  }) updated: EventEmitter<number>;
  protected onUpdated() {
    const event = this.updated.emit(store.state.counter)
    if (!event.defaultPrevented) {
      // Cancelar
    }
  }

  constructor() {
    this.sube = this.sube.bind(this)
  }

  componentWillLoad() {
    this.initChanged(this.init, store.state.counter)
    this.validateDelta(this.delta, 1)
  }
  componentShouldUpdate?(_newVal: any, _oldVal: any, propName: string) {
    if (propName === 'delta') return false;
    return true;
  }

  @Watch('init')
  initChanged(newValue: number, _oldValue: number) {
    if (store.state.counter !== newValue) {
      store.state.counter = newValue;
    }
  }

  @Watch('delta')
  validateDelta(newValue: number, oldValue?: number) {
    if (newValue < 1) {
      this.delta = oldValue
      throw new Error('No puede tener un delta negativo.')
    }
    store.state.delta = newValue;
  }

  handleOnCambia(value: number) {
    store.state.counter += value;
    this.updated.emit(store.state.counter)
  }

  baja() {
    this.handleOnCambia(-store.state.delta);
  }

  sube() {
    this.handleOnCambia(store.state.delta);
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    switch (ev.key) {
      case 'ArrowUp': this.sube(); break;
      case 'ArrowDown': this.baja(); break;
    }
  }

  /** Reinicia el contador */
  @Method()
  async reset() {
    store.state.counter = 0;
  }

  private refresh = 0

  render() {
    console.log(`Refresco: ${++this.refresh}`)
    return (
      // <Host >
      <Host class={{ 'positivo': store.state.counter >= 0, 'negativo': store.state.counter < 0, 'center': true }} >
        <div class={{ 'positivo': store.state.counter >= 0, 'negativo': store.state.counter < 0, 'center': true }}>
          <MyPantalla display={store.state.counter} />
          <div part="botonera" class="buttons">
            <button type="button" class="button-left" onClick={() => this.baja()}>-</button>
            <button type="button" class="button-right" onClick={() => this.sube()}>+</button>
            <button type="button" class="button-right" onClick={this.sube}>++</button>
          </div>
        </div>
        <slot />
      </Host>
    );
  }
}
