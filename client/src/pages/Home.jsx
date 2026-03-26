import React from 'react';
import { useState } from 'react';
import Chatbot from '../components/Chatbot';
import { useDispatch } from 'react-redux';
import { openChat } from '../redux/chatbot/chatbotSlice';
import { england, main } from '../index';
import Flagmodal from '../components/Flagmodal';
import { Link } from 'react-router-dom';
import Homeheader from '../components/Homeheader';
import HomeNavbar from '../components/HomeNavbar';
import Homehero from '../components/Homehero';
import Homeheroleft from '../components/Homeheroleft';
import Homesec from '../components/Homesec';
import '../components/hero.css';
import Feedbackcarousel from '../components/Feedbackcarousel';
import Choose from '../components/Choose';
import Homefifth from '../components/Homefifth';
function Home() {


  return (
    <div className='max-w-[2200px] w-full mx-auto'>

      <section className="flex lg:flex-row flex-col justify-center items-center lg:h-[87vh] main">

        <div className="lg:w-[67%] h-[390px] sm:h-[557px] lg:h-[100%] lg:block flex bg-cover bg-center bg-no-repeat rounded-br-[40px] 
          w-[100%] main-right" style={{ backgroundImage: `url(${main})` }} > 

          <Homeheader />

          <HomeNavbar />

          <Homehero />

        </div>

        
        <div className="lg:w-[33%] lg:h-[100%] px-3">
          <Homeheroleft />
        </div>



      </section>

      <Homesec />

      <Feedbackcarousel />
      
      <Choose />

      <Homefifth />

    </div>
  )
}

export default Home