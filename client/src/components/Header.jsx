import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { openChat } from '../redux/chatbot/chatbotSlice'
import { Link } from 'react-router-dom';
import { england } from '../index';
import Flagmodal from './Flagmodal';

function Header() {

  const [isFlagmodalOpen, setIsFlagmodalOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className='max-w-[1400px] mx-auto w-full md:block hidden'>
        <div className="flex flex-col md:flex-row md:space-x-5 justify-end items-center py-3 md:pe-16">
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

export default Header