import React, { Component } from 'react'

class UserGreet3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true   // check with true also...
        }
    }

    render() {
        return this.state.isLoggedIn ?
        (
            <div>Hello Neeraj, Welcome to the page...</div>
        ) 
        : 
        (
            <div>You please Logged In...</div>
        )

    }
}

export default UserGreet3
