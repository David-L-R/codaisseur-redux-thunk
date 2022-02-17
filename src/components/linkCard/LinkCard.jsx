import { Link } from 'react-router-dom'
import './linkCard.css'

const LinkCard = ({ children, to }) => {
    return (
        <Link to={to} className="card">
            {children}
        </Link>
    )
}

export default LinkCard
