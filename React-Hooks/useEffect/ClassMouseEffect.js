import React, { Component } from 'react'

class ClassMouseEffect extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }

    mousePositon = e => {
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.mousePositon)
    }

    render() {
        const { x, y } = this.state
        return (
            <div>
                <h1>Mouse Co-ordinates</h1>
                <h2>Position X - {x}</h2>
                <h2>Positon Y - {y}</h2>
            </div>
        )
    }
}

export default ClassMouseEffect
