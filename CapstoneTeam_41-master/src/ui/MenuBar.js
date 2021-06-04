  
// src/Menu.js
import React from 'react';
import './MenuBar.css';

function MenuBar() {

  function goHome(e){
    console.log('Home clicked');
  }

  function clickAssessments(e){
    console.log("Assessments clicked");
  }

  function goLogin(e){
    console.log("Login clicked");
  }

  return (
      <div className = ".MenuBar">
          <div className="float-container">
            <div className="float-child" align="left">
            <button onClick={goHome} className = "Button">Home</button>
            <button onClick={clickAssessments}  className = "Button"> Assessments </button>
            </div>
            <div className="float-child" align="right">
            <button onClick={goLogin} className = "LoginButton">Login/Signup</button>
            </div>
          
          </div>
    </div>
  );
}

export default MenuBar