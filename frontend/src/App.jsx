import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
