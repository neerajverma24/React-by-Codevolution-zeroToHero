import React from 'react'

function Person({ person }) {
    return (
        <div>
            <li>
                I am {person.name}. I am {person.age}. I am {person.course} developer.
            </li>
        </div>
    )
}

export default Person
