import React from 'react'

function MemoChild({ name }) {
    console.log("Rendering Memo Component..")  // it only rendered once in the console when we use React.memo 
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoChild)