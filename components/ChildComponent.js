import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* make sure do not add parenthesis to the greetHandler otherwise it will execute the code , before the click.. */}
            {/* <button onClick={props.greetHandler('Child')}>Greet Parent</button> */}

            {/* to get 'Child' parameter in greetParent('childName') in parentComponent use arrow function syntax to make it work.... */}
            <button onClick={() => props.greetHandler('Child')}>Greet Parent (childName parameter)</button>

        </div>
    )
}

export default ChildComponent