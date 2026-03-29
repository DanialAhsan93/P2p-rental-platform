import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Mission from './pages/Mission';
import Contactus from './pages/Contactus';
import Partnerships from './pages/Partnerships';
import Tou from './pages/Tou';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import Booking from './pages/Booking';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import Privacypoilcy from './pages/Privacypoilcy';
import Categories from './pages/Categories';
import Blog from './pages/Blog';
import Countryselector from './components/Countryselector';
import Useredit from './pages/Useredit';
import Favorities from './pages/Favorities';
import Credit from './pages/Credit';


function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<Layout />}>
            <Route path="/about-us" element={<About />} />
            <Route path="/about-us/mission" element={<Mission />} />
            <Route path="/about-us/contact" element={<Contactus />} />
            <Route path="/about-us/partnerships" element={<Partnerships />} />
            <Route path="/tou" element={<Tou />} />
            <Route path="/new-item" element={<Dashboard />} />
            <Route path="/user" element={<Profile />} />
            <Route path="/user/edit" element={<Useredit />} />
            <Route path="/user/favorites" element={<Favorities />} />
            <Route path="/user/coupons" element={<Credit />} />
            <Route path="/rental" element={<Booking />} />
            <Route path="/new-item" element={<Dashboard />} />
            <Route path="/privacy-policy" element={<Privacypoilcy />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/country" element={<Countryselector />} />
          </Route>


      </Routes>

      <Chatbot />

      <Footer />


    </BrowserRouter >


  )
}

export default App
