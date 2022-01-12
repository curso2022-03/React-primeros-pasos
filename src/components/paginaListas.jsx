import React from 'react';
import Lista from './Lista';

export function PaginaListas() {
  //Lista de elementos
  let listaElementos1 = [
    { done: false, texto: 'Tirar la basura', prioridad: 'baja' },
    { done: true, texto: 'Limiar el baño', prioridad: 'alta' },
    { done: false, texto: 'Hacer la compra', prioridad: 'media' },
  ];
  //Añadimos un elemento al final de la lista
  listaElementos1.push({ done: true, texto: 'Mantenimiento PC' });
  let listaElementos2 = [
    { done: true, texto: 'Tomates', prioridad: 'media' },
    { done: false, texto: 'Queso', prioridad: 'alta' },
    { done: true, texto: 'Pilas' },
  ];
  let listaElementos3 = [
    { done: true, texto: 'Tarea de DI', prioridad: 'media' },
  ];
  return (
    <div className="pagina">
      <h1>Listas de tareas</h1>
      <Lista
        titulo="Tareas de la casa"
        icono="🏡"
        elementos={listaElementos1}
      />
      <Lista
        titulo="Lista de la compra"
        icono="🛒"
        elementos={listaElementos2}
      />
      <Lista titulo="Tareas del curso" icono="🏫" elementos={listaElementos3} />
    </div>
  );
}
