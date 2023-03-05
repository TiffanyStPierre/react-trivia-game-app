import { Link } from 'react-router-dom';
import {useState, useContext} from 'react';
import QuizContext from '../../context/QuizContext';


export default function QuizSearch() {
    const [selection, setSelection] = useState('27');
    const {getTrivia, items} = useContext(QuizContext);

    const handleChange = (e) => setSelection(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        getTrivia(selection);
    }

    return (
        <>
            <form onSubmit={handleSubmit} value={selection}>
                <label>Choose a trivia category</label>
                <select onChange={handleChange}>
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
                <button type="submit" className="btn-submit">Get Questions</button>
            </form>
            <Link to="/">Reset Game</Link>
        </>
    )
}