import { LinkCard } from '../../..'
import './post.css'
import moment from 'moment'

const Post = ({ post }) => {
    const { title, tags, createdAt } = post
    return (
        <LinkCard to={`/post/${post.id}`}>
            <div className="date-container">
                <p className="date">{moment(createdAt).format('DD-MM-YYYY')}</p>
            </div>
            <h3>{title}</h3>
            <div style={{ display: 'flex' }}>
                {tags.map((tag) => (
                    <span className="tag" key={tag.id}>
                        {tag.tag}
                    </span>
                ))}
            </div>
        </LinkCard>
    )
}

export default Post
