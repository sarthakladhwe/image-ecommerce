import React from 'react'

const Context = React.createContext()

function ContextProvider(props) {

    const [images, setImages] = React.useState([])

    return (
        <Context.Provider value={{images}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}