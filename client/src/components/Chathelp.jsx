import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { setView } from '../redux/chatbot/chatbotSlice'
import { useDispatch } from 'react-redux'

function Chathelp() {
  const dispatch = useDispatch();
  return (
    <div className='h-full p-5 bg-[#14161a]'>
      <button onClick={() => dispatch(setView("home"))} className="text-gray-400 mb-3 py-2 px-2">
        <IoIosArrowBack />
      </button>

      <h2 className="text-xl font-semibold mb-2">Chat Help</h2>
      <p>This chatbot helps you find answers quickly and easily.</p>
    </div>
  )
}

export default Chathelp