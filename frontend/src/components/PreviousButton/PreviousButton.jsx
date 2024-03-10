import { ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";

const PreviousButton = () => {
    return(
        <Link to={to}>
            <button className='rounded-full bg-black text-white dark:text-black dark:bg-white'><ArrowLeft className="h-7 w-7" /></button>
        </Link>
    )
}

export default PreviousButton;