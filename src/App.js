import React, { useState, useEffect } from "react";
import Header from './Header'
import Body from './Body'
import "./App.css";

function App() {


  return (
    <div className="App">
      <Header />
    <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Body />
    </div>
  )
}

export default App
