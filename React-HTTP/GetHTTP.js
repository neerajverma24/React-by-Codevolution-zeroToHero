import axios from 'axios'
import React, { Component } from 'react'

class GetHTTP extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: []
        }
    }
    componentDidMount() {
        // const axi = axios.get('https://jsonplaceholder.typicode.com/users')
        // console.log(axi) // output : Promise : <pending>

        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response.data)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'Error retreiving data' })  // so write the correct URL of axios
            })
    }
    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                <h1>List of Posts</h1>
                <div>
                    {
                        posts.length ?
                            posts.map(post => <div key={post.id}>{post.name}</div>) :
                            null
                    }
                    {
                        errorMsg ? <div>{errorMsg}</div> : null
                    }

                </div>
            </div>
        )
    }
}

export default GetHTTP
