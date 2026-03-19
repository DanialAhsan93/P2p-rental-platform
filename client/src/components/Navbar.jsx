import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Button } from "flowbite-react";
import { BsThreeDots } from 'react-icons/bs';
import { IoIosSearch } from "react-icons/io";
import Signin from './Signin';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div>
            <nav className="bg-neutral-primary w-[93%] mx-auto ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    {/* 🔹 LOGO */}
                    <Link to="/" className="flex items-center">
                        {/* <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-7"
                            alt="Logo"
                        /> */}
                        <span className="text-2xl font-semibold text-heading">
                            Rental-Platform
                        </span>
                    </Link>

                    {/* 🔹 RIGHT (Search + Menu button) */}
                    <div className="flex items-center lg:flex-1 lg:px-12">

                        {/* Search (Desktop) */}
                        <div className="relative hidden lg:block w-full shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-4xl">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <IoIosSearch className='text-gray'/>
                            </div>
                            <input
                                type="text"
                                id="search-desktop"
                                className="block w-full pl-9 pr-3 py-3 rounded-4xl text-md border border-0 "
                                placeholder="Search what you want to rent"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 
                                 text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                                 hover:bg-gradient-to-bl font-medium text-sm px-4 py-1.5 
                                rounded-full focus:outline-none focus:ring-0">
                                Search
                            </button>

                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden p-2 w-10 h-10 rounded hover:bg-gray-200"
                        >
                            ☰
                        </button>
                    </div>

                    {/* 🔹 MENU */}
                    <div className={`${menuOpen ? "block" : "hidden"} w-full lg:flex lg:w-auto`}>

                        {/* Mobile Search */}
                        <div className="relative mt-3 lg:hidden ">

                            <div className='shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-4xl px-2'>

                                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                <IoIosSearch className='text-gray'/>
                            </div>

                            <input
                                type="text"
                                id="search-mobile"
                                className="block w-full pl-3 ml-3 pr-2 py-2  border border-0"
                                placeholder="Search"
                            />

                            </div>
                            
                        </div>

                        <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-3 mt-4 lg:mt-0">


                            {/* Services */}
                            <li>
                                <Link to="/new-item">
                                    <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                                 hover:bg-gradient-to-bl font-medium text-sm px-4 py-2.5 
                                rounded-full focus:outline-none focus:ring-0'>
                                        Create Listing
                                    </button>
                                </Link>
                            </li>
                            {/* Login/Register */}
                            <li>
                                <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                                 hover:bg-gradient-to-bl font-medium text-sm px-4 py-2.5 
                                rounded-full focus:outline-none focus:ring-0 lg:mt-0 mt-2' onClick={() => setIsOpen(true)}>
                                    Login/Register
                                </button>
                            </li>
                            <li>
                                <Link
                                    to="/rental"
                                    className="block p-2 hover:bg-gray-100 rounded lg:hidden block"
                                >
                                    Bookings
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/user"
                                    className="block p-2 hover:bg-gray-100 rounded lg:hidden block"
                                >
                                    My Profile
                                </Link>
                            </li>

                        </ul>

                    </div>

                    <div className='relative hidden lg:block' >
                        <button
                            onClick={() => setOpen(!open)}
                            className="p-2 rounded-full hover:bg-gray-100 border border-gray-200"
                        >
                            <BsThreeDots size={20} />
                        </button>

                        {/* 🔹 Dropdown */}
                        {open && (
                            <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-lg z-50">
                                <ul className="p-2 text-sm">

                                    <li>
                                        <Link
                                            to="/rental"
                                            className="block p-2 hover:bg-gray-100 rounded"
                                        >
                                            Bookings
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/user"
                                            className="block p-2 hover:bg-gray-100 rounded"
                                        >
                                            My Profile
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        )}
                    </div>


                </div>
            </nav>

            <Signin isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default Navbar