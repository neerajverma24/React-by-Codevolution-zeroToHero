import React, { useState } from 'react'
import MouseEffectHook from './MouseEffectHook'

function MouseEffectContainer() {
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <MouseEffectHook />}
        </div>
    )
}

export default MouseEffectContainer
