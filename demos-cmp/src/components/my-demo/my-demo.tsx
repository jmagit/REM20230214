import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-demo',
  styleUrl: 'my-demo.css',
  shadow: true,
})
export class MyDemo {
  /**
   * Valor inicial del contador
   */
  @Prop({attribute: 'init', reflect: true}) initValue = 0;
  /**
   * Valor a incrementar/decrementar del contador
   */
  @Prop({reflect: true}) delta : number = 1;

  /**
   * Ejemplo de opcional
   */
  @Prop() nombre? : string;

  @Prop() visible = false;
  @Prop() objeto: any;
  @State() counter = 0;

  intervalo: any;
  // connectedCallback() {
  //   let count = 0;
  //   this.intervalo = setInterval(() => {
  //     console.log(`Contador interno: ${++count}`)
  //   }, 100)
  // }
  disconnectedCallback() {
    clearInterval(this.intervalo)
    console.log(`Desmontado`)
  }
  render() {
    return (
      <Host>
        {this.visible && <h2>Es visible</h2>}
        <h1>Init: {this.initValue} delta: {this.delta} {this.nombre?.toLowerCase()} </h1>
        <slot></slot>
      </Host>
    );
  }

}
