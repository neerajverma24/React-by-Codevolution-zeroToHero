import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
    }


    //way 1 ==============================================
    increment() {
        this.setState({
            count: this.state.count + 1
        })
        console.log("Synchronous Value", this.state.count)  // output started from : 0
    }


    /* way 2 =================================================
    increment() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("Callback Value : ", this.state.count)  // output : 1
        })
        console.log("Synchronous Value", this.state.count)  // output : 0
    }
    // Explanation above :  It this.setState takes two paramters one is object and other is callback function  
    */


    /*
    // way 3 ==================================================================
    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log("Synchronous Value", this.state.count)  // output : 0
    }


    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    */

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h4>Count : {this.state.count}</h4>
                <button onClick={() => this.increment()}>Increment</button>

                {/* this button is used for way 3 */}
                {/* <button onClick={() => this.incrementFive()}>Increment</button> */}


            </div>
        )
    }
}

export default Counter
