import { useContext } from 'react';
import Spinner from '../layout/Spinner';
import QuizContext from '../../context/QuizContext';

export default function QuizCards() {
    const { items, loading } = useContext(QuizContext);



    if (!loading) {
        return (
            <div className="card-section">
                {items?.results?.map((item) => {

                    const answerArray = item.incorrect_answers;
                    answerArray.push(item.correct_answer);
                    answerArray.sort();

                    return (<div div className="card" >
                        <p className="question">{item.question}</p>
                        <ul className="answer-list">
                            {answerArray.map((answer) => (
                                <li className="answer-item" key={answer}>{answer}</li>
                            ))}
                        </ul>
                    </div>
                    );
                })
                }
            </div >
        )
    } else {
        return <Spinner />
    }
}