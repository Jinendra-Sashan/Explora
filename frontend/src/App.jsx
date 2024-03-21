import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Welcome from "./pages/Welcome";
import CreateNewTrip from "./pages/CreateNewTrip";
import Trip from "./pages/Trip";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/createnewtrip" element={<CreateNewTrip />} />
        <Route path="/trip" element={<Trip />} />
      </Routes>
    </Router>
  );
}

export default App;
