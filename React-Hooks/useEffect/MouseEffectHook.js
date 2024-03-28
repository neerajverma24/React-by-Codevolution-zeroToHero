import React, { useEffect, useState } from 'react'

function MouseEffectHook() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect is working...")
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log("component unmounting code")
            window.removeEventListener('mousemove', logMousePosition)
        }           // this extra return for the file MouseEfectContainer.js, which remove    the      "Mouse Event in console" which is continued to displayed even after !displayed


    }, [])                              // after we apply dependency, useEffect console will not working becoz there is no dependency..
    return (
        <div>
            <h1>Mouse Co-ordinates</h1>
            <h2>Position X - {x}</h2>
            <h2>Position Y - {y}</h2>
        </div>
    )
}

export default MouseEffectHook
