import React, { Component } from 'react'
import ComponentF from './ComponentF'
import { UserConsumer } from './userContext';
import UserContext from './userContext';

class ComponentE extends Component {

    static contextType = UserContext

    render() {
        return (
            <div>
                <h2>Component E context :  {this.context}</h2>
                <ComponentF />
            </div>
        )
    }
}

export default ComponentE
