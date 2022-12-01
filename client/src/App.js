
import './App.css';
import React from "react";
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import {Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Search from './pages/Search';
import Scheduler from './pages/Scheduler';

function App() {
  return (
    <div>
      <nav>
        <Navbar />
        <Routes> 
          <Route path ="/" element={<Home />} />
          <Route path ="/search" element={<Search />} />
          <Route path ="/scheduler" element={<Scheduler />} />
          <Route path ="/about" element={<About />} />
          <Route path ="/survey" element={<Survey/>} />
        </Routes>
      </nav>
      <Footer />
    </div>
  );
}

export default App;
