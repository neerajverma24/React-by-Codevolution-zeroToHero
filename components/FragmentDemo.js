import React from 'react';

function FragmentDemo() {
    return (
        /*
        <div>
            <h1>Fragment Demo</h1>
            <p>This decribe the Fragment Demo</p>


            <p><b>Note : </b>When  we inspect anything in the above h1 or p tag, we can see the div in both the tags in Elements (not in console)</p>
        </div>
        */

        <React.Fragment>
            <h1>Fragment Demo</h1>
            <p>This decribe the Fragment Demo</p>

            <p><b>Note : </b> You can see the differece by uncommentig the above, and inspect it..</p>
        </React.Fragment>
    )
}

export default FragmentDemo;