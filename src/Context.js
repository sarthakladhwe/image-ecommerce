import React from 'react'

const Context = React.createContext()

function ContextProvider({children}) {

    const [images, setImages] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])

    function toggleFavorite(id) {
        setImages(prevImages => prevImages.map(img => {
            return {
                ...img,
                isFavorite: img.id === id ? !img.isFavorite : img.isFavorite
            }
        }))
    }

    function addToCart(newItem) {
        setCartItems(prevCartItems => [...prevCartItems, newItem])
    }
    
    function removeFromCart(removeItem) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== removeItem.id && item))
    }

    function placeOrder() {
        setCartItems([])
    }

    console.log(images)
    console.log(cartItems)

    React.useEffect(() => {
        fetch(`https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`)
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    return (
        <Context.Provider value={{images, toggleFavorite, addToCart, removeFromCart, placeOrder, cartItems}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}