import React, { Component } from 'react';
import { UserConsumer } from './userContext';

class ComponentF extends Component {
    render() {
        return (
            <div>
                <h2>Using Context API, exporting username from App.js directly to this file : ComponentF</h2>
                <UserConsumer>
                    {username => {
                        return <div>Hello {username}</div>
                    }}
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentF
