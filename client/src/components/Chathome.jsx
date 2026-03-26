import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { closeChat } from '../redux/chatbot/chatbotSlice'

function Chathome() {
    const dispatch = useDispatch()
    return (
        <div className='h-full p-5 bg-[linear-gradient(to_bottom,white_50%,#14161a_50%)]'>
            <div className='flex justify-end pt-4 pe-4 pb-2'>
                <button onClick={() => dispatch(closeChat())}>
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

    )
}

export default Chathome