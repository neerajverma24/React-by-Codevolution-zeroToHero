import React, { Component } from 'react'
import ComponentE from './ComponentE'
import { UserConsumer } from './userContext';

class ComponentC extends Component {
    render() {
        return (
            <div>
                <ComponentE />
            </div>
        )
    }
}

export default ComponentC
