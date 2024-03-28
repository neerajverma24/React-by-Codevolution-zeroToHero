import React, { useEffect, useState } from 'react'
// without useRef, it will give an error =================================
function HookTimer() {
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevState => prevState + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <div>
            Hook Timer : {timer}
            {/* <button onClick={() => clearInterval(interval)}>Clear Hook Timer</button> */}

            {/* this button gives an error becasue clearInterval is coped only to the effect hook */}
        </div>
    )
}

export default HookTimer
