import { useState } from 'react'

function useCounter(initialValue = 0, value) {     // passing the second parameter here
    const [count, setCount] = useState(initialValue)

    const increment = () => {
        setCount(count + value)
    }

    const decrement = () => {
        setCount(count - value)
    }

    const reset = () => {
        setCount(0)
    }

    return [count, increment, decrement, reset]
}

export default useCounter
