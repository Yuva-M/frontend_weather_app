import React from "react";
import "./styles.css";
import About from "./About";
import Nav from "./Nav";
import WeatherApp from "./WeatherApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WeatherApp" element={<WeatherApp />} />
           <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
