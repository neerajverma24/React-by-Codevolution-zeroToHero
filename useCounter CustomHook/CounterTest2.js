import React, { useState } from 'react'
import useCounter from './useCounter'

function CounterTest2() {
    const [count, increment, decrement, reset] = useCounter(10, 10)   // check useCounter , here first 10 is the initialValue , and second 10 is the second paramter i.e value

    return (
        <div>
            <h1>Count Test 2 : {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTest2
