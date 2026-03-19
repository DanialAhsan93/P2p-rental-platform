import React from 'react';
import { useState } from 'react';
import Chatbot from '../components/Chatbot';

function Home() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [view, setView] = useState("home");

  const handleClick = (value) => {
    setView(value);
    setAnchorEl(true);
  }
  return (
    <div>
      Home
      <div
        onClick={(e) => handleClick("how")}
        className="bg-white text-black p-4 rounded-xl cursor-pointer shadow"
      >
        <h3 className="font-semibold">How it works</h3>
      </div>
      <Chatbot view={view} setView={setView} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </div>
  )
}

export default Home