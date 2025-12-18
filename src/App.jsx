import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Offer from './pages/Offer';
import About from './pages/About';
import Technologies from './pages/Technologies';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
    <div className='overflow-hidden'>
      <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/about" element={<About />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;