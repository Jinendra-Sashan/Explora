/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

import CreateNewJournalButton from "../components/CreateNewJournalButton/CreateNewJournalButton";
import CreateNewTripButton from "../components/CreateNewTripButton/CreateNewTripButton";
import NavigationLinksButton from "../components/NavigationLinksButton/NavigationLinksButton";
import PreviousButton from "../components/PreviousButton/PreviousButton";

import LandmarkDetector from "../components/LandmarkDetector";
import WeatherWidget from "../components/WeatherWidget";
import CurrencyConverter from "../components/CurrencyConverter";

const HomeOverview = () => {
  return (
    <div className="fixed left-0 top-0 z-0 h-screen w-screen bg-[url('https://cdn.dribbble.com/userupload/12608757/file/original-7c0e168619a01690aeee929e3f60cd13.jpg?resize=2400x1803')] bg-cover bg-center overflow-y-auto">
      <div className="absolute left-0 top-0 min-h-full w-full bg-black/10 pb-10">
        <NavigationLinksButton></NavigationLinksButton>
        <PreviousButton></PreviousButton>
        <div className="flex min-h-screen flex-col items-center justify-center pt-20">
          <div className="mx-auto max-w-lg rounded-3xl bg-white p-7 px-7 py-7 mobile:mx-auto mobile:max-w-sm md:max-w-lg md:p-10 md:px-11 md:py-11 lg:max-w-2xl dark:bg-black w-full shadow-2xl">
            <br />
            <h1 className="pb-6 text-center font-primary font-semibold uppercase tracking-wider mobile:text-2xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
              Welcome To Explora
            </h1>
            <h2 className="pb-8 text-center font-primary mobile:text-base sm:text-base md:text-lg lg:text-xl xl:text-xl dark:text-white">
              Let's Plan Your Adventures For Today
            </h2>
            <div className="flex items-center justify-center pb-8 border-b border-gray-100 dark:border-zinc-800">
              <div className="pr-5">
                <Link to="/trip">
                  <CreateNewTripButton></CreateNewTripButton>
                </Link>
              </div>
              <div>
                <CreateNewJournalButton></CreateNewJournalButton>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <h3 className="text-sm font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest text-center">
                Travel Utilities Dashboard
              </h3>
              <WeatherWidget />
              <LandmarkDetector />
              <CurrencyConverter />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOverview;
