import React, { useRef, useState } from 'react';
import { FiChevronUp, FiMessageCircle } from "react-icons/fi";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";


export default function Chatbot({ view, setView, anchorEl, setAnchorEl }) {
    const open = anchorEl;
    const buttonRef = useRef(null);

    const toggle = (e) => {
        setAnchorEl(open ? null : e.currentTarget);
    };
    return (
        <div>
            <button
                // aria-describedby={id}
                type="button"
                ref={buttonRef}
                onClick={toggle}
                className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full flex items-center justify-center"
            >
                <span className="relative flex items-center justify-center">

                    {/* Chevron icon */}
                    <FiChevronUp
                        className={`text-2xl transition-all duration-500 ${open ? "rotate-180 opacity-100" : "rotate-0 opacity-0"
                            }`}
                    />

                    {/* Message icon */}
                    <FiMessageCircle
                        className={`absolute text-2xl transition-all duration-300 ${open ? "opacity-0 scale-75" : "opacity-100 scale-100"
                            }`}
                    />

                </span>
            </button>
            <Popper
                // id={id}
                open={open}
                anchorEl={buttonRef.current}
                placement="top-start"
                transition
                disablePortal
                modifiers={[
                    {
                        name: "offset",
                        options: {
                            offset: [0, 10],
                        },
                    },
                ]}
            >
                {({ TransitionProps }) => (
                    <Grow {...TransitionProps} timeout={300}>
                        <Box
                            sx={{
                                border: 1,
                                p: 2,
                                // bgcolor: "#14161a",
                                // background: "linear-gradient(to bottom, white 50%, #14161a 50%)",
                                color: "white",
                                width: 380,
                                height: 520,
                                overflowY: "auto",
                                transformOrigin: "bottom left",
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                                borderRadius: "30px",
                                padding: "0px",
                            }}
                        >
                            {view === "home" && (
                                <>
                                    <div className='h-full p-5 bg-[linear-gradient(to_bottom,white_50%,#14161a_50%)]'>
                                        <div className='flex justify-end pt-4 pe-4 pb-2'>
                                            <button onClick={() => setAnchorEl(null)}>
                                                <IoCloseSharp className='text-gray-900' />
                                            </button>
                                        </div>
                                        <div className='text-gray-700 mt-4 pt-9 ps-5'>
                                            <h1 className='text-[30px] '>Hi, there!</h1>
                                            <h1 className='text-[30px]'>How can we help you?</h1>
                                        </div>
                                        <div>
                                            The content of the Popper.

                                        </div>
                                    </div>


                                </>
                            )}


                            {view === "how" && (
                                <>
                                    <div className='h-full p-5 bg-[#14161a]'>
                                        <button onClick={() => setView("home")} className="text-gray-400 mb-3 py-2 px-2">
                                            <IoIosArrowBack />
                                        </button>

                                        <h2 className="text-xl font-semibold mb-2">How it works</h2>
                                        <p>This chatbot helps you find answers quickly and easily.</p>
                                    </div>

                                </>
                            )}

                        </Box>

                    </Grow>
                )}
            </Popper>
        </div>
    )
}
