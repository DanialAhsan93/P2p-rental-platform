import React from 'react'
import Reusablebtn from './Reusablebtn'
import { useNavigate } from 'react-router-dom'

function Notification() {
    const navigate = useNavigate()
    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black/50">
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-[90%]">
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='md:text-[28px] text-[20px] text-center font-semibold'>
                        You must log in to see this content
                    </h2>
                    <p className='md:text-[16px] text-[14px] text-center text-gray-500'>
                        You must be logged in to create an ad
                    </p>
                
                    <Reusablebtn
                        onClick={() => navigate('/signin')}
                        text="Login/Signup"
                        sm={'text-[14px]'}
                        lg={'text-[16px]'}
                        rounded={'rounded-md'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Notification