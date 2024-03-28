import React, { useState } from 'react'

function CounterStateHookThree() {
    const [name, setName] = useState({ firstName: '', lastName: '' })

    return (
        <div>
            <h1>Topic :   useState with Object</h1>
            <form>
                <input type='text' placeholder='FirstName'
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })}>
                </input>
                <h2>Your firstName is :  {name.firstName}</h2>

                {/* if we dont use ...name here, it will erase the data.. check the difference without ...name also */}

                <input type='text' placeholder='LastName'
                    value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })}>
                </input>
                <h2>Your lastName is : {name.lastName}</h2>

                <h3>{JSON.stringify(name)}</h3>
            </form>
        </div>
    )
}

export default CounterStateHookThree
