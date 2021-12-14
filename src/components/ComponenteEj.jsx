import React from 'react';
import { ComponenteLista } from './ComponenteLista';
export function ComponenteEj(props) {
  return (
    <div>
      {props.titulo} - {props.icono}
      <ul>
        <ComponenteLista texto="Elemento 1" />
        <ComponenteLista texto="Elemento 2" />
        <ComponenteLista texto="Elemento 3" />
      </ul>
    </div>
  );
}
