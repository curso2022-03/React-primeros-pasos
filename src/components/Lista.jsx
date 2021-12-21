import React from 'react';
import ComponenteLista from './ComponenteLista';
class Lista extends React.Component {
  constructor(props) {
    super(props);
    this.listaInicial = [];
    this.listaComponentes = [];
    this.tareaIntroducida = React.createRef();
    this.prioridadSeleccionada = React.createRef();
    this.state = {
      listaComponentes: this.listaInicial,
    };
  }

  setElements() {
    if (this.props.elementos !== undefined) {
      for (let i = 0; i < this.props.elementos.length; i++) {
        this.listaInicial.push(
          <ComponenteLista
            done={this.props.elementos[i].done}
            texto={this.props.elementos[i].texto}
            prioridad={this.props.elementos[i].prioridad}
          />
        );
      }
    }
  }

  addElement() {
    const newLista = this.state.listaComponentes.concat(
      <ComponenteLista
        texto={this.tareaIntroducida.current.value}
        prioridad={this.prioridadSeleccionada.current.value}
      />
    );
    this.setState({ listaComponentes: newLista });
  }
  render() {
    this.setElements();
    return (
      <div>
        {this.props.titulo} - {this.props.icono}
        <ul>
          {this.state.listaComponentes}
          <li>
            <input
              ref={this.tareaIntroducida}
              type="text"
              placeholder="Introduce una tarea"
            />
            <label>Prioridad: </label>
            <select ref={this.prioridadSeleccionada}>
              <option>baja</option>
              <option>media</option>
              <option>alta</option>
            </select>
            <br />
            <button onClick={this.addElement.bind(this)}>Añadir</button>
          </li>
        </ul>
      </div>
    );
  }
}
export default Lista;