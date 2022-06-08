import React from 'react';
import MainFooter from './Includes/MainFooter';
import MainNavbar from './Includes/MainNavbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from './Pages/Blog';

function App() {
  return (
    <div>
      <MainNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
      <MainFooter />
    </div>
  );
}

export default App;