import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";
import Email from "./Email";
import Profile from "./Profile";



function Signin({ isOpen, setIsOpen }) {
    const [view, setView] = useState("main");
    if (!isOpen) return null;
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
                <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black/50 ">
                    <div className="bg-white p-6 rounded shadow-lg max-w-md w-full max-h-[60vh] md:max-h-[80vh] overflow-y-auto">

                        {/* Header */}
                        <div className="flex justify-between items-center pb-3">
                            <h3 className="text-xl font-medium">
                                {view === "main" || view === "email" ? "Login or Register" : "Register"}
                            </h3>
                            <button onClick={() => {
                                setIsOpen(false);
                                setView("main"); // reset
                            }}
                                className="text-gray-500">
                                <IoCloseSharp className="text-[22px]" />
                            </button>
                        </div>

                        {/* Body */}

                        {view === "main" && (
                            <>
                                <div className="py-2 space-y-1">
                                    <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                                 hover:bg-gradient-to-bl font-medium text-xl px-4 py-3 
                                rounded-md focus:outline-none focus:ring-0 w-full cursor-pointer"

                                        onClick={() => setView("email")}

                                    >

                                        Sign in with Email
                                    </button>
                                </div>

                                <div className="py-2 space-y-3">
                                    <button className="flex  justify-center items-center border border-gray-300 font-medium text-xl px-4 py-3 
                                rounded-md focus:outline-none focus:ring-0 w-full cursor-pointer">
                                        <FcGoogle className="me-2 text-[24px]" /> Sign in with Google
                                    </button>
                                </div>

                                <div className="py-2 space-y-3">
                                    <button className="flex  justify-center items-center border border-gray-300 font-medium text-xl px-4 py-3 
                                rounded-md focus:outline-none focus:ring-0 w-full bg-gray-900 text-white cursor-pointer">
                                        <AiOutlineApple className="me-2 text-[24px] text-white" /> Continue with Apple
                                    </button>
                                </div>

                            </>
                        )}
                        {view === "email" && (
                            <Email goBack={() => setView("main")} setView={setView} />
                        )}

                        {view === "profile" && (
                           <Profile goBack={() => setView("main")} />
                        )}




                    </div>
                </div>
            )}


        </div>



    );
}

export default Signin;