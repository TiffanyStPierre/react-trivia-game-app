import {createContext, useState} from 'react';

const QuizContext = createContext();

const baseURL = 'https://opentdb.com/api.php?amount=4';

export const QuizProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const getTrivia = async (selection) => {
        setLoading(true);

        const params = new URLSearchParams({
            category: selection,
        })

        const response = await fetch(`${baseURL}&${params}&type=multiple`);

        

        const data = await response.json();

        console.log(data);
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