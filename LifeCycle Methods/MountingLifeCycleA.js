import React, { Component } from 'react'
import MountingLifeCycleB from './MountingLifeCycleB';

class MountingLifeCycleA extends Component {
    constructor(props) {
        console.log("LifeCycleA constructor")
        super(props);

        this.state = {
            name: "Neeraj"
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA  getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("LifeCycleA componentDidMount")
    }

    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                <h1>Mounting LifeCycleA Method...</h1>
                <MountingLifeCycleB />

                <p>Check console to see, which is rendered first...</p>
                <p><b>Note : </b> componentDidMountA will be executed at last when the whole process will done...</p>
            </div>
        )
    }
}

export default MountingLifeCycleA
