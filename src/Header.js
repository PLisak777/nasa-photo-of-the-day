import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AppHeader = styled.header`
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    width: 100%;
    height: 100px;

    img {
        width: 50px;
        height: 50px;
    }
    `

export default function Header() {

return (
    <AppHeader className="App-header">
    <img className="App-logo" src='logo192.png'></img>
    <ul>
        <li><a className="App-link" href='#'>Home</a></li>
        {/* <li><a className="App-link" href='#'>About</a></li>
        <li><a className="App-link" href='#'>Contact</a></li>         */}
    </ul>
    </AppHeader>
)
}