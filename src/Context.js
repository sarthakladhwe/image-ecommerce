import React from 'react'

const Context = React.createContext()

function ContextProvider(props) {
    return (
        <Context.Provider value={"sss"}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}