import { useContext } from 'react';
import Spinner from '../layout/Spinner';
import QuizContext from '../../context/QuizContext';
import QuizItem from '../quiz/QuizItem';

export default function QuizCards() {
    const { items, loading } = useContext(QuizContext);

    if (!loading) {
        return (
            <div className="card-section">
                {items?.results?.map((item, index) => (
                    <QuizItem key={index} item={item} />
                ))}
            </div>
        )
    } else {
        return <Spinner />
    }
}