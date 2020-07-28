import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function Header() {
    const [words, setWords] = useState({})

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?date=2015-03-15&api_key=KcgWPPFu0j1OLnJDNKUe1hXZxlogb4VlwKffM2zK')
        .then(response => {
            console.log(response)
            // setWords(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])


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