import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Quiz from './pages/Quiz';
import NotFound from './pages/NotFound';
import {QuizProvider} from './context/QuizContext';

function App() {
  return (
    <QuizProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </QuizProvider>
  );
}

export default App;