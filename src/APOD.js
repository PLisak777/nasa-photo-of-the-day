import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function WordsnStuff() {
    const [words, setWords] = useState([])

    const effectFn = () => {
        axios.get('https://api.nasa.gov/planetary/apod')
        .then(response => {
            console.log(response)
            // setWords(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(effectFn, [])

return (
    <div>
        <WordsnStuff />
    </div>
)




}