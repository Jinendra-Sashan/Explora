import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SecondPreviousButton = ({ to }) => {
  return (
    <Link to={to}>
      <button
        className="fixed left-6 top-6 rounded-full bg-black p-4 text-white hover:bg-getstarted-dark mobile:left-4 sm:left-4 dark:bg-white dark:text-black dark:hover:bg-getstarted-light"
        aria-label="previous"
      >
        <ArrowLeft className="mobile:h-5 mobile:w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-7 xl:w-7" />
      </button>
    </Link>
  );
};

export default SecondPreviousButton;