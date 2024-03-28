import React, { useEffect, useRef } from 'react'

function InputRef() {
    const inputRef = useRef(null)

    useEffect(() => {
        // input element to be focus
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    )
}

export default InputRef
