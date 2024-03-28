import React from 'react';

function FunctionProps(props) {
    console.log(props)   // check console also...
    
    return (
        <>
            <h3>{props.name} {props.surname}</h3>
            {props.children}
        </>
    )
}

export default FunctionProps;