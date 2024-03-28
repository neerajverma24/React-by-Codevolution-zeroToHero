import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            comments: '',
            topic: ''
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);

        console.log(`${this.state.username} ${this.state.comments} ${this.state.topic}`)

        event.preventDefault();   /// to prevent the previous data

    }

    render() {
        // const { username, comments, topic } = this.state        
        //this is called cleanup method, by doing this we can remove this.state form value={this.state.username} and simply we can just write value={username};

        return (
            <div>
                <h1>Form Handling</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username : </label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input> <br /><br />

                    <label>Comments : </label>
                    <textarea value={this.state.comments} onChange={this.handleCommentChange}></textarea> <br /><br />

                    <label>Topics : </label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='Choose topic'>Choose topic</option>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                    </select>
                </form>

                {/* <button type='submit' onClick={this.handleSubmit}>Submit</button> */}
                <button type='submit' onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default Form;