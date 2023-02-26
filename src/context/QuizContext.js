import {createContext, useState} from 'react';

const QuizContext = createContext();

const baseURL = 'https://opentdb.com/api.php?amount=4';

export const QuizProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const getTrivia = async () => {
        setLoading(true);
        const response = await fetch(`${baseURL}`);

        const data = await response.json();

        setItems(data);
        setLoading(false);
    }

    return <QuizContext.Provider value={{
        items,
        loading,
        getTrivia
    }}>
        {children}
    </QuizContext.Provider>
}

export default QuizContext;