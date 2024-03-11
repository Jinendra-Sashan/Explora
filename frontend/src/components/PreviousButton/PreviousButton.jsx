import { ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';

const PreviousButton = ({ to }) => {
    return(
        <Link to={to}>
            <button className="fixed top-6 left-6 rounded-full bg-black text-white dark:text-black dark:bg-white p-3 hover:bg-getstarted-dark dark:hover:bg-getstarted-light">
                <ArrowLeft className="xl:h-7 xl:w-7 lg:h-7 lg:w-7 md:h-6 md:w-6 sm:h-5 sm:w-5 mobile:h-5 mobile:w-5" />
            </button>
        </Link>
    )
}

export default PreviousButton;
