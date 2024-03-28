import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`        // it will not run without componentDidUpdate
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Updating document title')      // conditonally run effects
        }
        document.title = `Clicked ${this.state.count} times`
    }


    render() {
        const { count } = this.state
        return (
            <div>
                <h1>Class Component before useEffect</h1>
                <p>This file clarify, why do we need useEffect Hook</p>

                <div>

                    {/* Conditonally run effect in componentDidUpdate */}
                    <input type='text'
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}></input><br />

                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click {count} times</button>
                </div>
            </div>
        )
    }
}

export default ClassCounter
