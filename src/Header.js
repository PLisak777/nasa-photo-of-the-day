import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function Header() {



return (
    <header className="App-header">
    <img className="App-logo" src='logo192.png'></img>
    <ul>
        <li><a className="App-link" href='#'>Home</a></li>
        <li><a className="App-link" href='#'>About</a></li>
        <li><a className="App-link" href='#'>Contact</a></li>        
    </ul>
    </header>
)
}