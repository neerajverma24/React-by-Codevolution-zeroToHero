import React, { useState } from 'react'

function CounterStateHookFour() {
    const [items, setItems] = useState([])

    const addItem = e => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 100) + 1
        }])
    }
    return (
        <div>
            <h1>useHook with an Array</h1>
            <button onClick={addItem}>Add an random item number</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>Items : {item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default CounterStateHookFour
