import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <div className="logo-text">
        <img
          src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"
          width="200"
          height="150"
          id="logo"
          alt="logo"
        />
        <h1 className="text-header">Usando react</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listas">Lista de tareas</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
