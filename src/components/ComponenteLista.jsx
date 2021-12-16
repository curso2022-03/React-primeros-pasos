import React from 'react';
import './Componente-lista.css';
export function ComponenteLista(props) {
  let claseLista = '';
  if (props.done) {
    claseLista = 'el-checked';
  } else {
    claseLista = 'el-unchecked';
  }
  if (props.prioridad === 'alta') {
    claseLista += ' alta';
  } else if (props.prioridad === 'media') {
    claseLista += ' media';
  } else {
    claseLista += ' baja';
  }
  return (
    <li className={claseLista}>
      {props.texto}
      <input type="checkbox" />
    </li>
  );
}
