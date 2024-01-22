import { useContext, useState } from 'react';
import Spinner from '../layout/Spinner';
import QuizContext from '../../context/QuizContext';

export default function QuizCards() {
    const { items, loading, updateScore, updateTotalQuestions } = useContext(QuizContext);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    function handleAnswerClick(question, answer, correctAnswer) {
      if(!selectedAnswers[question]) {
      if (answer === correctAnswer) {
        updateScore((prevScore) => prevScore + 1);
      }
      updateTotalQuestions((prevTotalQuestions) => prevTotalQuestions + 1);
      setSelectedAnswers((prevAnswers) => ({ ...prevAnswers, [question]: answer }));
    }
    }

    function checkAnswer(answer, correctAnswer) {
      let resultMessage = '';

      if (answer === correctAnswer){
        resultMessage = `Well Done! You've selected the correct answer: ${correctAnswer}`;
      } else {
        resultMessage = `Good guess, but ${answer} is not correct. The correct answer is ${correctAnswer}`;
      }
      return resultMessage;
    }

    function renderSelectedAnswer(checkAnswer, question, correctAnswer) {
        const answer = selectedAnswers[question];
        if (answer) {
            const resultMessage = checkAnswer(answer, correctAnswer);
            return <p className="answer-pair">{resultMessage}</p>;
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
                            <div className="card" key={item.question}>
                                <p className="question" dangerouslySetInnerHTML={{ __html: question }} />
                                <ul className="answer-list">
                                    {answerArray.map((answer) => {

                                        return (
                                            <li
                                                key={answer}
                                                className={`${selectedAnswers[question] === answer ? 'selected-answer' : 'answer-item'}`}
                                                onClick={() => handleAnswerClick(question, answer, correctAnswer)}
                                                dangerouslySetInnerHTML={{ __html: answer }} />
                                        )
                                    })}
                                </ul>
                                {renderSelectedAnswer(checkAnswer, question, correctAnswer)}
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