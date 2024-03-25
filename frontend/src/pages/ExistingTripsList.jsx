/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import NavigationLinksButton from "../components/NavigationLinksButton/NavigationLinksButton";
import PreviousButton from "../components/PreviousButton/PreviousButton";
import placeholderImage from "../assets/Bali.webp";

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
      <div className="absolute left-0 top-0 h-full w-full bg-black/20">
        <NavigationLinksButton />
        <PreviousButton />
        <div className="flex h-screen items-center justify-center">
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 md:p-12 lg:p-16 xl:p-20 dark:bg-black">
            <h1 className="pb-10 text-center font-primary font-semibold uppercase tracking-wider text-4xl md:text-5xl lg:text-6xl dark:text-white">
              Welcome To Trips
            </h1>
            <h2 className="pb-12 text-center font-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl dark:text-white">
              Let's See Your Existing Trips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trips.map((trip) => (
                <div
                  key={trip.id}
                  className="flex flex-col rounded-lg bg-gray-200 p-6 md:p-8 lg:p-10 shadow-md"
                >
                  <img
                    src={trip.image || placeholderImage}
                    alt={trip.name}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                  />
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-black">
                      {trip.name}
                    </h3>
                    <Link
                      to={`/tripdetails/${trip.id}`}
                      className="rounded-md bg-black text-white py-2 px-4 hover:bg-white hover:text-black"
                    >
                      View
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Location: {trip.location}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Date: {trip.date}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Description: {trip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExistingTripsList;
