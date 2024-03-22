import { useNavigate } from 'react-router-dom';
import tripImage from '../assets/cloud.png';
import backgroundImage from '../assets/background.jpg';
import ballon from '../assets/Ballon.png';

const Trip = () => {
  const navigate = useNavigate(); // Access the navigate function

  return (
    <div
      className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center relative"
    >
      {/* Background image with blur effect */}
      <div
        className="bg-cover bg-no-repeat bg-center h-screen w-screen absolute bottom-0 left-0 z-0"
        style={{ filter: 'blur(100px)' }}
      >
        <img src={backgroundImage} alt="Background" />
      </div>

      {/* Cloud image (centered at bottom) */}
      <img
        src={tripImage}
        alt="Cloud"
        className="transform -translate-x-0 mt-40 y-40 z-1" // Adjusted positioning
      />
      <img
        src={ballon}
        alt="Ballon"
        className="absolute top-25 right-0 transform y-40 z-1" // Adjusted positioning
      />

      {/* Buttons and heading container (on top of everything) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2">
        <h1 className="text-3xl font-bold text-center mb-16 poppins">Trips</h1>
        <div className="flex justify-center gap-2">
          <button
            className="bg-getstarted-customBlue hover:text-black hover:bg-white text-white font-bold py-4 px-8 rounded-full poppins text-xl ml-8 mr-8"
            onClick={() => navigate('/create-trip')}
          >
            Create New Trip
          </button>
          <button className="bg-getstarted-customBlue hover:text-black hover:bg-white text-white font-bold py-4 px-8 rounded-full poppins text-xl ml-8 mr-8">
            Open Existing Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trip;
