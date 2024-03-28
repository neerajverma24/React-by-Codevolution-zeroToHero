import React from 'react';
import './myStyles.css'

function StyleSheet(props) {
    let propName = props.secondary ? 'secondary' : ''
    return (
        <div>
            <h1 className='primary'>Style Sheet</h1>

            {/*  And we can also Conditionally apply a class based on props or stateof the component.... For example we passed down a prop called secondary and set it default False */}
            <h2 className={propName}>Secondary Style Sheet</h2>

            {/* if we add Multiple Class, we are simply use Template literals */}
            <p className='para font-xl'>This is a multiple classes para</p>
        </div >
    )
}

export default StyleSheet
