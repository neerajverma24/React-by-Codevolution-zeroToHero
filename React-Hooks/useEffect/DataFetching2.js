import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching2() {
    const [post, setPost] = useState({})  // here we are using empty object instead of an empty array...    
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)  // using back ticks
            .then(res => {
                console.log(res)
                setPost(res.data)       // check console, when we clear the input , it will return all the 100 posts as an  array...
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])                            // here, dependency on the id, so the it will return the data of that particular id...

    return (
        <div>
            <h1>Fetching the data with changing the input field number...</h1>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />

            <h3>Post title : </h3>
            <p>{post.title}</p>


        </div>
    )
}

export default DataFetching2
