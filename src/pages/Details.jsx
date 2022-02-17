import moment from 'moment'
import { useParams } from 'react-router-dom'
import { Card } from '../components'
import './styles/details.css'

const Details = () => {
    const { id } = useParams()

    const post = {
        createdAt: '',
        title: 'Test',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quae, aut, enim atque, eaque ipsum nihil magnam doloribus distinctio saepe aspernatur. Atque id inventore obcaecati, quod, distinctio nesciunt reiciendis veritatis aliquam sapiente quisquam ipsam dignissimos. Numquam laborum a quam alias placeat molestias consectetur laudantium nobis nihil eaque ut fugit ipsum obcaecati quia, quis, itaque vel distinctio. Architecto, veniam fugit aliquam vel, nobis ut eaque perferendis ducimus quaerat vero incidunt. Ab, laboriosam saepe libero natus aspernatur qui esse pariatur officia ipsum quis reiciendis perspiciatis, porro sit aliquam magnam. Iure est necessitatibus quod cupiditate totam hic illum velit deleniti magnam, ratione id soluta doloremque asperiores laboriosam, at error placeat natus, aliquid dicta tempora repellendus? Iusto eius architecto doloremque quibusdam suscipit? Accusamus quas quis aperiam adipisci magnam, facilis unde reprehenderit sapiente minima ipsa labore. Eligendi laborum deserunt optio, voluptatibus repellat minima deleniti. Quam animi optio ipsa magni illum ut dicta. Quae dolorum aut aperiam voluptates dolor facilis sapiente itaque dicta repellendus, et earum. Odit, ratione aspernatur maiores reiciendis repudiandae, qui aliquid necessitatibus vitae veritatis recusandae vero odio nemo corporis sapiente molestias numquam asperiores saepe rem dicta possimus eius. Vero at animi quod ex architecto repellat beatae earum ratione repellendus non, debitis assumenda alias deleniti quo molestias placeat deserunt! Provident dolorem ut voluptates sit velit eum aliquid ratione harum eius libero, voluptas quas officiis dicta reiciendis, minus fugiat. Vero in consectetur, magni assumenda ipsam voluptas nulla distinctio laudantium accusantium exercitationem facilis neque aliquid fuga ipsum aut molestiae? Quas molestias, rem voluptatibus, eius natus cupiditate praesentium eveniet fugiat excepturi ex voluptatem eum tenetur quasi assumenda delectus similique? Neque distinctio quo magnam cupiditate dolorum laborum recusandae quaerat officia vel voluptatum consequatur itaque optio tempore odio ullam nemo dignissimos debitis dolorem, soluta molestiae obcaecati culpa tenetur! Vel deleniti accusamus cumque quae quibusdam ducimus odio mollitia magni quam.',
        tags: [
            {
                id: 1,
                tag: 'test1',
            },
            {
                id: 2,
                tag: 'test2',
            },
            {
                id: 3,
                tag: 'test3',
            },
        ],
    }

    const { createdAt, title, tags, content } = post

    return (
        <div className="details-container">
            <Card>
                <div className="date-container">
                    <p className="date">
                        {moment(createdAt).format('DD-MM-YYYY')}
                    </p>
                </div>
                <h3>{title}</h3>
                <p>{content}</p>
                <div style={{ display: 'flex' }}>
                    {tags.map((tag) => (
                        <span className="tag" key={tag.id}>
                            {tag.tag}
                        </span>
                    ))}
                </div>
            </Card>
        </div>
    )
}

export default Details
