import React from 'react'

function Count({ text, count }) {
    console.log(`Rendering ${text}`)
    return (
        <div>
            <h3>Age Component</h3>
            <p>{text} = {count}</p>
        </div>
    )
}

export default React.memo(Count)
