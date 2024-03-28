import React from 'react'
import { UserContext, CourseContext } from '../useContext/MainComponent'

function ComponentF() {
    return (
        <div>
            <h1>The below value is from ComponentF, getting it as a Consumer </h1>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <CourseContext>
                                {
                                    course => {
                                        return <h3>user context {user}, course context {course}</h3>
                                    }
                                }
                            </CourseContext>
                        )
                        // return <div>User context value {user}</div>
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
