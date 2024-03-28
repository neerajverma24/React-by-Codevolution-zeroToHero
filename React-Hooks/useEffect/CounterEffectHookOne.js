import React, { useState, useEffect } from 'react'

function CounterEffectHookOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')        // used in conditionally run effect

    useEffect(() => {
        console.log("useEffect - Updating document title  'Conditionally' ")
        document.title = `Clicked ${count} times`
    }, [count])                  // sirf count pe depend karega... used in run effect

    
    return (
        <div>
            {/* {console.log("Render is working..")} */}

            {/* <h1>useEffect after Render</h1> */}
            {/* <button onClick={() => setCount(count + 1)}>Clicked {count} times</button> */}

            {/* ========================================================================= */}
            <h2>Conditonally Run (Dependency)</h2>
            <input type='text'
                value={name}
                onChange={e => setName(e.target.value)}>
            </input>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>

        </div >
    )
}

export default CounterEffectHookOne
