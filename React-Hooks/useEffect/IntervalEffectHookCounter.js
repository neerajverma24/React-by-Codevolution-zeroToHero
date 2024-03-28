import React, { useEffect, useState } from 'react'

function IntervalEffectHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        // setCount(count + 1)
        setCount(prevCount => prevCount + 1)
    }

    function doSomething() {
        console.log('Do Something...')

    }

    useEffect(() => {
        doSomething();
        const interval = setInterval(tick, 1000) // timer is running every second with dependency

        return () => {
            clearInterval(interval)
        }
    }, [])
    

    return (
        <div>
            <h1>Count Interval Effect Hook : {count}</h1>
        </div>
    )
}

export default IntervalEffectHookCounter
