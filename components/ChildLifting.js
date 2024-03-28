import React from 'react'

function ChildLifting({ value, onIncrement }) {
    return (
        <div>
            <h4>Value of Child : {value}</h4>
            <button onClick={onIncrement}>Increment</button>
        </div>
    )
}

export default ChildLifting