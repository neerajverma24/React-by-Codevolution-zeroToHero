import React, { useEffect, useState } from 'react'
import useDocumentTitle from './useDocumentTitle'

function DocTitleOne() {
    const [count, setCount] = useState(0)

    useDocumentTitle(count)

    return (
        <div>
            Doc Title One :
            <button onClick={() => setCount(count + 1)}>Count : {count}</button>
        </div>
    )
}

export default DocTitleOne
