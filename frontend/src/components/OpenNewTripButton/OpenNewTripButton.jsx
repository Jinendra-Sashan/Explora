import { Earth } from "lucide-react";
import { Link } from "react-router-dom";

const OpenNewTripButton = () => {
    return (
        <Link to="/createnewtrip">
        <button className="flex items-center rounded-full bg-black p-3 px-5 font-primary font-semibold text-white hover:bg-getstarted-dark mobile:text-xs sm:text-sm md:text-base lg:text-base xl:text-base dark:bg-white dark:text-black dark:hover:bg-getstarted-light sm:py-2 mobile:py-2 lg:py-3 xl:py-3 md:py-3 sm:px-4 mobile:px-4 xl:px-5 lg:px-5 md:px-5">
            <Earth className="h-6 w-6 mobile:h-5 mobile:w-5 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-6 xl:w-6 mr-2" />
            <span>New Trips</span>
        </button>
        </Link>
    )
}

export default OpenNewTripButton;