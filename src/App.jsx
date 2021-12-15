import React from 'react';
import { Lista } from './components/Lista';

export function App() {
  //Lista de elementos
  let listaElementos1 = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  //Añadimos un elemento al final de la lista
  listaElementos1.push('Elemento 4');
  let listaElementos2 = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  let listaElementos3 = ['Elemento 1'];
  return (
    <div>
      <h1>Hola (desde componente)</h1>
      <Lista titulo="Componente 1" icono=":)" elementos={listaElementos1} />
      <Lista titulo="Componente 2" icono=":(" elementos={listaElementos2} />
      <Lista titulo="Componente 3" icono=";)" elementos={listaElementos3} />
    </div>
  );
}
