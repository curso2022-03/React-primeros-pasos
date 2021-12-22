import React from 'react';
import './Header.css';
export default function Header(props) {
  return (
    <header>
      <div class="logo-text">
        <img
          src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"
          width="200"
          height="150"
          id="logo"
          alt="logo"
        />
        <h1 class="text-header">Usando react</h1>
      </div>
    </header>
  );
}
