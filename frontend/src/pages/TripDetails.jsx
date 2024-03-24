import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import NavigationLinksButton from "../components/NavigationLinksButton/NavigationLinksButton";
import PreviousButton from "../components/PreviousButton/PreviousButton";

const TripDetails = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const tripDocRef = doc(firestore, "Trips", tripId);
        const tripDoc = await getDoc(tripDocRef);

        if (tripDoc.exists()) {
          setTrip(tripDoc.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching trip details:", error);
      }
    };

    fetchTripDetails();
  }, [tripId]);

  return (
    <div className="fixed left-0 top-0 z-0 h-screen w-screen bg-[url('https://cdn.dribbble.com/userupload/12608757/file/original-7c0e168619a01690aeee929e3f60cd13.jpg?resize=2400x1803')] bg-cover bg-center">
      <div className="absolute left-0 top-0 h-full w-full bg-black/10">
        <PreviousButton to="/createnewtrip"></PreviousButton>
        <NavigationLinksButton></NavigationLinksButton>
        <div className="flex h-screen items-center justify-center">
          <div className="mx-auto max-w-lg rounded-3xl bg-white p-7 px-7 py-7 mobile:mx-auto mobile:max-w-sm md:max-w-lg md:p-10 md:px-11 md:py-11 lg:max-w-2xl dark:bg-black">
            <h1 className="pb-10 text-center font-primary font-semibold uppercase tracking-wider mobile:text-2xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
              Welcome To Trips
            </h1>
            <h2 className="pb-7 text-center font-primary mobile:text-base sm:text-base md:text-lg lg:text-xl xl:text-xl dark:text-white">
              Your Trip Was Added Successfully
            </h2>
            <div className="flex flex-col items-center justify-center">
              {trip ? (
                <>
                  <h1 className="pb-1 dark:text-white">
                    <span className="pr-1 font-semibold dark:text-white">Trip Name:</span>{" "}
                    {trip.name}
                  </h1>
                  <p className="pb-1 dark:text-white">
                    <span className="pr-1 font-semibold dark:text-white">Destination:</span>{" "}
                    {trip.destination}
                  </p>
                  <p className="pb-1 dark:text-white">
                    <span className="pr-1 font-semibold dark:text-white">Start Date:</span>{" "}
                    {trip.startDate}
                  </p>
                  <p className="pb-5 dark:text-white">
                    <span className="pr-1 font-semibold dark:text-white">End Date:</span>{" "}
                    {trip.endDate}
                  </p>
                  {trip.images &&
                    trip.images.map((imageUrl, index) => (
                      <img
                        key={index}
                        src={imageUrl}
                        alt={`Trip ${trip.name} Image`}
                        className="w-70 h-40"
                      />
                    ))}
                </>
              ) : (
                <p className="dark:text-white">Loading trip details...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
