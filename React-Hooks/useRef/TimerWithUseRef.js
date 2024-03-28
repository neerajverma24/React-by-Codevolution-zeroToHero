import React, { useEffect, useRef, useState } from 'react'

function TimerWithUseRef() {
    const [timer, setTimer] = useState(0)

    const intervalRef = useRef()
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevState => prevState + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    })

    return (
        <div>
            <h1>Hook timer : {timer}</h1>
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
        </div>
    )
}

export default TimerWithUseRef
