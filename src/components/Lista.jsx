import React from 'react';
import { ComponenteLista } from './ComponenteLista';
export function Lista(props) {
  let listaComponentes = [];
  for (let i = 0; i < props.elementos.length; i++) {
    listaComponentes.push(<ComponenteLista texto={props.elementos[i]} />);
  }

  return (
    <div>
      {props.titulo} - {props.icono}
      <ul>{listaComponentes}</ul>
    </div>
  );
}
