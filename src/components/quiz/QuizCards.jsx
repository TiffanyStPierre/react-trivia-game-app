import { useContext } from 'react';
import Spinner from '../layout/Spinner';
import QuizContext from '../../context/QuizContext';

export default function QuizCards() {
    const { items, loading } = useContext(QuizContext);

    const createAnswerArray = (item) => {
        const answerArray = item.incorrect_answers;


        answerArray.push(item.correct_answer);
        answerArray.sort();
        console.log(answerArray);
    }

    if (!loading) {
        return (
            <div className="card-section">
                {items?.results?.map((item) => {

                    createAnswerArray(item);

                        (<div div className = "card" >
                            <p className="question">{`Question: ${item.question}`}</p>
                            <p className="answers">Answers:</p>
                            <ul className="answer-list">

                            </ul>
                        </div>)
    })
}
            </div >
        )
    } else {
    return <Spinner />
}
}