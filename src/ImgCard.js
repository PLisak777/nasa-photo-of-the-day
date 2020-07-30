import React from 'react';
import axios from 'axios';

const ImgCard = ({ image }) => {

    return (
        <div className="img-card">
            <h2 className="img-title">{ image.title }</h2>
            <div className="apod-img">
                <img src={ image.url } />
                </div>
            <p>Description: { image.explanation }</p>
        </div>
    )
}

export default ImgCard