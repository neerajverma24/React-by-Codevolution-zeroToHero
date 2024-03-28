import React, { Component } from 'react'
import UpdatingLifeCycleB from './UpdatingLifeCycleB';

class UpdatingLifeCycleA extends Component {
    constructor(props) {

        super(props);

        this.state = {
            name: "Neeraj"
        }
    }


    static getDerivedStateFromProps(props, state) {
        console.log("UpdatingLifeCycleA  getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("UpdatingLifeCycleA componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("UpdatingLifeCycleA shouldComponentUpdate ")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("UpdatingLifeCycleA getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("UpdatingLifeCycleA componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: "Neeraj Verma"
        })
    }

    render() {
        console.log("UpdatingLifeCycleA render")
        return (
            <div>
                <h1>UpdatingA Method...</h1>
                <button onClick={this.changeState}>Change State</button>
                <UpdatingLifeCycleB />

                <p>Check console to see, which is rendered first...</p>
                <p><b>Note : </b> componentDidMountA will be executed at last when the whole process will completed...</p>
            </div>
        )
    }
}

export default UpdatingLifeCycleA
