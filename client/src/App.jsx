import { useState } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Mission from './pages/Mission';
import Contactus from './pages/Contactus';
import Partnerships from './pages/Partnerships';
import Tou from './pages/Tou';
import Dashboard from './pages/Dashboard';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/about-us/mission" element={<Mission />} />
        <Route path="/about-us/contact" element={<Contactus />} />
        <Route path="/about-us/partnerships" element={<Partnerships />} />
        <Route path="/tou" element={<Tou />} />
        <Route path="/new-item" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>


  )
}

export default App
