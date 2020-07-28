import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Body() {
    const [image, setImage] = useState([])

    useEffect((props) => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=KcgWPPFu0j1OLnJDNKUe1hXZxlogb4VlwKffM2zK`)
        .then(response => {
            console.log(response)
            setImage(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])



return (
<body>
<img></img>
</body>



)

    
}