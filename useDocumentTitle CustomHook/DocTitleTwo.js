import React, { useEffect, useState } from 'react'
import useDocumentTitle from './useDocumentTitle'

function DocTitleTwo() {
    const [count, setCount] = useState(0)

    useDocumentTitle(count)

    return (
        <div>
            Doc Title Two :
            <button onClick={() => setCount(count + 1)}>Count : {count}</button>
        </div>
    )
}

export default DocTitleTwo
