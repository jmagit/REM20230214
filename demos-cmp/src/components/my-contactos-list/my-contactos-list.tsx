import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'my-contactos-list',
  styleUrl: 'my-contactos-list.css',
  shadow: true,
})
export class MyContactosList {
  @Prop() listado = []
  @Prop() pagina = 0
  @Prop() paginas = 0
  @Event() add: EventEmitter<null>;
  @Event() edit: EventEmitter<number>;
  @Event() view: EventEmitter<number>;
  @Event() delete: EventEmitter<number>;
  @Event() changePage: EventEmitter<number>;

  sendAdd() {
    this.add.emit();
  }
  sendEdit(key: number) {
    this.edit.emit(key);
  }
  sendView(key: number) {
    this.view.emit(key);
  }
  sendDelete(key: number) {
    this.delete.emit(key);
  }
  sendChangePage(num: number) {
    this.changePage.emit(num);
  }

  render() {
    return (
      <Host>
        <table>
          <thead>
            <tr>
              <th>Lista de contactos</th>
              <th><input type='button' value='add' onClick={this.sendAdd.bind(this)} /></th>
            </tr>
          </thead>
          <tbody>
            {this.listado.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre} {item.apellidos}</td>
                <td>
                  <input type='button' value='view' onClick={this.sendView.bind(this, item.id)} />
                  <input type='button' value='edit' onClick={this.sendEdit.bind(this, item.id)} />
                  <input type='button' value='delete' onClick={this.sendDelete.bind(this, item.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          {Array(this.paginas).fill(0, 0, this.paginas).map((_, index) =>
            <input key={index} type='button' disabled={index === this.pagina} value={index + 1}
              onClick={this.sendChangePage.bind(this, index)} />
          )}
        </div>
      </Host>
    );
  }

}
