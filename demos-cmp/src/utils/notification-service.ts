
import { createStore } from "@stencil/store";

const store = createStore({
  listado: new Array<Notification>(),
  multiple: true,
  debug: true
});

export enum NotificationType { error = 'error', warn = 'warn', info = 'info', log = 'log' }

export class Notification {
  constructor(private id: number, private message: string,
    private type: NotificationType) { }
  public get Id() { return this.id; }
  public get Message() { return this.message; }
  public get Type() { return this.type; }
}

class NotificationService {
  public get Listado(): Array<Notification> { return store.state.listado; }
  public get HayNotificaciones(): boolean { return store.state.listado.length > 0; }

  public add(msg: string, type: NotificationType = NotificationType.error) {
    if (!msg || msg === '') {
      console.error('Falta el mensaje de notificación.');
      return;
    }
    const id = this.HayNotificaciones ?
      (store.state.listado[store.state.listado.length - 1].Id + 1) : 1;
    store.state.listado = [...store.state.listado, new Notification(id, msg, type)];
    if (type === NotificationType.error && store.state.debug) {
      console.error(`NOTIFICATION: ${msg}`);
    }
  }

  public remove(key: number) {
    store.state.listado = store.state.listado.filter(item => item.Id !== key);
  }

  public clear() {
    if (this.HayNotificaciones) {
      store.state.listado = [];
    }
  }
}

const notificationServices = new NotificationService();

export default notificationServices;
