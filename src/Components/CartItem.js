import React from 'react'
import PropTypes from 'prop-types';
import useHover from '../Hooks/useHover';

export default function CartItem({item, removeFromCart}) {

    const [hovered, ref] = useHover();    

    return (
        <div className="cart-item">
            <i className={`ri-delete-bin-${hovered ? 'fill' : 'line'}`}
                onClick={() => removeFromCart(item)}
                ref={ref}>
            </i>
            <img src={item.url} width="130px" alt=''/>
            <p>{(999).toLocaleString("en-IN", {style: "currency", currency: "INR"})}</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}