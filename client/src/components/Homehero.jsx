import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io';
import { MdLocationSearching } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { england } from '../index';
import Flagmodal from './Flagmodal';



function Homehero() {
    const [isFlagmodalOpen, setIsFlagmodalOpen] = useState(false);

    return (
        <div className='flex flex-col w-[100%]  items-center justify-center sm:mb-0 mb-6'>

            <div className='lg:w-full md:h-[45px]'></div>
            <div className='w-[25px] h-[15px] lg:hidden' onClick={() => setIsFlagmodalOpen(true)}>
                <img src={england} alt="England" className='w-full h-full cursor-pointer' />
            </div>
            <span className="text-[16px] sm:text-2xl font-semibold text-heading text-white lg:hidden">
                Rental-Platform
            </span>

            <h1 className='md:text-[45px] sm:text-[39px] text-[18px] text-white md:mt-0 lg:mt-4 font-bold'>
                Borrow instead of buying
            </h1>
            <h4 className='text-[14px] sm:text-[20px] text-white md:mb-2'>
                Nearby and at times that suit you
            </h4>
            <div className="relative  sm:w-[68%] w-[85%] shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-4xl">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <IoIosSearch className='text-gray' />
                </div>
                <input
                    type="text"
                    id="search-desktop"
                    className="block w-full pl-9 pr-3 py-3 rounded-4xl text-[12px] sm:text-[16px] border border-0 "
                    placeholder="Search what you want to rent"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 
                                             text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                                             hover:bg-gradient-to-bl font-medium text-[12px] sm:text-sm  px-3 py-1.5
                                              rounded-full focus:outline-none focus:ring-0 cursor-pointer">
                    Search
                </button>

            </div>

            <div className='w-full flex items-center justify-center gap-4 mt-4  '>
                <div className='flex items-center gap-2 justify-center cursor-pointer'>
                    <span>
                        <MdLocationSearching className='text-white text-[12px] sm:text-[16px]' />
                    </span>
                    <span className='text-white m-0 text-[12px] sm:text-[16px]'>
                        Near London
                    </span>
                    <span className='text-cyan-500 hover:text-cyan-600 text-[12px] sm:text-[16px]'>(change)</span>
                </div>
                <div className='flex items-center gap-2 justify-center cursor-pointer'>
                    <span>
                        <MdOutlineCalendarMonth className='text-white text-[12px] sm:text-[16px]' />
                    </span>
                    <span className='text-cyan-500 hover:text-cyan-600 m-0 text-[12px] sm:text-[16px]'>
                        Select Date
                    </span>
                </div>
            </div>

            <div className='md:w-[68%] lg:mt-5'>
                <span className='text-gray-300 font-semibold text-sm'>
                    Recent Searches
                </span>
                <div className='lg:mt-2 flex flex-wrap items-center sm:gap-8 gap-4 '>
                    <button className='text-cyan-500 bg-white border border-cyan-500 rounded-full px-4 py-1 
                    sm:text-[14px] text-[12px] hover:bg-cyan-500 hover:text-white transition-colors duration-200
                    cursor-pointer'>
                        Monitor
                    </button>
                    <button className='text-cyan-500 bg-white border border-cyan-500 rounded-full px-4 py-1 
                    sm:text-[14px] text-[12px] hover:bg-cyan-500 hover:text-white transition-colors duration-200
                    cursor-pointer'>
                        Drone
                    </button>
                    <button className='text-cyan-500 bg-white border border-cyan-500 rounded-full px-4 py-1 
                    sm:text-[14px] text-[12px] hover:bg-cyan-500 hover:text-white transition-colors duration-200
                    cursor-pointer'>
                        Drills and Screwdrivers
                    </button>
                    <button className='text-cyan-500 bg-white border border-cyan-500 rounded-full px-4 py-1 
                    sm:text-[14px] text-[12px] hover:bg-cyan-500 hover:text-white transition-colors duration-200
                    cursor-pointer'>
                        Power Station
                    </button>

                </div>

            </div>
            <Flagmodal isOpen={isFlagmodalOpen} setIsOpen={setIsFlagmodalOpen} />
        </div>
    )
}

export default Homehero