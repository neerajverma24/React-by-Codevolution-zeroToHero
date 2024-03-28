import React, { Component } from 'react'

class HoverCounter extends Component {
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
                <h1>Hover Counter : </h1>
                <h5 onMouseOver={this.incrementClick}>Hovered {count} times</h5>
            </div>
        )
    }
}

export default HoverCounter
