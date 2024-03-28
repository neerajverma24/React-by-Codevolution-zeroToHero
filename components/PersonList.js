import React from 'react';
import Person from './Person';

function PersonList() {
    const persons = [
        {
            id: 1,
            name: "Neeraj",
            age: 24,
            course: "MERN Full Stack"
        },
        {
            id: 2,
            name: "Rahul",
            age: 23,
            course: "Python"
        },
        {
            id: 3,
            name: "Harkesh",
            age: 25,
            course: "Java"
        }
    ]

    // const personsList = persons.map(person => <h2> I am {person.name}. I am {person.age}. I am {person.course} developer.</h2>)

    // Now we are making another file Person.js , then getting the data same as line 25 as an PROPS
    const personsList = persons.map(person => <Person person={person} />)

    return (
        <div>
            {/* {persons.map(person => <h2>{person.name}</h2>)}             // way 1*/}

            {/* the below we can just use single line to render the data, this {personList} remains the same... */}
            {personsList}
        </div>
    )
}

export default PersonList
