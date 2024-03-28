import { click } from '@testing-library/user-event/dist/click'
import React, { useState } from 'react'

function CounterStateHook() {
    const [count, setCount] = useState(0)

    return (
        <div>
            {/* <button onClick={() => setCount(count + 1)}>Count : {count}</button> */}
            <button onClick={() => setCount(count + 1)}>Count : {count}</button>
        </div>
    )
}

export default CounterStateHook
