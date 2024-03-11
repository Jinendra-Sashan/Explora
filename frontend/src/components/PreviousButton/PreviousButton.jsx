import { ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';

const PreviousButton = ({ to }) => {
    return(
        <Link to={to}>
            <button className="fixed top-4 left-4 rounded-full bg-black text-white dark:text-black dark:bg-white p-3 hover:bg-getstarted-dark dark:hover:bg-getstarted-light">
                <ArrowLeft className="h-7 w-7" />
            </button>
        </Link>
    )
}

export default PreviousButton;
