import React from 'react'

function Dashprice() {
    return (
        <div className='flex md:flex-row flex-col items-center justify-between'>
            <div className='md:w-[32%] w-[100%]'>
                <div className='pb-2'>
                    <span className='md:text-[14px] text-[12px] font-semibold'>
                        Price for 1 day (required)
                    </span>
                </div>
                <input
                    type="text"
                    placeholder='20'
                    className='w-full border border-gray-300 rounded-md px-2 py-1 shadow-[0_4px_15px_rgba(0,0,0,0.08)]'
                />
            </div>
            <div className='md:w-[32%] w-[100%]'>
                <div className='pb-2'>
                    <span className='md:text-[14px] text-[12px] font-semibold'>
                        Price for 3 days 
                    </span>
                </div>
                <input
                    type="text"
                    placeholder='20'
                    className='w-full border border-gray-300 rounded-md px-2 py-1 shadow-[0_4px_15px_rgba(0,0,0,0.08)]'
                />
            </div>
            <div className='md:w-[32%] w-[100%]'>
                <div className='pb-2'>
                    <span className='md:text-[14px] text-[12px] font-semibold'>
                        Price for 7 days
                    </span>
                </div>
                <input
                    type="text"
                    placeholder='20'
                    className='w-full border border-gray-300 rounded-md px-2 py-1 shadow-[0_4px_15px_rgba(0,0,0,0.08)]'
                />
            </div>

        </div>
    )
}

export default Dashprice