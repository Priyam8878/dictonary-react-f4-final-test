import React from "react";
import "./App.css";

// page1:
import Home from "./component/Home";
import About from "./component/About";
import History from "./component/History";
import Navbar from "./component/Navbar";



import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App