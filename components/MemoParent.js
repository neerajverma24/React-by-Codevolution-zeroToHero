import React, { Component } from 'react'
import MemoChild from './MemoChild';


class MemoParent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Neeraj"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Neeraj"
            })
        }, 2000)
    }

    render() {
        console.log("*****************Parent Component *********************")
        return (
            <div>
                <h1>Parent Component</h1>
                <MemoChild name={this.state.name} />
            </div>
        )
    }
}

export default MemoParent