import React from 'react';
import './appStyle.css';
import styles from './appStyle.module.css'

function InlineStyle() {

    const heading = {
        color: 'blue',
        fontSize: '70px'
    }

    return (
        <div>
            <h2 style={heading}>Inline Sheet</h2>
            <h1 style={{ color: 'grey' }}>This is inline style css</h1>

            <div style={{ border: '3px solid black', width: 'fit-content', margin: 'auto', padding: '5px auto' }}><br /><br />
                Creating two files to approach module.css in two different types...

                <h1 className={styles.success}>Success</h1>
                <p>Success is imported from <b>appStyle.module.css</b></p>
                <p>Success has different syntax to use css , check carefully.</p>

                <h1 className='error'>Error</h1>
                <p>Error is imported from   <b>appStyle.css</b></p>
            </div>
        </div>
    )
}

export default InlineStyle
