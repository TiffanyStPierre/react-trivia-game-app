import Header from '../components/layout/Header';
import QuizSearch from '../components/quiz/QuizSearch';
import QuizCards from '../components/quiz/QuizCards';
import Footer from '../components/layout/Footer';

export default function Quiz() {
    return (
        <div className="quiz-pg">
            <Header />
            <QuizSearch />
            <QuizCards />
            <Footer />
        </div >
    )
}