// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';
import NavigationLinksButton from '../components/NavigationLinksButton/NavigationLinksButton';

const TripDetail = () => {
  // Getting the id parameter from the URL
  const { id } = useParams();

  // Mock data for demonstration
  const trip = {
    id: 1,
    title: `Trip ${id}`,
    description: `Describing Trip ${id}`,
    location: `Locating ${id}`,
    date: `2024-03-${id}`,
    image: `https://via.placeholder.com/300?text=Trip${id}`,
  };

  return (
    <div className="fixed left-0 top-0 z-0 h-screen w-screen">
      {/* Setting up the background image with blur effect */}
      <div
        className="absolute left-0 top-0 w-full h-full bg-[url('https://cdn.dribbble.com/userupload/12608757/file/original-7c0e168619a01690aeee929e3f60cd13.jpg?resize=2400x1803')] bg-cover bg-center filter blur-lg"
        style={{ zIndex: -1 }}
      ></div>

      {/* Adding the navigation links */}
      <NavigationLinksButton />

      <div className="flex h-screen flex-col items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
          {/* Displaying the title of the trip */}
          <h1 className="text-3xl font-bold mb-4">{trip.title}</h1>

          {/* Showing the image of the trip */}
          <img src={trip.image} alt={trip.title} className="mb-4" />

          {/* Presenting the location of the trip */}
          <p className="mb-2">
            <strong>Locating at:</strong> {trip.location}
          </p>

          {/* Displaying the date of the trip */}
          <p className="mb-2">
            <strong>Date of the Trip:</strong> {trip.date}
          </p>

          {/* Describing the trip */}
          <p>
            <strong>Describing the Trip:</strong> {trip.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TripDetail;
