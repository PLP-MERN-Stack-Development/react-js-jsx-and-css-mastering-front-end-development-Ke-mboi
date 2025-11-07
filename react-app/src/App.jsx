// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Donations from "./pages/Donations";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
