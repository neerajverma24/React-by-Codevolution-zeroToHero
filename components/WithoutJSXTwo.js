import React from "react";

function WithoutJSXTwo() {
    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Hello World without JSX')
    )
}

export default WithoutJSXTwo;