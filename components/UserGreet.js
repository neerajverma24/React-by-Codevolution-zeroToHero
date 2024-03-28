import React, { Component } from 'react'

class UserGreet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true   // check with true also...
        }
    }
    render() {
        if (this.state.isLoggedIn) {
            return <div>Hello Neeraj..</div>
        } else {
            return <div>Hello Guest..</div>
        }


        // return (
        //     <>
        //         <div>Hello Neeraj</div>
        //         <div>Hello Guest</div>
        //     </>
        // )
    }
}

export default UserGreet
