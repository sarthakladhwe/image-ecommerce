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

    console.log(images)
    console.log(cartItems)

    React.useEffect(() => {
        fetch(`https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`)
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    return (
        <Context.Provider value={{images, toggleFavorite, addToCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}