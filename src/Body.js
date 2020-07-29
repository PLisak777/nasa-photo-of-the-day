import React, { useEffect, useState } from 'react';
import ImgCard from './ImgCard'
import axios from 'axios';

export default function Body() {
    const [images, setImage] = useState({})

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod")
        .then((response) => {
            console.log(response)
            setImage(response.data.url)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])



return (
<body>
    <div className="img-card">TEST
{images.map(image => <ImgCard key={image.id} image={image.url} />)}
    </div>
</body>



)

    
}