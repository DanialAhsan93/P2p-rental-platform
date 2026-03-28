import React from 'react';
import { FaChevronRight } from "react-icons/fa6";


function Reusableprofile({icon , text, subtext, onClick}) {
  return (
    <div className='flex flex-row items-center justify-center md:py-5 py-3' onClick={onClick}>
        <div className='w-[5%]'>
            {icon}
        </div>
      <div className='w-[85%] md:ps-8 ps-3'>
        <h2 className='text-[16px] font-normal'>{text}</h2>
        {subtext && <p className='text-gray-400 text-[12px]'>{subtext}</p>}
      </div>
      <div className='w-[5%]'>
      <FaChevronRight />

      </div>

    </div>
  )
}

export default Reusableprofile