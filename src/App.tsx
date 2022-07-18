import React from 'react';
import MainFooter from './Includes/MainFooter';
import MainNavbar from './Includes/MainNavbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from './Pages/Blog';
import About from './Pages/About';
import Contact from './Pages/Contact';
import MainLoading from './Includes/MainLoading';

function App() {
  return (
    <div>
      <MainLoading />
      <MainNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </Router>
      <MainFooter />
    </div>
  );
}

export default App;