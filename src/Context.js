import React from 'react'

const Context = React.createContext()

function ContextProvider(props) {

    const [images, setImages] = React.useState([])

    React.useEffect(() => {
        fetch(`https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`)
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    return (
        <Context.Provider value={{images}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}