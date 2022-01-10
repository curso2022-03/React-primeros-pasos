import React from 'react';
import { PaginaListas } from './components/paginaListas';
import { Home } from './components/Home';
import { Perfil } from './components/Perfil';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export function App() {
  return (
    <>
      <nav>
        <h1>Mi aplicación</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/listas">Lista de tareas</a>
          </li>
          <li>
            <a href="/perfil">Perfil</a>
          </li>
        </ul>
      </nav>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/listas" component={PaginaListas} />
        <Route path="/perfil" component={Perfil} />
      </Router>
    </>
  );
}
