import { useNavigate } from 'react-router-dom';
import ballon from '../assets/Ballon.png';
import NavigationLinksButton from "../components/NavigationLinksButton/NavigationLinksButton";

const Trip = () => {
  const navigate = useNavigate(); // Access the navigate function

  return (

    <div className="fixed left-0 top-0 z-0 h-screen w-screen">
    {/* Div for the background image with blur effect */}
    <div
      className="absolute left-0 top-0 w-full h-full bg-[url('https://cdn.dribbble.com/userupload/12608757/file/original-7c0e168619a01690aeee929e3f60cd13.jpg?resize=2400x1803')] bg-cover bg-center filter blur-lg"
      style={{ zIndex: -1 }}
    ></div>
      <img
        src={ballon}
        alt="Ballon"
        className="absolute top-25 right-0 transform y-40 z-1" // Adjusted positioning
      />
        
        <NavigationLinksButton></NavigationLinksButton>
      <div className="flex h-screen flex-col items-center justify-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2">
       <h1 className="text-3xl font-bold text-center mb-16 poppins">Trips</h1>
        <div className="flex justify-center gap-2">
          <button
            className="bg-getstarted-customBlue hover:text-black hover:bg-white text-white font-bold py-4 px-8 rounded-full poppins text-xl ml-8 mr-8"
            onClick={() => navigate('/CreateNewTrip')}
          >
            Create New Trip
          </button>
          <button 
          onClick={() => navigate('/ExistingTrips')}
          className="bg-getstarted-customBlue hover:text-black hover:bg-white text-white font-bold py-4 px-8 rounded-full poppins text-xl ml-8 mr-8">
            Open Existing Trip
          </button>
        </div>
        </div>
        </div>
      </div>
  
  );
};

export default Trip;
