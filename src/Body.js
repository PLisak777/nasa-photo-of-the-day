import React, { useEffect, useState } from 'react';
import ImgCard from './ImgCard'
import axios from 'axios';

export default function Body() {
    const [images, setImage] = useState({})

    useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=KcgWPPFu0j1OLnJDNKUe1hXZxlogb4VlwKffM2zK&date=2020-03-21")
    .then(response => {
        console.log(response)
        setImage(response.data.url)
    })
    .catch(error => {
        console.log(error)
    })
}, [])

return (
    <div className="img-card">TEST
        {<ImgCard images={setImage} />}
    </div>
)
}