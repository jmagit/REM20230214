import { Component, Host, h, State } from '@stencil/core';

const API_URL = 'http://localhost:4321/api/' + 'contactos'
//const API_URL = 'http://localhost:4321/api-docs/v1/openapi.yaml'
type ModoCRUD = 'list' | 'add' | 'edit' | 'view' | 'delete';

@Component({
  tag: 'my-contactos',
  styleUrl: 'my-contactos.css',
  shadow: true,
})
export class MyContactos {
  @State() modo: ModoCRUD = 'list'
  @State() listado = []
  @State() elemento: { [index: string]: any } = {}

  @State() errorMsg = ''
  @State() loading = true

  pk = 'id'
  pagina = 0
  rows = 15
  paginas = 0;

  componentWillLoad() {
    return this.list();
  }

  async list(num?: number) {
    if (num || num == 0) {
      this.pagina = num;
    }
    this.loading = true;
    return fetch(`${API_URL}?_page=${this.pagina}&_rows=${this.rows}&_sort=nombre,apellidos`)
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            this.listado = data.content
            this.pagina = data.number
            this.paginas = data.totalPages
            this.modo = 'list'
          }).catch(data => this.errorMsg = data.message); // Error en el cuerpo
        } else { // Error del servidor
          this.errorMsg = `${response.status} - ${response.statusText}`
        }
      }).catch(data => this.errorMsg = data.message)// Error de petición
      .finally(() => this.loading = false);
  }

  async add() {
    this.modo = 'add';
    this.elemento = {}
  }

  async edit(key: number) {
    this.loading = true;
    return fetch(`${API_URL}/${key}`)
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            this.elemento = data;
            this.modo = 'edit'
          }).catch(data => this.errorMsg = data.message); // Error en el cuerpo
        } else { // Error del servidor
          this.errorMsg = `${response.status} - ${response.statusText}`
        }
      }).catch(data => this.errorMsg = data.message)// Error de petición
      .finally(() => this.loading = false);
  }

  async view(key: number) {
    this.loading = true;
    return fetch(`${API_URL}/${key}`)
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            this.elemento = data;
            this.modo = 'view'
          }).catch(data => this.errorMsg = data.message); // Error en el cuerpo
        } else { // Error del servidor
          this.errorMsg = `${response.status} - ${response.statusText}`
        }
      }).catch(data => this.errorMsg = data.message)// Error de petición
      .finally(() => this.loading = false);
  }

  async delete(key: number) {
    if (!window.confirm("¿Seguro?")) return;
    this.list();
  }

  cancel() {
    this.list();
  }

  send(elemento: any) {
    switch (this.modo) {
      case "add":
        this.elemento = elemento
        this.loading = true
        return fetch(`${API_URL}`, {
          method: 'POST',
          body: JSON.stringify(elemento),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          this.loading = false
          if (response.ok) {
            this.cancel();
          } else {
            this.errorMsg = `${response.status} - ${response.statusText}`
          }
        }).catch(err => {
          this.errorMsg = err.message
          this.loading = false
        })
      case "edit":
        alert(`PUT ${API_URL}/${this.elemento[this.pk]}\n${JSON.stringify(elemento)}`)
        this.cancel();
        break;
    }
  }

  render() {
    if (this.loading) return <my-ajax-wait />;
    let contains = null;
    switch (this.modo) {
      case "add":
      case "edit":
        contains = (
          <my-contactos-form
            isAdd={this.modo === "add"}
            elemento={this.elemento}
            onCancel={() => this.cancel()}
            onSend={e => this.send(e.detail)}
          />
        );
        break;
      case "view":
        contains = (
          <my-contactos-view
            elemento={this.elemento}
            onCancel={() => this.cancel()}
          />
        );
        break;
      default:
        contains = (
          <my-contactos-list
            listado={this.listado} pagina={this.pagina} paginas={this.paginas}
            onAdd={e => this.add()}
            onView={e => this.view(e.detail)}
            onEdit={e => this.edit(e.detail)}
            onDelete={e => this.delete(e.detail)}
            onChangePage={e => this.list(e.detail)}
          />
        );
        break;
    }
    return (
      <Host>
        {this.errorMsg && <my-alert message={this.errorMsg} onClear={() => this.errorMsg = ''} />}
        <h1>Contactos</h1>
        {JSON.stringify(this.elemento)}
        {contains}
      </Host>
    );
  }

}
