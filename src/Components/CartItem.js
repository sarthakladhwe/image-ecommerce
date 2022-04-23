import React from 'react'

export default function CartItem({item, removeFromCart}) {

    const [hovered, setHovered] = React.useState(false);    

    return (
        <div className="cart-item">
            <i className={`ri-delete-bin-${hovered ? 'fill' : 'line'}`}
                onClick={() => removeFromCart(item)} 
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}></i>
            <img src={item.url} width="130px" alt=''/>
            <p>{(999).toLocaleString("en-IN", {style: "currency", currency: "INR"})}</p>
        </div>
    )
}