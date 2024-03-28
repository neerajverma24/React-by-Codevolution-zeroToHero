import React, { useState } from 'react'

function CounterStateHookTwo() {
    const initialValue = 0
    const [count, setCount] = useState(initialValue)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            // setCount(count + 1)    // this only increase the number by 1  in way : 2
            setCount(prevCount => prevCount + 1)   // by using prevCount , now it will increase the number by 5, which is the safer side
        }
    }
    return (
        <div>
            <h1>Count : {count}</h1><br />

            {/* Way 1 ======================= */}
            {/* <button onClick={() => setCount(count + 1)}>Increment</button>&nbsp;
            <button onClick={() => setCount(count - 1)}>Decrement</button>&nbsp;
            <button onClick={() => setCount(initialValue)}>Reset</button> &nbsp; */}


            {/* Way 2 ======================= */}
            {/* <button onClick={incrementFive}>Increment by 5</button>&nbsp; */}

            {/* Way 3   : SAFER SIDE ========================================== */}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            &nbsp;
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            &nbsp;
            <button onClick={() => setCount(initialValue)}>Reset</button>
            &nbsp;
            <button onClick={incrementFive}>Increment by 5</button>&nbsp;
        </div>
    )
}

export default CounterStateHookTwo
