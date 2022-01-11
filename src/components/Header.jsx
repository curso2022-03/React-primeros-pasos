import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { MenuItems } from '../data/MenuItems';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  /**
   * Forma menu nº1: bucle for
   */
  createMenuLinks() {
    const listaComponentes = [];
    for (let i = 0; i < MenuItems.length; i++) {
      listaComponentes.push(
        <li>
          <Link to={MenuItems[i].path}>{MenuItems[i].title}</Link>
        </li>
      );
    }
    return listaComponentes;
  }
  render() {
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
          {/**
           * Para la forma 1:
           *  <ul>{this.createMenuLinks()}</ul>
           */}
          {/**
           * Forma 2:map (funcion)
           * {MenuItems.map(function(item){
           * return (
           * <li>
           *  <Link to={item.path}>{item.title}</Link>
           * </li>
           * );
           * })}
           * </ul>
           */}
          {/**
           * Forma 3:map (funcion flecha)
           */}
          {MenuItems.map((item) => {
            return (
              <li>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </header>
    );
  }
}
export default Header;
