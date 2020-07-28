import React, { useState, useEffect } from "react";
import WordsnStuff from './APOD'
import "./App.css";

function App() {



  
  return (
    <div className="App">
    <header className="App-header">
      <img className="App-logo" src='logo192.png'></img>
      <ul>
        <li><a className="App-link" href='#'>Home</a></li>
        <li><a className="App-link" href='#'>About</a></li>
        <li><a className="App-link" href='#'>Contact</a></li>        
      </ul>
    </header>
    <div><WordsnStuff /></div>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  )
}

export default App;
