import React from "react";
import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";

const ExploraProfileButton = () => {
  return (
    <Link to="">
      <button className="fixed bottom-6 right-6 z-50 rounded-full bg-white p-3 text-black hover:bg-getstarted-light dark:bg-black dark:text-white dark:hover:bg-getstarted-dark">
        <UserRound className="mobile:h-5 mobile:w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-7 xl:w-7" />
      </button>
    </Link>
  );
};

export default ExploraProfileButton;
