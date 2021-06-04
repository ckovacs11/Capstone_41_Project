// src/Title.js

import React from 'react'
import Logo from './components/Logo'
import './Header.css';

function Header() {
  return (
    <header>
    <div className="HeaderBuffer">
      <div className="Header">
        <h1>  Conductive Attitudes</h1>
        <div className="Logo">
          <Logo />
        </div> 
      </div> 
    </div>
    </header>
  )
}

export default Header