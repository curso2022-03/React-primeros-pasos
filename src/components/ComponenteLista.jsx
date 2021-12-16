import React from 'react';
import './Componente-lista.css';
class ComponenteLista extends React.Component {
  constructor(props) {
    super(props);
    this.done = props.done;
    this.prioridad = props.prioridad;
    this.texto = props.texto;
    this.setElementClass();
  }

  setElementClass() {
    this.claseLista = this.prioridad;
    if (this.done) {
      this.claseLista += ' el-done';
    } else {
      this.claseLista += ' el-undone';
    }
  }
  setTaskStatus() {
    this.done = !this.done;
    this.setElementClass();
  }
  render() {
    return (
      <li className={this.claseLista}>
        <input type="checkbox" onChange={this.setTaskStatus()} />
        {this.texto}
      </li>
    );
  }
}
export default ComponenteLista;
ComponenteLista.defaultProps = {
  prioridad: 'baja',
};
