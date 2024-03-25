// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { firestore } from "../firebase";
import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import NavigationLinksButton from "../components/NavigationLinksButton/NavigationLinksButton";
import PreviousButton from "../components/PreviousButton/PreviousButton";


const TripDetails = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);
  const [editingTrip, setEditingTrip] = useState(false);
  const [editedTrip, setEditedTrip] = useState({ name: '', destination: '', startDate: '', endDate: '', images: [] });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const tripDocRef = doc(firestore, "Trips", tripId);
        const tripDoc = await getDoc(tripDocRef);

        if (tripDoc.exists()) {
          setTrip(tripDoc.data());
          setEditedTrip(tripDoc.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching trip details:", error);
      }
    };

    fetchTripDetails();
  }, [tripId]);

  const handleEdit = () => {
    setEditingTrip(true);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this trip?')) {
      const tripDocRef = doc(firestore, "Trips", tripId);
      await deleteDoc(tripDocRef);
      navigate('/trip');
    }
  };

  const handleSave = async () => {
    const tripDocRef = doc(firestore, "Trips", tripId);
    await updateDoc(tripDocRef, editedTrip);
    setTrip(editedTrip);
    setEditingTrip(false);
  };

  return (
    <div className="relative h-screen bg-[url('https://cdn.dribbble.com/userupload/12608757/file/original-7c0e168619a01690aeee929e3f60cd13.jpg?resize=2400x1803')] bg-cover bg-center">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 flex flex-col justify-center items-center">
        <PreviousButton to="/createnewtrip" />
        <NavigationLinksButton />
        <div className="bg-white rounded-lg p-6 max-w-md mx-auto shadow-lg">
          {trip ? (
            editingTrip ? (
              <>
                <input
                  type="text"
                  value={editedTrip.name}
                  onChange={(e) => setEditedTrip({ ...editedTrip, name: e.target.value })}
                  placeholder="Trip Name"
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  value={editedTrip.destination}
                  onChange={(e) => setEditedTrip({ ...editedTrip, destination: e.target.value })}
                  placeholder="Destination"
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                  type="date"
                  value={editedTrip.startDate}
                  onChange={(e) => setEditedTrip({ ...editedTrip, startDate: e.target.value })}
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                  type="date"
                  value={editedTrip.endDate}
                  onChange={(e) => setEditedTrip({ ...editedTrip, endDate: e.target.value })}
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                  Save
                </button>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-2">{trip.name}</h1>
                <p className="text-lg mb-2">Location: {trip.destination}</p>
                <p className="text-lg mb-2">Date: {trip.startDate} - {trip.endDate}</p>
                <p className="text-lg mb-4">Description: {/* Add trip description here */}</p>
                <div className="flex space-x-4">
                  <button onClick={handleEdit} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
                    Edit
                  </button>
                  <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
                    Delete
                  </button>
                </div>
              </>
            )
          ) : (
            <p>Loading trip details...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
