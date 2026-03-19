import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";



function Signin({ isOpen, setIsOpen }) {
 if(!isOpen) return null;
    return (
        <div>
            {/* Login Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="text-white bg-brand px-4 py-2 rounded"
            >
                Login
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black/50">
                    <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">

                        {/* Header */}
                        <div className="flex justify-between items-center pb-3">
                            <h3 className="text-xl font-medium">Login or Register</h3>
                            <button onClick={() => setIsOpen(false)} className="text-gray-500">
                                <IoCloseSharp className="text-[22px]"/>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="py-2 space-y-1">
                            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                                 hover:bg-gradient-to-bl font-medium text-xl px-4 py-3 
                                rounded-md focus:outline-none focus:ring-0 w-full">
                                Sign in with Email
                            </button>
                        </div>

                        <div className="py-2 space-y-3">
                            <button className="flex  justify-center items-center border border-gray-300 font-medium text-xl px-4 py-3 
                                rounded-md focus:outline-none focus:ring-0 w-full">
                                    <FcGoogle className="me-2 text-[24px]"/> Sign in with Google
                            </button>
                        </div>

                        <div className="py-2 space-y-3">
                            <button className="flex  justify-center items-center border border-gray-300 font-medium text-xl px-4 py-3 
                                rounded-md focus:outline-none focus:ring-0 w-full bg-gray-900 text-white">
                                    <AiOutlineApple  className="me-2 text-[24px] text-white"/> Continue with Apple
                            </button>
                        </div>

                       

                    </div>
                </div>
            )}
        </div>
    );
}

export default Signin;