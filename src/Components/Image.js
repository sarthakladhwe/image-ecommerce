import React from 'react'
import { Context } from '../Context';

function Image({img, className}) {

    const {toggleFavorite} = React.useContext(Context)

    const [hovered, setHovered] = React.useState(false);

    const heartIcon = hovered && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div 
            className={`${className} image-container`} 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className='image-grid' alt='' />
            {heartIcon}
            {cartIcon}
        </div>
    )
}

export default Image