import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext()

export const StateProvider = ({ reducer, initialSstate, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialSstate)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
