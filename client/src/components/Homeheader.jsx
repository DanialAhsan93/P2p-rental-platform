import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openChat } from '../redux/chatbot/chatbotSlice';
import { england } from '../index';
import Flagmodal from './Flagmodal';
import { Link } from 'react-router-dom';

function Homeheader() {
  const [isFlagmodalOpen, setIsFlagmodalOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className='lg:block hidden'>
      <div className="flex flex-col md:flex-row md:space-x-5 justify-end items-center py-3 
          md:pe-16 text-white">
        <div className='w-[25px] h-[15px]' onClick={() => setIsFlagmodalOpen(true)}>
          <img src={england} alt="England" className='w-full h-full' />
        </div>
        <div className='text-sm italic cursor-pointer' onClick={() => dispatch(openChat("how"))}>How Rental paltform works</div>
        <div className='text-sm italic cursor-pointer' onClick={() => dispatch(openChat("guarantee"))}>Guarantee</div>
        <div className='text-sm italic cursor-pointer' onClick={() => dispatch(openChat("faqs"))}>FAQs</div>
        <Link to="about-us/contact" className='text-sm italic cursor-pointer'>Contact</Link>
      </div>
      <Flagmodal isOpen={isFlagmodalOpen} setIsOpen={setIsFlagmodalOpen} />
    </div>
  )
}

export default Homeheader