import React, { Component } from 'react';
import WithMainCounter from './WithMainCounter'

export class WithHoverCounter extends Component {

    render() {
        const { name, count, incrementCounter } = this.props
        return (
            <div>
                <h1>Hover : {count} </h1>
                <h2 onMouseOver={incrementCounter}>
                    {name} Hovered {count} times
                </h2>
            </div>
        )
    }
}

export default WithMainCounter(WithHoverCounter)
