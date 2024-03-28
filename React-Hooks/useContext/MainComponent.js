import React from 'react'
import ComponentC from './ComponentC';

export const UserContext = React.createContext();
export const CourseContext = React.createContext();

function MainComponent() {
    return (
        <div>
            <h1>Heading : useContext  (MainComponent)</h1>
            <UserContext.Provider value={'Neeraj'}>
                <CourseContext.Provider value={'React JS'}>
                    <ComponentC />
                </CourseContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default MainComponent
