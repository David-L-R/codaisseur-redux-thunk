import React, { useEffect } from 'react'
import { Loader } from '../components'
import './styles/home.css'
import Post from '../components/pages/home/postCard/Post'
import { fetchNext5Posts } from '../store/feed/actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectFeed, selectLoading } from '../store/feed/selectors'

export default function PostsFeed() {
    const dispatch = useDispatch()
    const feed = useSelector(selectFeed)
    const loading = useSelector(selectLoading)

    useEffect(() => {
        if (feed.length === 0) {
            dispatch(fetchNext5Posts)
        }
    }, [feed, dispatch])

    return (
        <div className="PostsFeed">
            <h2>Recent posts</h2>
            <button onClick={() => dispatch(fetchNext5Posts)}>
                Fetch next posts
            </button>
            {feed.map((post) => {
                return <Post key={post.id} post={post} />
            })}
            {loading && <Loader />}
        </div>
    )
}
