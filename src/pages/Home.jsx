import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import { v4 as uuid } from 'uuid'
import { Card, Loader } from '../components'
import './styles/home.css'
import Post from '../components/pages/home/postCard/Post'

const API_URL = `https://codaisseur-coders-network.herokuapp.com/posts`

export default function PostsFeed() {
    const [data, setData] = useState({
        loading: true,
        posts: [],
    })
    const [offset, setOffset] = useState(0)
    const LIMIT = 5

    async function fetchNext5Posts() {
        setData({ ...data, loading: true })

        try {
            const result = await axios.get(API_URL, {
                params: {
                    limit: LIMIT,
                    offset: offset,
                },
            })

            setOffset(offset + LIMIT)

            const morePosts = [...result.data.rows]

            setData({
                loading: false,
                posts: [...data.posts, ...morePosts],
            })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchNext5Posts()
    }, [])

    return (
        <div className="PostsFeed">
            <h2>Recent posts</h2>
            <button onClick={fetchNext5Posts}>Fetch next posts</button>
            {data.posts.map((post) => {
                return <Post key={post.id} post={post} />
            })}
            {data.loading && <Loader />}
        </div>
    )
}
