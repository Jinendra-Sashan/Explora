import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Welcome from "./pages/Welcome";
import CreateNewTrip from "./pages/CreateNewTrip";
import Trip from "./pages/Trip";
import HomeOverview from './pages/HomeOverview';
import Checklist from "./pages/Checklist";
import ExistingTrips from "./pages/ExistingTrips";
import UserInformation from "./pages/UserInformation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/CreateNewTrip" element={<CreateNewTrip />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/home" element={<HomeOverview />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/ExistingTrips" element={<ExistingTrips />} />
        <Route path="/profile" element={<UserInformation />} />
      </Routes>
    </Router>
  );
}

export default App;
