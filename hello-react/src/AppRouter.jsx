import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Profile from "./pages/Profile";
import App from "./App";

const AppRouter = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/About">About</Link>
        <Link to="/Profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
