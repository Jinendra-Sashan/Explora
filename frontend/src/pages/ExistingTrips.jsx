// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import NavigationLinksButton from "../components/NavigationLinksButton/NavigationLinksButton";
import { Card, Col, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons"; // Import the PlusOutlined icon for the "Add New Trip" button

// Mock data for existing trips
const mockTrips = [
  {
    id: 1,
    title: "Trip 1",
    description: "Description of Trip 1",
    location: "Location 1",
    date: "2024-03-26",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Trip 2",
    description: "Description of Trip 2",
    location: "Location 2",
    date: "2024-04-10",
    image: "https://via.placeholder.com/300",
  },
  // Add more mock trips as needed
];

const ExistingTrips = () => {
  return (
    <div className="fixed left-0 top-0 z-0 h-screen w-screen">
      {/* Div for the background image with blur effect */}
      <div
        className="absolute left-0 top-0 h-full w-full bg-[url('https://cdn.dribbble.com/userupload/12608757/file/original-7c0e168619a01690aeee929e3f60cd13.jpg?resize=2400x1803')] bg-cover bg-center blur-lg filter"
        style={{ zIndex: -1 }}
      ></div>

      {/* Adding the navigation links */}
      <NavigationLinksButton />

      <div className="flex h-screen flex-col items-center justify-center">
        {/* Title for the page */}
        <h1 className="mb-8 text-3xl font-bold text-white">Existing Trips</h1>

        {/* Link to create a new trip */}
        <Link to="/CreateNewTrip">
          <div className="poppins mb-4 ml-8 mr-8 flex items-center rounded-full bg-getstarted-customBlue px-8 py-4 text-xl font-bold text-white hover:bg-white hover:text-black">
            <PlusOutlined className="mr-2" />
            Adding New Trip
          </div>
        </Link>

        {/* Displaying existing trips as cards */}
        <Row gutter={[16, 16]}>
          {mockTrips.map((trip) => (
            <Col key={trip.id} xs={24} sm={12} md={8} lg={6}>
              {/* Link to the detail page of each trip */}
              <Link to={`/trip/${trip.id}`}>
                <Card
                  hoverable
                  cover={<img alt={trip.title} src={trip.image} />}
                >
                  {/* Title and location of the trip */}
                  <Card.Meta title={trip.title} description={trip.location} />
                  {/* Description and date of the trip */}
                  <p>{trip.description}</p>
                  <p>Date: {trip.date}</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ExistingTrips;
