import { Component, Host, h, State } from '@stencil/core';

const API_URL = 'https://picsum.photos/v2/list'

@Component({
  tag: 'my-muro',
  styleUrl: 'my-muro.css',
  shadow: true,
})
export class MyMuro {
  @State() listado = []
  @State() elemento: { [index: string]: any } = {}

  @State() errorMsg = ''
  @State() loading = true

  pk = 'id'
  pagina = 1
  rows = 100
  paginas = 10;


  componentWillLoad() {
    return this.load();
  }

  async load(num?: number) {
    if (num || num == 0) {
      this.pagina = num;
    }
    this.loading = true;
    return fetch(`${API_URL}?page=${this.pagina}&limit=${this.rows}`)
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            this.listado = data.map(item => ({...item, visible: false }))
          }).catch(data => this.errorMsg = data.message); // Error en el cuerpo
        } else { // Error del servidor
          this.errorMsg = `${response.status} - ${response.statusText}`
        }
      }).catch(data => this.errorMsg = data.message)// Error de petición
      .finally(() => this.loading = false);
  }

  @State() repintar = true;
  ver(index: number) {
    this.listado[index].visible = true
    this.listado = [...this.listado]
    this.repintar = !this.repintar
  }
  render() {
    if (this.loading) return <my-ajax-wait />;
    return (
      <Host>
        {this.repintar}
        {this.errorMsg && <my-alert message={this.errorMsg} onClear={() => this.errorMsg = ''} />}
        <div>
          {Array(this.paginas).fill(0, 0, this.paginas).map((_, index) =>
            <input key={index} type='button' disabled={(index + 1) === this.pagina} value={index + 1}
              onClick={this.load.bind(this, index + 1)} />
          )}
        </div>
        <div class="grid-container">
        {this.listado.map((item, index) => item.visible ?
          <div class="card" key={item.id}>
            <img src={item.download_url} alt={item.author} />
            <p>{item.author}</p>
          </div>
          :
          <div class="card" key={item.id}>
            <h1>{item.author}</h1>
            <p class='card-body'>
              <b>id: </b>{item.id}<br />
              <b>width: </b>{item.width}<br />
              <b>height: </b>{item.height}<br />
            </p>
            {!item.visible && <p><button type='button' onClick={this.ver.bind(this, index)}>Ver</button></p>}
          </div>
        )}
        </div>
      </Host>
    );
  }

}
