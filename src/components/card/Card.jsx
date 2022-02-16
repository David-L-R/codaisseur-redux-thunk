import './card.css'

const Card = ({ children, onClick }) => {
    return <button className="card">{children}</button>
}

export default Card
