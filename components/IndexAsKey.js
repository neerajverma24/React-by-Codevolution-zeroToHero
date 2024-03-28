import React from 'react'

function IndexAsKey() {
    const names = ["Titus", "Neeraj", "Rahul", "Sanjay"];

    const nameList = names.map((name, index) =>
        <li key={index}>{index} {name}</li>
    )
    return (
        <div>
            <h1>Hello Key</h1>
            {nameList}
        </div>
    )
}

export default IndexAsKey;
