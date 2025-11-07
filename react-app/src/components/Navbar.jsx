// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Zero Hunger</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/donations" className="hover:text-yellow-300">Donations</Link>
          <Link to="/statistics" className="hover:text-yellow-300">Statistics</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
