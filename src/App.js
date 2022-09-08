import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Routes/About";
import Home from "./Routes/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
