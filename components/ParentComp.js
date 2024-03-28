import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

class ParentComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Neeraj"
        }
    }

    componentDidMount() {       // check console also...
        setInterval(() => {
            this.setState({
                name: "Neeraj"
            })
        })
    }

    render() {
        console.log("*****************Parent Component *********************")
        return (
            <div>
                <h1>Parent Component</h1>
                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp