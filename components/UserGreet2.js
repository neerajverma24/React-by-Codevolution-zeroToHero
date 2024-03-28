import React, { Component } from 'react'

class UserGreet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false   // check with true also...
        }
    }
    render() {
        let message;
        if (this.state.isLoggedIn) {
            message = <div>Hello Neeraj , You are logged In</div>
        } else {
            message = <div>Please Log In</div>
        }

        return (
            <div>{message}</div>
        )
    }


}

export default UserGreet
