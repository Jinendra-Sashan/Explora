// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import NavigationLinksButton from '../components/NavigationLinksButton/NavigationLinksButton';
import { Card, Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons'; // Import the PlusOutlined icon for the "Add New Trip" button

const mockTrips = [
  {
    id: 1,
    title: 'Trip 1',
    description: 'Description of Trip 1',
    location: 'Location 1',
    date: '2024-03-26',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Trip 2',
    description: 'Description of Trip 2',
    location: 'Location 2',
    date: '2024-04-10',
    image: 'https://via.placeholder.com/300',
  },
  // Add more mock trips as needed
];

const ExistingTrips = () => {
  return (
    <div className="fixed left-0 top-0 z-0 h-screen w-screen">
      {/* Div for the background image with blur effect */}
      <div
        className="absolute left-0 top-0 w-full h-full bg-[url('https://cdn.dribbble.com/userupload/12608757/file/original-7c0e168619a01690aeee929e3f60cd13.jpg?resize=2400x1803')] bg-cover bg-center filter blur-lg"
        style={{ zIndex: -1 }}
      ></div>

      <NavigationLinksButton />

      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white mb-8">Existing Trips</h1>
        <Link to="/CreateNewTrip">
          <div className="bg-getstarted-customBlue hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-full poppins text-xl ml-8 mr-8 mb-4 flex items-center">
            <PlusOutlined className="mr-2" />
            Add New Trip
          </div>
        </Link>

        <Row gutter={[16, 16]}>
          {mockTrips.map((trip) => (
            <Col key={trip.id} xs={24} sm={12} md={8} lg={6}>
              <Link to={`/trip/${trip.id}`}>
                <Card
                  hoverable
                  cover={<img alt={trip.title} src={trip.image} />}
                >
                  <Card.Meta
                    title={trip.title}
                    description={trip.location}
                  />
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
