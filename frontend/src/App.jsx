import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Welcome from "./pages/Welcome";
import TripDetails from "./pages/TripDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TripDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
