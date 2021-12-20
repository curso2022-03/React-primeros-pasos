import React, { useState, useRef } from 'react';
import ComponenteLista from './ComponenteLista';
export function Lista(props) {
  const listaInicial = [];

  if (props.elementos !== undefined) {
    for (let i = 0; i < props.elementos.length; i++) {
      listaInicial.push(
        <ComponenteLista
          done={props.elementos[i].done}
          texto={props.elementos[i].texto}
          prioridad={props.elementos[i].prioridad}
        />
      );
    }
  }

  const [listaComponentes, setListaComponentes] = useState([listaInicial]);
  const valorTextInput = useRef();
  const valorSelect = useRef();
  const funcion = function addElement() {
    const newLista = listaComponentes.concat(
      <ComponenteLista
        texto={valorTextInput.current.value}
        prioridad={valorSelect.current.value}
      />
    );
    setListaComponentes(newLista);
  };
  return (
    <div>
      {props.titulo} - {props.icono}
      <ul>
        {listaComponentes}
        <li>
          <input
            ref={valorTextInput}
            type="text"
            placeholder="Introduce una tarea"
          />
          <label>Prioridad: </label>
          <select ref={valorSelect}>
            <option>baja</option>
            <option>media</option>
            <option>alta</option>
          </select>
          <br />
          <button onClick={funcion}>Añadir</button>
        </li>
      </ul>
    </div>
  );
}
