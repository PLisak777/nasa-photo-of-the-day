import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

// const Card = styled('img-card')`
//     display:grid;
//     grid-template-columns: minmax(150px, 25%) 1fr;
//     color: red;
// `

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
        
        <Card className='img-card'>
        <CardHeader></CardHeader>
        <CardBody>
            <CardTitle tag='h2'>{image.title}</CardTitle>
            <CardText tag='p' className='card-text'>{image.explanation}</CardText>
            <img className='asod-img' src={image.url} />
        </CardBody>
        <CardFooter></CardFooter>
        </Card>
    )
}

export default ImgCard