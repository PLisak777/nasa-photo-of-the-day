import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const AppHeader = styled.header`
    display: flex;
    flex-flow: row wrap;
    height: 100px;
    `

export default function Header() {

return (
    <AppHeader className="App-header">
    <img className="App-logo" src='logo192.png'></img>
    <ul>
        <li><a className="App-link" href='#'>Home</a></li>
        <li><a className="App-link" href='#'>About</a></li>
        <li><a className="App-link" href='#'>Contact</a></li>        
    </ul>
    </AppHeader>
)
}