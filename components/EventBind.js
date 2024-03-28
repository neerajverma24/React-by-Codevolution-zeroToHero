import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }

        // this.clickHandler = this.clickHandler.bind(this)   // approach 3
    }
    
    /*  // uncomment this to check above 3 approaches.....
    clickHandler() {
        this.setState({
            message: "Good Bye! "
        })
        console.log(this)
    }
    */

    // Approach 4  : using callback function
    clickHandler = () => {
        this.setState({
            message: "Good Bye!"
        })
    }


    render() {
        return (
            <div>
                <div>{this.state.message}</div>

                {/* This is not the correct way to bind event handler */}
                {/* <button onClick={this.clickHandler}>Click</button> */}


                {/* There are four approaches to get over from this error */}
                {/* Approach 1 */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* Approach 2 */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}

                {/* Approach 3 : go to above line no. 12  */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}

                {/* Approach 4 */}
                <button onClick={this.clickHandler}>Click</button>

            </div>
        )
    }
}

export default EventBind;
