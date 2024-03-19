import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ExploraProfileButton from "../ExploraProfileButton/ExploraProfileButton";

const NavigationLinksButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`fixed right-6 top-6 z-50 rounded-full p-4 ${isOpen ? "bg-black text-white" : "bg-black text-white"} dark:bg-white dark:text-black`}
        onClick={toggleMenu}
        aria-label="navigation"
      >
        {isOpen ? (
          <X className="mobile:h-5 mobile:w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-7 xl:w-7" />
        ) : (
          <Menu className="mobile:h-5 mobile:w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-7 xl:w-7" />
        )}
      </button>
      <div
        className={`fixed right-0 top-0 h-full w-full bg-black transition-transform duration-300 ease-in-out dark:bg-white ${isOpen ? "translate-x-0 transform" : "translate-x-full transform"} md:w-2/6`}
      >
        <h1 className="fixed left-6 top-10 font-primary text-xl font-bold uppercase text-white dark:text-black">
          Explora
        </h1>
        <div className="flex h-screen flex-col items-center justify-center">
          <h2 className="pb-6 font-primary text-3xl font-bold uppercase tracking-wide text-white hover:text-gray-100 lg:text-2xl xl:text-3xl dark:text-black dark:hover:text-gray-800">
            Home
          </h2>
          <h2 className="pb-6 font-primary text-3xl font-bold uppercase tracking-wide text-white hover:text-gray-100 lg:text-2xl xl:text-3xl dark:text-black dark:hover:text-gray-800">
            Trips
          </h2>
          <h2 className="pb-6 font-primary text-3xl font-bold uppercase tracking-wide text-white hover:text-gray-100 lg:text-2xl xl:text-3xl dark:text-black dark:hover:text-gray-800">
            Journal
          </h2>
          <h2 className="pb-6 font-primary text-3xl font-bold uppercase tracking-wide text-white hover:text-gray-100 lg:text-2xl xl:text-3xl dark:text-black dark:hover:text-gray-800">
            Checklist
          </h2>
          <h2 className="pb-6 font-primary text-3xl font-bold uppercase tracking-wide text-white hover:text-gray-100 lg:text-2xl xl:text-3xl dark:text-black dark:hover:text-gray-800">
            Expenses
          </h2>
        </div>
        <ExploraProfileButton></ExploraProfileButton>
      </div>
    </>
  );
};

export default NavigationLinksButton;
