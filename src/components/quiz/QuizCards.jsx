import { useContext, useState } from 'react';
import Spinner from '../layout/Spinner';
import QuizContext from '../../context/QuizContext';

export default function QuizCards() {
    const { items, loading } = useContext(QuizContext);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    function handleAnswerClick(question, answer) {
        setSelectedAnswers((prevAnswers) => ({ ...prevAnswers, [question]: answer }));
    }

    function renderSelectedAnswer(question, correctAnswer) {
        const answer = selectedAnswers[question];
        if (answer) {
            return <p className="answer-pair">{`Your answer is: ${answer}`}<br/>{`The correct answer is: ${correctAnswer}`}</p>;
        } else {
            return null;
        }
    }

    function decodeHTMLEntities(text) {
        const doc = new DOMParser().parseFromString(text, 'text/html');
        return doc.documentElement.textContent;
    }

    if (!loading) {
        return (
            <div className="trivia-page">
                <div className="card-section">
                    {items?.results?.map((item) => {
                        const question = decodeHTMLEntities(item.question);
                        const incorrectAnswers = item.incorrect_answers.map((answer) => decodeHTMLEntities(answer));
                        const correctAnswer = decodeHTMLEntities(item.correct_answer);

                        const answerArray = [...incorrectAnswers, correctAnswer];
                        answerArray.sort();

                        return (
                            <div div className="card" key={item.question}>
                                <p className="question" dangerouslySetInnerHTML={{ __html: question }} />
                                <ul className="answer-list">
                                    {answerArray.map((answer) => {

                                        return (
                                            <li
                                                key={answer}
                                                className="answer-item"
                                                onClick={() => handleAnswerClick(question, answer)}
                                                dangerouslySetInnerHTML={{ __html: answer }} />
                                        )
                                    })}
                                </ul>
                                {renderSelectedAnswer(question, correctAnswer)}
                            </div>
                        );
                    })}
                </div>
            </div >

        )
    } else {
        return <Spinner />
    }
}