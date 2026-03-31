import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { countryData } from '../countrydata'

function Categorymodal({isOpen , setIsOpen}) {
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
                    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full  bg-black/50">
                        <div className="bg-white p-6 rounded shadow-lg max-w-md w-full md:h-[70vh] h-[60vh] overflow-y-auto">
    
                            {/* Header */}
                            <div className="flex justify-between items-center pb-3">
                                <h3 className="text-xl font-medium">Switch Country</h3>
                                <button onClick={() => setIsOpen(false)} className="text-gray-500">
                                    <IoCloseSharp className="text-[22px]" />
                                </button>
                            </div>
    
                            {/* Body */}
                            {countryData.map((item) => {
                                return(
                                    <div key={item.id}>
                                        <div className="py-2 space-y-1">
                                            <button className="font-medium text-xl px-4 py-3 
                                                rounded-md focus:outline-none focus:ring-0 w-full flex 
                                                items-center gap-2 justify-center border border-cyan-500">
                                                <div className='w-[25px] h-[15px]'>
                                                    <img src={item.flag} alt={item.name} className='w-full h-full' />
                                                </div>
                                                {item.name}
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                            
    
    
    
                        </div>
                    </div>
                )}
            </div>
  )
}

export default Categorymodal