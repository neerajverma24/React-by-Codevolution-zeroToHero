import React, { forwardRef } from 'react'

// function ForwardRefChildInput() {
//     return (
//         <div>

//         </div>
//     )
// }

const ForwardRefChildInput = React.forwardRef((props, ref) => {
    return (
        <>
            <input type='text' ref={ref} />
        </>
    )
}
)


export default ForwardRefChildInput