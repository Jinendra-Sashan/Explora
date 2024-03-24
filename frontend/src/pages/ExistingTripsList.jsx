import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import NavigationLinksButton from "../components/NavigationLinksButton/NavigationLinksButton";
import PreviousButton from "../components/PreviousButton/PreviousButton";

const ExistingTripsList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripsCollectionRef = collection(firestore, "Trips");
        const tripsSnapshot = await getDocs(tripsCollectionRef);
        const tripsList = tripsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTrips(tripsList);
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="fixed left-0 top-0 z-0 h-screen w-screen bg-[url('https://cdn.dribbble.com/userupload/12608757/file/original-7c0e168619a01690aeee929e3f60cd13.jpg?resize=2400x1803')] bg-cover bg-center">
      <div className="absolute left-0 top-0 h-full w-full bg-black/10">
        <NavigationLinksButton></NavigationLinksButton>
        <PreviousButton></PreviousButton>
        <div className="flex items-center justify-center h-screen">
        <div className="mx-auto max-w-lg rounded-3xl bg-white p-7 px-7 py-7 mobile:mx-auto mobile:max-w-sm md:max-w-lg md:p-10 md:px-11 md:py-11 lg:max-w-2xl dark:bg-black">
        <h1 className="pb-10 text-center font-primary font-semibold uppercase tracking-wider mobile:text-2xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
              Welcome To Trips
            </h1>
            <h2 className="pb-12 text-center font-primary mobile:text-base sm:text-base md:text-lg lg:text-xl xl:text-xl dark:text-white">
              Let's See Your Existing Trips
            </h2>
            <div className="flex items-center justify-center flex-col">
            <h1 className="pb-3 font-semibold dark:text-white">Existing Trips</h1>
            <ul className="">
                {trips.map(trip => (
                    <li key={trip.id} className="text-black dark:text-white mobile:text-sm">
                        <Link to={`/tripdetails/${trip.id}`}>{trip.name}</Link>
                    </li>
                ))}
            </ul>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ExistingTripsList;
