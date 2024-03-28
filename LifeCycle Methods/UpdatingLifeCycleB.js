import React, { Component } from 'react'


class UpdatingLifeCycleB extends Component {
    constructor(props) {

        super(props);

        this.state = {
            name: "Neeraj"
        }
    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log("UpdatingLifeCycleB shouldComponentUpdate ")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("UpdatingLifeCycleB getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("UpdatingLifeCycleB componentDidUpdate")
    }

    render() {
        console.log("UpdatingLifeCycleB render")
        return (
            <div>
                <h1>UpdatingB Method...</h1>
            </div>
        )
    }
}

export default UpdatingLifeCycleB
