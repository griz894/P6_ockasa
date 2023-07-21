import React from 'react';
import './Banner.scss'; 

const Banner = ({ imageUrl, altText, showTitle }) => {
    return (
        <div className="banner">
            {showTitle && <h2>Chez vous, partout et ailleurs</h2>}
                <div className='darkDiv'></div>
                <img src={imageUrl} alt={altText} />   
        </div>
    )
}

export default Banner;
