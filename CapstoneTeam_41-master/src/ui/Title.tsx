// src/Title.js

import React from 'react'
import HomepageImage from './components/HomepageImage'
import './Title.css';

function Title() {
  return (
    <div className="Title">
      <h1>Conductive Attitudes</h1>
      <div className="HeaderImage">
        <HomepageImage />
      </div> 
    </div> 
  )
}

export default Title