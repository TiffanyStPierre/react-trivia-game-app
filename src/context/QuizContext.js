import {createContext, useState} from 'react';

const QuizContext = createContext();

const baseURL = 'https://opentdb.com/api.php?amount=4';

export const QuizProvider = ({children}) => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    const getTrivia = async () => {
        const response = await fetch(`${baseURL}`);

        const data = await response.json();

        setQuestions(data);
        setLoading(false);
    }

    return <QuizContext.Provider value={{
        questions,
        loading,
        getTrivia
    }}>
        {children}
    </QuizContext.Provider>
}

export default QuizContext;