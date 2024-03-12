import { ReceiptText } from "lucide-react";

const TripInformationButton = () => {
  return (
    <button className="fixed bottom-6 right-6 z-50 flex items-center rounded-full bg-black p-4 text-white hover:bg-getstarted-dark dark:hover:bg-getstarted-light">
      <ReceiptText className="mobile:h-5 mobile:w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-7 xl:w-7" />
      <span className="ml-2 font-semibold text-base font-primary px-1 sm:text-base mobile:text-sm">Show More Details</span>
    </button>
  );
};

export default TripInformationButton;
