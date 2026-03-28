import React, { useEffect, useRef, useState } from 'react';
import { FiChevronUp, FiMessageCircle } from "react-icons/fi";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowBack, IoMdHelpCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { closeChat, openChat, setView } from '../redux/chatbot/chatbotSlice';
import Chathow from './Chathow';
import Chathome from './Chathome';
import Chatguarantee from './Chatguarantee';
import Chatfaqs from './Chatfaqs';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChatMessage from './ChatMessage';
import Chathelp from './Chathelp';
import { MdOutlineMessage } from 'react-icons/md';
import { RiHomeSmileFill } from "react-icons/ri";


export default function Chatbot() {
    const dispatch = useDispatch();
    const { isOpen, view } = useSelector((state) => state.chatbot);
    const [value, setValue] = useState(view);
    // console.log("view", view);

    useEffect(() => {
        dispatch(closeChat());
    }, []);

    useEffect(() => {
        setValue(view);
    }, [view]);

    const buttonRef = useRef(null);
    const isReady = isOpen && Boolean(buttonRef.current);

    const toggle = () => {
        if (isOpen) {
            dispatch(closeChat());
        } else {
            dispatch(openChat(view));
        }
    };



    return (
        <div>
            <button
                // aria-describedby={id}
                type="button"
                ref={buttonRef}
                onClick={toggle}
                className="fixed bottom-6 right-6 bg-cyan-600 text-white p-4 rounded-full flex items-center justify-center"
            >
                <span className="relative flex items-center justify-center">

                    {/* Chevron icon */}
                    <FiChevronUp
                        className={`text-2xl transition-all duration-500 ${isReady ? "rotate-180 opacity-100" : "rotate-0 opacity-0"
                            }`}
                    />

                    {/* Message icon */}
                    <FiMessageCircle
                        className={`absolute text-2xl transition-all duration-300 ${isReady ? "opacity-0 scale-75" : "opacity-100 scale-100"
                            }`}
                    />

                </span>
            </button>
            <Popper
                // id={id}
                open={isOpen && Boolean(buttonRef.current)}
                anchorEl={buttonRef.current}
                placement="top-end"
                transition
                disablePortal
                modifiers={[
                    {
                        name: "offset",
                        options: {
                            offset: [0, 12],
                        },
                    },
                ]}
            >
                {({ TransitionProps }) => (
                    <Grow {...TransitionProps} timeout={300}>
                        <Box
                            sx={{
                                position: "fixed",
                                bottom: 0,
                                right: 0,
                                width: {
                                    xs: "80vw",
                                    sm: "50vw",
                                    md: view === "help" ? "34vw" : "28vw"
                                },
                                height: {
                                    xs: "80dvh",
                                    sm: "85dvh",
                                    md: "80vh"
                                },
                                bgcolor: "#14161a",
                                color: "white",
                                zIndex: 1300,
                                borderRadius: "30px",
                                boxShadow: "0 -4px 20px rgba(0,0,0,0.2)",
                                overflowY: "auto",
                                display: "flex",          // ✅ important
                                flexDirection: "column"
                            }}
                        >
                            <Box sx={{
                                flex: 1,
                                overflowY: "auto",
                            }}>
                                {view === "home" && <Chathome />}
                                {view === "how" && <Chathow />}
                                {view === "guarantee" && <Chatguarantee />}
                                {view === "faqs" && <Chatfaqs />}
                                {view === "message" && <ChatMessage />}
                                {view === "help" && <Chathelp />}
                            </Box>

                            {(view === "home" || view === "message" || view === "help") && (
                                <BottomNavigation
                                    showLabels
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                        dispatch(setView(newValue));

                                        // if (newValue === 0) dispatch(setView("home"));
                                        // if (newValue === 1) dispatch(setView("message"));
                                        // if (newValue === 2) dispatch(setView("help"));
                                    }}
                                    sx={{
                                        borderTop: "1px solid #333",
                                        bgcolor: "#14161a",
                                        width: "100%",
                                        flexShrink: 0,
                                        "& .MuiBottomNavigationAction-root": {
                                            color: "#9ca3af", // gray-400
                                        },
                                        "& .Mui-selected": {
                                            color: "#22d3ee", // blue-500 (or whatever you want)
                                        },

                                    }}
                                >
                                    <BottomNavigationAction value={"home"} label="Home"
                                        icon={
                                            <RiHomeSmileFill style={{
                                                color: value === "home" ? "#22d3ee" : "#9ca3af", // active or inactive
                                            }} />}
                                    />
                                    <BottomNavigationAction value={"message"} label="message"
                                        icon={
                                            <MdOutlineMessage style={{
                                                color: value === "message" ? "#22d3ee" : "#9ca3af", // active or inactive
                                            }} />}
                                    />
                                    <BottomNavigationAction value={"help"} label="Help"
                                        icon={
                                            <IoMdHelpCircleOutline style={{
                                                color: value === "help" ? "#22d3ee" : "#9ca3af", // active or inactive
                                            }} />}
                                    />
                                </BottomNavigation>
                            )}

                        </Box>

                    </Grow>

                )}

            </Popper>

        </div>
    )
}
