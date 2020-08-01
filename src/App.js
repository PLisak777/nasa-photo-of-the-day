import React from "react";
import Body from './Body'
import styled from 'styled-components';
import "./App.css";

const Pancake = styled.div`
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
`

function App() {

  return (
    <Pancake className="App">
      <Body />
    </Pancake>
  )
}

export default App
