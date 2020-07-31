import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
`

const ImgCard = () => {
    const [image, setImage] = useState([])

    const getFn = () => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=KcgWPPFu0j1OLnJDNKUe1hXZxlogb4VlwKffM2zK&date=2020-03-21")
            .then(response => {
                console.log(response.data)
                setImage(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        }

useEffect(getFn, [])

    return (
        <Card className="img-card">
            <h2 className="img-title">{image.title}</h2>
            <div className="apod-img">
                <img src={image.url} />
                </div>
            <p>Description: {image.explanation}</p>
        </Card>
    )
}

export default ImgCard