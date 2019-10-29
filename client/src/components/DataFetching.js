import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataFetching() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res.data);
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res.data);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);

    return (
        <div>
            <input
                type='text'
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <p>{post.title}</p>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
}
