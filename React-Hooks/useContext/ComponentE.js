import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, CourseContext } from './MainComponent'

function ComponentE() {

    const user = useContext(UserContext)
    const course = useContext(CourseContext)

    return (
        <div>
            {user} - {course}

            {/* <ComponentF /> */}
        </div>
    )
}

export default ComponentE
