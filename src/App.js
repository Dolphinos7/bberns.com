import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CloudComputing from "./pages/CloudComputing";
import RydeSafe from "./pages/RydeSafe";
import VibeCheck from "./pages/VibeCheck";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/CloudComputing" element={<CloudComputing />} />
        <Route path="/RydeSafe" element={<RydeSafe />} />
        <Route path="/VibeCheck" element={<VibeCheck />} />
      </Routes>
    </Router>
  );
}

export default App;
