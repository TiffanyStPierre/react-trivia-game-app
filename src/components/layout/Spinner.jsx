import spinner from './assets/spinner.gif';

export default function Spinner() {
    return (
        <div className="spinner">
            <img width={180}
                className="spinner-img"
                src={spinner}
                alt="Loading..." />
        </div>
    )
}