import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementClick = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h1>Click Counter : </h1>
                <button onClick={this.incrementClick}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCounter
