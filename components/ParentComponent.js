import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parentName: "Parent Component"
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName) {
        // alert(`Hello ${this.state.parentName}`)

        alert(`Hello ${this.state.parentName} from ${childName} Component`)
    }

    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
