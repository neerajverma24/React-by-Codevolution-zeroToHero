import React, { Component } from 'react'

class StateInClassComp extends Component {
    constructor() {
        super();
        this.state = {
            message: "Please click button to Subscribe"
        }
    }

    changeMessage() {
        this.setState({
            message: "You are Subscribed.."
        })
    }

    render() {
        return (
            <div>
                <h2>State In Class Component</h2>
                <h4>{this.state.message}</h4>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default StateInClassComp