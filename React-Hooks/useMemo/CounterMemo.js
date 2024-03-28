import React, { useMemo, useState } from 'react'

function CounterMemo() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        let i = 0;
        while (i < 200000000) i++  // this condition will slow the performance of the browser...
        setCounterOne(counterOne + 1)
    }

    // but we can see that it will also slow down the performance of the counterTwo when we click on the counterTwo button...   (so to overcome from this, useMemo comes in the picture)
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    // check both the buttons with useMemo and without it... see the performance of it...
    const isEven = useMemo(() => {
        return counterOne % 2 == 0
    }, [counterOne])


    return (
        <div>
            <h1>useMemo Hook</h1>
            <h3>Counter 1 value : </h3>
            <button onClick={incrementOne}>CounterOne : {counterOne}</button>&nbsp;
            {/* {isEven() ? 'Even' : 'Odd'}       without useMemo   */}
            {isEven ? 'Even' : 'Odd'}

            <br /><br />
            <h3>Counter 2 value : </h3>
            <button onClick={incrementTwo}>CounterTwo : {counterTwo}</button>
        </div>
    )
}

export default CounterMemo
