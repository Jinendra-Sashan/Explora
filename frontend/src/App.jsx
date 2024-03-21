import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checklist from "./pages/Checklist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/checklist" element={<Checklist />} />
      </Routes>
    </Router>
  );
}

export default App;