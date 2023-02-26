import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Quiz from './pages/Quiz';
import NotFound from './pages/NotFound';
import Spinner from './components/layout/Spinner';

function App() {
  return (
    <Router>
      <div className="app">
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;