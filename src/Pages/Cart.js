import React from 'react'
import {Context} from '../Context'
import CartItem from '../Components/CartItem'

export default function Cart() {

    const {cartItems, removeFromCart, placeOrder} = React.useContext(Context)
    const [buttonText, setButtonText] = React.useState("Place Order")

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart}/>
    ))

    const totalCost = cartItems.length * 999;

    function placeItemOrder() {
        setTimeout(() => {
            placeOrder();
            setButtonText("Place Order");
        }, 3000);
        setButtonText("Ordering...")
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost.toLocaleString("en-IN", {style: "currency", currency: "INR"})}</p>
            <div className="order-button">
                {
                    cartItems.length > 0 ?
                    <button onClick={placeItemOrder}>{buttonText}</button> :
                    <p>You have no items in the cart!</p>
                }
            </div>
        </main>
    )
}