import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log('Button Clicked..')
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
            {/* This is the correct way to use event handler */}
            {/* Event handler is a function not a function call */}


            {/* <button onClick={clickHandler()}>Click</button> */}
            {/* Common mistakes we do is putting parenthesis to the function which means clickedHandker already worked without clicking on it, and when we click on the button it shows nothing in the console... it will not work... */}

        </div>
    )
}

export default FunctionClick
