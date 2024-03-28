import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        // for firstCounter  ===============================================

        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - 1 }
        case 'increment5':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement5':
            return { ...state, firstCounter: state.firstCounter - 5 }

        // for secondCount  ================================================
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - 2 }


        case 'reset':
            return initialState
        case 'default':
            return state
    }
}
function Counter2() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>useReducer in a complex way..</h1>

            <h3>Count firstCounter - {count.firstCounter}</h3>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
                Increment by 5
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement by 5</button>


            <h3>Count secondCounter - {count.secondCounter}</h3>
            <button onClick={() => dispatch({ type: 'increment2', value: 2 })}>
                Increment by 2
            </button>
            <button onClick={() => dispatch({ type: 'decrement2' })}>Decrement by 2</button>

            <h3>Reset button works for both the counts</h3>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default Counter2
