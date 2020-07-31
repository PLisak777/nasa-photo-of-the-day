import React from "react";
import AppHeader from './Header'
import Body from './Body'
import styled from 'styled-components';
import "./App.css";

const Pancake = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
`

function App() {


  return (
    <Pancake className="App">
      <AppHeader />
      <Body />
    </Pancake>
  )
}

export default App
