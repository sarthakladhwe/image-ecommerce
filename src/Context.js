import React from 'react'

const Context = React.createContext()

function ContextProvider({children}) {

    const [images, setImages] = React.useState([])

    function toggleFavorite(id) {
        setImages(prevImages => prevImages.map(img => {
            return {
                ...img,
                isFavorite: img.id === id ? !img.isFavorite : img.isFavorite
            }
        }))
    }

    console.log(images)

    React.useEffect(() => {
        fetch(`https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`)
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    return (
        <Context.Provider value={{images, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}