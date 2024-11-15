import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Content from "./components/StoryDeatailPage/Content";
import Contact from "./components/ContactUs/Contact";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col bg-gray-100">
        {/* Header Component - stays consistent across all routes */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Content />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer (Optional, if needed) */}
        <footer className="bg-gray-900 text-white text-center py-4">
          <p>&copy; 2024 Your Website. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
