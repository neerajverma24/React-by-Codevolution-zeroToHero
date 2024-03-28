import React, { Component } from 'react'

class UserGreet4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true  // check with false
        }
    }

    // Explanation : In this case, if we make isLoggedIn : false , it will display nothing....

    // and if "this.state.isLoggedIn" this condition is true it will show the right side value..
    render() {
        return this.state.isLoggedIn && <div>Hello Neeraj, Welcome !</div>
    }
}

export default UserGreet4
