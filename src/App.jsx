import React from 'react';
import Header from './components/Header';
import { PaginaListas } from './components/paginaListas';
import { Home } from './components/Home';
import { Perfil } from './components/Perfil';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/listas" component={PaginaListas} />
      <Route path="/perfil" component={Perfil} />
    </Router>
  );
}
