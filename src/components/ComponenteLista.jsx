import React from 'react';
import './Componente-lista.css';
export function ComponenteLista(props) {
  let claseLista = props.prioridad;
  if (props.done) {
    claseLista += ' el-done';
  } else {
    claseLista += ' el-undone';
  }
  return (
    <li className={claseLista}>
      {props.texto}
      <input type="checkbox" />
    </li>
  );
}

ComponenteLista.defaultProps = {
  prioridad: 'baja',
};
