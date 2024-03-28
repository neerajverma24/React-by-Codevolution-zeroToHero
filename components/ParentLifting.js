import React, { useState } from 'react'
import ChildLifting from './ChildLifting';

function ParentLifting() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1)
    }
    return (
        <div>
            
            <h2>Value of Parent : {count}</h2>
            <ChildLifting value={count} onIncrement={handleIncrement} />

        </div>
    )
}

export default ParentLifting