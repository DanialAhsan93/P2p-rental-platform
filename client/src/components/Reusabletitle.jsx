import React from 'react'

function Reusabletitle({number, title, size}) {
  return (
    <div className='flex items-center space-x-4'>
      <span className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-gray-200 
      rounded-full flex items-center justify-center text-lg lg:text-2xl font-bold text-gray-600'>
        {number}
        </span>
      <span className={`${size} lg:text-[22px] font-semibold`}>{title}</span>
    </div>
  )
}

export default Reusabletitle