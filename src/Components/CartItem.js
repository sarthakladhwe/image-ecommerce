import React from 'react'

export default function CartItem({item, removeFromCart}) {

    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={() => removeFromCart(item)}></i>
            <img src={item.url} width="130px" alt=''/>
            <p>$5.99</p>
        </div>
    )
}