import React from 'react'
import PropTypes from 'prop-types';

import { Context } from '../Context';

function Image({img, className}) {

    const {toggleFavorite} = React.useContext(Context)

    const [hovered, setHovered] = React.useState(false);

    const heartIcon = hovered && 
        !img.isFavorite && 
        <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>

    const filledHeartIcon = img.isFavorite && 
        <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>

    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div 
            className={`${className} image-container`} 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className='image-grid' alt='' />
            {heartIcon}
            {filledHeartIcon}
            {cartIcon}
        </div>
    )
}

Image.propTypes = {
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    }),
    className: PropTypes.string
}

export default Image