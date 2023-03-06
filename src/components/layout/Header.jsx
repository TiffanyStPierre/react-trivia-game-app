import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="header-link">
                <h1 className="header-h1">The Mind Bender</h1>
            </Link>
            <p className="header-subtitle">Test your trivia knowledge with this fun trivia game!</p>
        </header>
    )
}