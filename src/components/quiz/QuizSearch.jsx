import { Link } from 'react-router-dom';

export default function QuizSearch() {
    return (
        <>
            <form>
                <label>Choose a trivia category</label>
                <select>
                    <option value="all">All Categories</option>
                    <option value="27">Animals</option>
                    <option value="26">Celebrities</option>
                    <option value="11">Film</option>
                    <option value="9">General Knowledge</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="12">Music</option>
                    <option value="20">Mythology</option>
                    <option value="17">Science & Nature</option>
                    <option value="21">Sports</option>
                    <option value="14">Television</option>
                    <option value="28">Vehicles</option>
                </select>
                <button>Get Questions</button>
            </form>
            <Link to="/">Reset Game</Link>
        </>
    )
}