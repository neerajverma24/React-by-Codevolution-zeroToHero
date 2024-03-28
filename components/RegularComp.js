import React, { Component } from 'react'

class RegularComp extends Component {
    render() {
        console.log("Regular Component render")
        return (
            <div>
                <h2>Regular Component {this.props.name}</h2>
            </div>
        )
    }
}


export default RegularComp