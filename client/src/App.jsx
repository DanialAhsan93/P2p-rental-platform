import { useState } from 'react';
import './App.css'
import Chatbot from './components/Chatbot'

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [view, setView] = useState("home");

  const handleClick = (value) => {
    setView(value);
    setAnchorEl(true);
  }
  return (
    <>
      <div
        onClick={(e) => handleClick("how")}
        className="bg-white text-black p-4 rounded-xl cursor-pointer shadow hover:scale-105 transition"
      >
        <h3 className="font-semibold">How it works</h3>
      </div>
      <Chatbot view={view} setView={setView} anchorEl={anchorEl} setAnchorEl={setAnchorEl}  />
    </>
  )
}

export default App
