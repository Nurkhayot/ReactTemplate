import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home"
import About from "./Pages/About"
import ErorPage from "./Pages/ErorPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErorPage />} />
      </Routes>
    </Router>
  )
}

export default App;
