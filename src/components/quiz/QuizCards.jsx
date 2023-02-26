import { useContext } from 'react';
import Spinner from '../layout/Spinner';
import QuizContext from '../../context/QuizContext';
import QuizItem from '../quiz/QuizItem';

export default function QuizCards() {
    const { items, loading } = useContext(QuizContext);

    if (!loading) {
        return (
            <div className="card-section">
                {items.map((item) => (
                    <QuizItem key={items.indexOf(item)} item={item} />
                ))}
            </div>
        )
    } else {
        return <Spinner />
    }
}