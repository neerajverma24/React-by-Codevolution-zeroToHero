import React, { useReducer } from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export const CountContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        case 'default':
            return state
    }
}

function ParentCompoent() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
                <h1>Parent Component : Count - {count}</h1>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </CountContext.Provider>
        </div>
    )
}

export default ParentCompoent
