import React from 'react'
import PropTypes from 'prop-types';

import { Context } from '../Context';
import useHover from '../Hooks/useHover';

function Image({img, className}) {

    const {toggleFavorite, addToCart, removeFromCart, cartItems} = React.useContext(Context)

    const [hovered, ref] = useHover();
    const [inCart, setInCart] = React.useState(false);

    const heartIcon = () => {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }   
    }

    function cartIcon() {
        if(inCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }

    React.useEffect(() => {
        setInCart(cartItems.some(item => item.id === img.id))
    }, [cartItems])

    return (
        <div 
            className={`${className} image-container`} 
            ref={ref}
        >
            <img src={img.url} className='image-grid' alt='' />
            {heartIcon()}
            {cartIcon()}
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