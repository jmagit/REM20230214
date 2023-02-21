import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  /**
   * cccc
   */
  @Prop() cardTitle = '(sin titulo)';

  render() {
    return (
      <Host>
        <div>
        <h1>{this.cardTitle}</h1>
        <div style={{color: 'red'}} >
        <slot name='summary'></slot>
        </div>
        <slot></slot>
        <p>Párrafo interno</p>
        </div>
      </Host>
    );
  }

}
