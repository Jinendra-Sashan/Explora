// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';

const TripDetail = () => {
  const { id } = useParams(); // Get the id parameter from the URL

  // Here you can fetch the details of the trip with the given id
  // For demonstration, we'll use mock data
  const trip = {
    id: 1,
    title: `Trip ${id}`,
    description: `Description of Trip ${id}`,
    location: `Location ${id}`,
    date: `2024-03-${id}`,
    image: `https://via.placeholder.com/300?text=Trip${id}`,
  };

  return (
    <div className="fixed left-0 top-0 z-0 h-screen w-screen">
      {/* Div for the background image with blur effect */}
      <div
        className="absolute left-0 top-0 w-full h-full bg-[url('https://cdn.dribbble.com/userupload/12608757/file/original-7c0e168619a01690aeee929e3f60cd13.jpg?resize=2400x1803')] bg-cover bg-center filter blur-lg"
        style={{ zIndex: -1 }}
      ></div>

      <div className="flex h-screen flex-col items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4">{trip.title}</h1>
          <img src={trip.image} alt={trip.title} className="mb-4" />
          <p className="mb-2"><strong>Location:</strong> {trip.location}</p>
          <p className="mb-2"><strong>Date:</strong> {trip.date}</p>
          <p><strong>Description:</strong> {trip.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TripDetail;
