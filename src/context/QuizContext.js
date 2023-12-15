import { createContext, useState } from "react";

const QuizContext = createContext();

const baseURL = "https://opentdb.com/api.php?amount=4";

export const QuizProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const getTrivia = async (selection) => {
    try {
      setLoading(true);

      const params = new URLSearchParams({
        category: selection,
      });

      const response = await fetch(`${baseURL}&${params}&type=multiple`);

      const data = await response.json();

      setItems(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching trivia:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const updateScore = (newScore) => {
    setScore(newScore);
  };

  const updateTotalQuestions = (newTotalQuestions) => {
    setTotalQuestions(newTotalQuestions);
  };

  return (
    <QuizContext.Provider
      value={{
        items,
        loading,
        score,
        updateScore,
        updateTotalQuestions,
        totalQuestions,
        getTrivia,
        setItems
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
