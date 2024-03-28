import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching3() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)  // using back ticks
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <h1>Fetching the data with clicking on the button</h1>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button type='button' onClick={handleClick}>Fetch Post</button>

            <h3>Post title : </h3>
            <p>{post.title}</p>


        </div>
    )
}

export default DataFetching3
