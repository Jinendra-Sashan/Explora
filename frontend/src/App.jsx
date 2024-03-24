// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Welcome from "./pages/Welcome";
import Trip from "./pages/Trip";
import CreateNewTrip from "./pages/CreateNewTrip";
import TripDetail from "./pages/TripDetail";
import HomeOverview from "./pages/HomeOverview";
import Checklist from "./pages/Checklist";
import ExistingTrips from "./pages/ExistingTrips";
import UserInformation from "./pages/UserInformation";
import TripAddedSuccessfully from "./pages/TripAddedSuccessfully";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/Trip" element={<Trip />} />
        <Route path="/CreateNewTrip" element={<CreateNewTrip />} />
        <Route path="/trip/:id" element={<TripDetail />} />
        <Route path="/home" element={<HomeOverview />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/ExistingTrips" element={<ExistingTrips />} />
        <Route path="/profile" element={<UserInformation />} />
        <Route
          path="/TripAddedSuccessfully"
          element={<TripAddedSuccessfully />}
        />
      </Routes>
    </Router>
  );
}

export default App;
