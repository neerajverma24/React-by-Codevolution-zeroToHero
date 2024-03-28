import React, { useState } from 'react'
import useCounter from './useCounter'

function CounterTest1() {
    const [count, increment, decrement, reset] = useCounter(0, 1)   // // check useCounter , here  0 is the initialValue , and  1 is the second paramter i.e value

    return (
        <div>
            <h1>Count Test 1 : {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTest1
