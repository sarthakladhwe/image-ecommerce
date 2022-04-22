import React from 'react'
import PropTypes from 'prop-types';

import { Context } from '../Context';

function Image({img, className}) {

    const {toggleFavorite, addToCart} = React.useContext(Context)

    const [hovered, setHovered] = React.useState(false);

    const heartIcon = () => {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }   
    }

    const cartIcon = hovered && <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>

    return (
        <div 
            className={`${className} image-container`} 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className='image-grid' alt='' />
            {heartIcon()}
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