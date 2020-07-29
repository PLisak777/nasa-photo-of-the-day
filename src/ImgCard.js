import React from 'react';
import axios from 'axios';
import Body from './Body';

const ImgCard = ({ images }) => {

    return (
        <div className="img-card">
            <h2 className="img-title">{images.title}</h2>
            <div className="apod-img">{images.url}</div>
            <p>Description: {images.explanation}</p>
        </div>
    )
}

export default ImgCard