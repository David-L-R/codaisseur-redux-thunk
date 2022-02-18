import moment from 'moment'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Card, Loader } from '../components'
import { getCommentById, getPostById } from '../store/post/actions'
import {
    selectComments,
    selectLoading,
    selectPost,
} from '../store/post/selectors'
import './styles/details.css'

const Details = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const post = useSelector(selectPost)
    const comments = useSelector(selectComments)
    const loading = useSelector(selectLoading)

    const { createdAt, title, tags, content, developer, post_likes } =
        post || {}

    const { name } = developer || {}

    useEffect(() => {
        dispatch(getPostById(id))
        dispatch(getCommentById(id))
    }, [dispatch, id])

    useEffect(() => {
        if (post && comments.length > 0) {
            console.log(post)
            console.log(comments)
        }
    }, [post, comments])

    const getTechTags = () => {
        console.log(post?.developer?.technologies)

        const tags = post?.developer?.technologies.map((tech) => tech.title)

        const tagsToString = tags.join(' | ')

        return tagsToString
    }

    return (
        <div className="details-container">
            <Link to={'/'} className="back-button">
                &#60; Back
            </Link>
            {title && content && (
                <Card>
                    <div className="date-container">
                        <p className="date">
                            {moment(createdAt).format('DD-MM-YYYY')}
                        </p>
                    </div>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <span className="author">
                        Written by: {name}{' '}
                        <span style={{ fontSize: '70%', color: 'teal' }}>
                            {getTechTags()}
                        </span>
                    </span>
                    <span className="like-button">👍 {post_likes.length}</span>
                    <div style={{ display: 'flex' }}>
                        {tags.map((tag) => (
                            <span className="tag" key={tag.id}>
                                {tag.tag}
                            </span>
                        ))}
                    </div>
                    {comments.length !== 0 ? (
                        <div>
                            {comments.map((comment) => (
                                <div className="comment" key={comment.id}>
                                    <h4 className="comment-title">
                                        {comment.developer.name}
                                    </h4>
                                    <p className="comment-text">
                                        {comment.text}
                                    </p>
                                    <span className="comment-date">
                                        {moment(createdAt).format('DD-MM-YYYY')}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        loading && <Loader />
                    )}
                </Card>
            )}
            {!post && loading && <Loader />}
        </div>
    )
}

export default Details
