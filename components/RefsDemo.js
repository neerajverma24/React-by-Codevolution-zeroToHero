import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor() {
        super();
        this.inputRef = React.createRef()       // this is for method 1

        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }

    // componentDidMount , this has two methods...
    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }

        // this.inputRef.current.focus();           // this is for method 1
        // console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }
    render() {
        return (
            <div>
                {/* Method 1 : Focus in the input field */}
                <label>Input type 1 : </label>
                <input type='text' ref={this.inputRef} />

                {/* Method 2 : fetching data */}
                <button onClick={this.clickHandler}>Click me</button> <br /><br />

                {/* Method 3  : callBack ref */}
                <label>Input type : 2 </label>
                <input type='text' ref={this.setCbRef} />
            </div>
        )
    }
}

export default RefsDemo