import PreviousButton from "../components/PreviousButton/PreviousButton";
import FavouriteButton from "../components/FavouriteButton/FavouriteButton";
import TripInformationButton from "../components/TripInformationButton/TripInformationButton";

const TripDetails = () => {
  return (
    <div className=" fixed left-0 top-0 z-0 h-screen w-screen bg-white bg-cover bg-center dark:bg-black">
      <PreviousButton></PreviousButton>
      <FavouriteButton></FavouriteButton>
      <div className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Trip Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <h1 className=" heading-animate absolute bottom-20 left-9 px-3 py-10 font-primary font-semibold text-white mobile:bottom-28 mobile:left-3 mobile:text-6xl sm:bottom-24 sm:left-3 sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl">
          Bali, Indonesia
        </h1>
        <h2 className=" subheading-animate absolute bottom-4 left-9 px-3 py-10 font-primary font-semibold text-gray-100 mobile:bottom-16 mobile:left-3 mobile:text-2xl sm:bottom-12 sm:left-3 sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
          Started On February 2024
        </h2>
      </div>
      <TripInformationButton></TripInformationButton>
    </div>
  );
};

export default TripDetails;
