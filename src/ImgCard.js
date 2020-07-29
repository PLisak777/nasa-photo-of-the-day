import React from 'react';


const ImgCard = ({ image }) => {






    return (
        <div className="img-card">
            <h2>{image.title}</h2>
            <p>Description: {image.description}</p>
        </div>
    )
}

export default ImgCard