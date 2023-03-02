import { Component, Host, h } from '@stencil/core';
import notify from '../../utils/notification-service';

@Component({
  tag: 'my-notifications',
  styles: `
    :host {
      display: block;
    }
  `,
  shadow: true,
})
export class MyNotifications {

  render() {
    if(!notify.HayNotificaciones) return;
    return (
      <Host>
        {notify.Listado.map(item => <my-alert key={item.Id} message={item.Message} type={item.Type} onClear={() => notify.remove(item.Id)} />)}
        <div style={{textAlign: 'center'}}>
          <input type='button' value='Cerrar' onClick={() => notify.clear()} />
        </div>
      </Host>
    );
  }

}
