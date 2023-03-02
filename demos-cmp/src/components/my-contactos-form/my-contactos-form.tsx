import { Component, Host, h, Prop, EventEmitter, Event, State, Element } from '@stencil/core';

@Component({
  tag: 'my-contactos-form',
  styleUrl: 'my-contactos-form.css',
  shadow: true,
})
export class MyContactosForm {
  @Prop() elemento = {}
  @Prop() isAdd = false
  @Event() cancel: EventEmitter<null>;
  @Event() send: EventEmitter<Object>;

  @State() data: { [index: string]: any } = {};
  @State() errors: { [index: string]: string } = null;

  @Element() el: HTMLElement;
  form!: HTMLFormElement;

  constructor() {
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillLoad() {
    this.data = { ...this.elemento }
  }

  componentDidLoad() {
    this.validar();
  }

  handleChange(event: InputEvent) {
    let cntr = event.target as HTMLInputElement
    this.data = { ...this.data, [cntr.name]: (cntr.type === 'checkbox' ? cntr.checked : cntr.value) };
    this.validar();
  }

  validarCntr(cntr: HTMLInputElement | HTMLTextAreaElement) {
    if (!cntr.name /*|| !cntr.value*/) return;
    switch (cntr.name) {
      case "nombre":
        cntr.setCustomValidity(cntr.value !== cntr.value.toUpperCase()
          ? "Debe estar en mayúsculas" : '');
        break;
    }
  }

  validar() {
    if (this.form) {
      const errors = {};
      // for (let cntr of this.form.elements) {
      for (let i = 0; i < this.form.elements.length; i++) {
        let cntr = this.form.elements[i] as any;
        if (cntr.name) {
          this.validarCntr(cntr);
          if (cntr.validationMessage) {
            errors[cntr.name] = cntr.validationMessage + (cntr.validity.patternMismatch && cntr.placeholder ? `: ${cntr.placeholder}` : '');
          }
        }
      }
      this.errors = Object.keys(errors).length > 0 ? errors : null;
    }
  }

  render() {
    // noValidate onSubmit={(e) => e.preventDefault()}
    const tratamientos = ['Sr.', 'Sra.', 'Srta.', 'Dr.', 'Dra.', 'Ilmo.', 'Ilma.', 'Excmo.', 'Excma.',]
    return (
      <Host>
        {/* {JSON.stringify(this.elemento)} */}
        <form name="miForm" ref={tag => this.form = tag as HTMLFormElement} onSubmit={(e) => e.preventDefault()} >
          <div class="form-group col-md-2">
            <label htmlFor="id"> Código: </label>
            {this.isAdd ? [
              <input type="number" id="id" name="id" required min={0} value={this.data.id} onInput={this.handleChange} />,
              <output class="error" hidden={!this.errors?.id}> {this.errors?.id}</output>
            ] : (
              <output> {this.data.id} </output>
            )}
            <label class="form-label" htmlFor="tratamiento"> Tratamiento:</label>
            <select class="form-control form-select" name="tratamiento" id="tratamiento" onInput={this.handleChange} required>
              <option value={null}></option>
              {tratamientos.map(item => (
                <option key={item} selected={this.data.tratamiento === item}>{item}</option>
              ))}
            </select>
            <label htmlFor="nombre"> Nombre: </label>
            <input type="text" id="nombre" name="nombre" value={this.data.nombre} required minLength={2} onInput={this.handleChange} placeholder="Nombre" />
            <output class="error" hidden={!this.errors?.nombre}> {this.errors?.nombre}</output>
            <label htmlFor="apellidos"> Apellidos: </label>
            <input type="text" id="apellidos" name="apellidos" value={this.data.apellidos} minLength={2} onInput={this.handleChange} />
            <output class="error" hidden={!this.errors?.apellidos}> {this.errors?.apellidos}</output>
          </div>
          <div class="form-group col-md-2">
            <label htmlFor="email"> Correo: </label>
            <input type="email" id="email" name="email" value={this.data.email} required onInput={this.handleChange} />
            <output class="error" hidden={!this.errors?.email}> {this.errors?.email}</output>
            <label htmlFor="nacimiento"> F. Nacimiento: </label>
            <input type="date" id="nacimiento" name="nacimiento" value={this.data.nacimiento} required onInput={this.handleChange} />
            <output class="error" hidden={!this.errors?.nacimiento}> {this.errors?.nacimiento}</output>
            <label htmlFor="telefono"> Teléfono: </label>
            <input type="pattern" pattern='^(\d{3}\s){2}\d{3}$' placeholder="3 grupos de 3 dígitos separados por 1 espacio" id="telefono" name="telefono" value={this.data.telefono} onInput={this.handleChange} />
            <output class="error" hidden={!this.errors?.telefono}> {this.errors?.telefono}</output>
          </div>
          <fieldset class="form-group col-md-2">
            <legend class="col-form-label col-sm-2 pt-0">Sexo</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="sexo" id="sexo1" value="H" checked={this.data.sexo === 'H'} onInput={this.handleChange} />
                <label class="form-check-label" htmlFor="sexo1">Hombre</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="sexo" id="sexo2" value="M" checked={this.data.sexo === 'M'} onInput={this.handleChange} />
                <label class="form-check-label" htmlFor="sexo2">Mujer</label>
              </div>
            </div>
          </fieldset>
          <div class="form-group col-md-2">
            <div>Situación:</div>
            <div>
              <div class="form-check">
                <input class="form-check-input" type="Checkbox" id="conflictivo" name="conflictivo"
                  checked={this.data.conflictivo} onInput={this.handleChange} />
                <label class="form-check-label" htmlFor="conflictivo">Conflictivo</label>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="icono"> icono: </label>
            {/* <textarea id="icono" name="icono" cols={100} rows={5} required maxLength={100} onInput={this.handleChange}>{this.data.icono}</textarea> */}
            <textarea id="icono" name="icono" cols={100} rows={5} required maxLength={100} onInput={this.handleChange} value={this.data.icono} />
            <output class="error" hidden={!this.errors?.icono}> {this.errors?.icono}</output>
          </div>

          <div>
            <input disabled={this.errors != null} type='submit' onClick={e => this.send.emit(this.data)} />
            <input type='button' value='Volver' onClick={() => this.cancel.emit()} />
          </div>
          {JSON.stringify(this.data)}
        </form>
      </Host>
    );
  }

}
