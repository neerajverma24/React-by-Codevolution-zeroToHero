import React from 'react'

function WithoutJSX() {
    // return React.createElement('div', null, '<h1>Hello Without JSX</h1>')

    // return React.createElement('div', null, 'h1', 'Hello Without JSX')

    // this is the output we are looking for our browser with a h1 tag..
    return React.createElement(
        'div',
        // null, 
        { id: 'hello', className: 'dummyClass' },  // replacing null with this, and check h1 tag inspecting its id and class , we get these two..   & IMPORTANTLY use CLASSNAME instead only class keyword..
        React.createElement('h1', 'null', 'Hello Without JSX')
    )
}
export default WithoutJSX; 
