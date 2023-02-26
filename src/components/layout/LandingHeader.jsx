import {Link} from 'react-router-dom';

export default function LandingHeader() {
    return (
        <div className="landing-header">
            <h1 className="landing-h1">The Mind Bender</h1>
            <p className="landing-subtitle">Test your trivia knowledge with this fun trivia game!</p>
            <Link to='/quiz' className="start-game">Start Game</Link>
        </div>
    )
}

