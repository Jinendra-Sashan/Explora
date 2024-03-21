import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const TripInformationButton = ({ to }) => {
  return (
    <Link to={to}>
      <button className="fixed bottom-6 right-6 z-50 flex items-center rounded-full bg-white p-4 text-black hover:bg-getstarted-light dark:bg-black dark:text-white dark:hover:bg-getstarted-dark">
        <MapPin className="mobile:h-5 mobile:w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-7 xl:w-7" />
        <span className="ml-2 px-1 font-primary text-base font-semibold mobile:text-sm sm:text-base">
          Show More Details
        </span>
      </button>
    </Link>
  );
};

export default TripInformationButton;
