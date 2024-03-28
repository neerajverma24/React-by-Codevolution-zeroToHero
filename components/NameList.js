import React from 'react'

function NameList() {
    const names = ["Neeraj", "Pari", "Golu", "Titu"]

    // way 2 : 
    const nameList = names.map(name => <li>{name}</li>)

    return (
        // way 1 : 
        //  <div>{names.map(name => <h2>{name}</h2>)}</div>     

        // way 2 : 
        <div>{nameList}</div>
    )
}

export default NameList
