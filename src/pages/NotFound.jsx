import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import {Link} from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="not-found-pg">
            <Header />
            <div className="not-found-body">
                <p className="not-found-msg">Oops, this page does not exist!</p>
                <Link to="/" className="btn-back-to-home">Back to Home Page</Link>
            </div>
            <Footer />
        </div>
    )
}