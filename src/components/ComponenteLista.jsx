import React from 'react';
import './Componente-lista.css';
export function ComponenteLista(props) {
  let claseLista = '';
  if (props.done) {
    claseLista = 'el-checked';
  } else {
    claseLista = 'el-unchecked';
  }

  return (
    <li className={claseLista}>
      {props.texto}
      <input type="checkbox" />
    </li>
  );
}
