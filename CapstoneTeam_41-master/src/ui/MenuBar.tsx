// src/Menu.js
import React from 'react';
import './MenuBar.css';

function MenuBar() {
  return (
      <div className = ".MenuBar">
        <div className="row">
        <div className="col-md-9">
        <button className = "Button">Home</button>
        <button className = "Button"> Assessments </button>
        <button className = "LoginButton">Login/Signup</button>
        </div>
        </div>
    </div>
  );
}

export default MenuBar;
