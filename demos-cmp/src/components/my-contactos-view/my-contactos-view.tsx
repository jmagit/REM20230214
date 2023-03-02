import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'my-contactos-view',
  styleUrl: 'my-contactos-view.css',
  shadow: true,
})
export class MyContactosView {
  @Prop() elemento = {}
  @Event() cancel: EventEmitter<null>;

  render() {
    return (
      <Host>
        { JSON.stringify(this.elemento)}
        <input type='button' value='Volver' onClick={() => this.cancel.emit()} />
        <slot></slot>
      </Host>
    );
  }
}
