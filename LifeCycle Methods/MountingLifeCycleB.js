import React, { Component } from 'react'

class MountingLifeCycleB extends Component {
    constructor(props) {
        console.log("LifeCycleB constructor")
        super(props);

        this.state = {
            name: "Neeraj"
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleB  getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("LifeCycleB componentDidMount")
    }

    render() {
        console.log("LifeCycleB render")
        return (
            <div>
                <h1>LifeCycleB Method - Mounting</h1>

            </div>
        )
    }
}

export default MountingLifeCycleB
