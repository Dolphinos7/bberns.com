import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CloudComputing from "./pages/CloudComputing";
import RydeSafe from "./pages/RydeSafe";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/CloudComputing" element={<CloudComputing />} />
        <Route path="/RydeSafe" element={<RydeSafe />} />
      </Routes>
    </Router>
  );
}

export default App;
