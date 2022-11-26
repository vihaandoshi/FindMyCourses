//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavigationBar/Navbar.jsx';
import {Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Search from './pages/Search';

function App() {
  return (
    <nav>
      <Navbar />
      <Routes> 
        <Route path ="/home" element={<Home />} />
        <Route path ="/search" element={<Search />} />
        <Route path ="/survey" element={<Survey />} />
        <Route path ="/about" element={<About />} />
      </Routes>
    </nav>
  );
}

export default App;
