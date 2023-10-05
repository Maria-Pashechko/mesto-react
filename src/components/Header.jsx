import React from 'react';
import logo from '../images/logo-mesto.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo-mesto" src={logo} alt="Место"/>
    </header>
  );
}

export default Header;