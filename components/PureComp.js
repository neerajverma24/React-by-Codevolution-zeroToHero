import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log("Pure Component render")
        return (
            <div>
                <h2>Pure Component {this.props.name}</h2>
            </div>
        )
    }
}

export default PureComp