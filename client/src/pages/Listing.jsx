import React from 'react'
import Dashitemdesc from '../components/Dashitemdesc'
import { laptop } from '..'
import { useSelector } from 'react-redux'
import Notification from '../components/Notification';

function Listing() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  return (
    <>
      <div className='max-w-[2200px] w-[93%] mx-auto min-h-screen lg:p-4'>

        <h1 className='text-[30px] lg:text-[40px] font-bold md:py-4 py-2'>
          List your item
        </h1>

        <div className='lg:flex lg:flex-row lg:justify-between'>

          {!currentUser && <Notification />}

          <div className='w-[100%] lg:w-[65%] border border-gray-300 
          md:py-4 py-2 shadow-[0_4px_15px_rgba(0,0,0,0.09)] rounded-2xl md:ps-5 mb-2 ' >
            <Dashitemdesc />
          </div>


          <div className='hidden lg:block lg:w-[30%]'>

            <div className='flex flex-col py-6 items-center justify-center
          border border-gray-300 shadow-[0_4px_15px_rgba(0,0,0,0.09)] rounded-2xl'>

              <div className='flex justify-center items-center w-[140px] h-[140px] rounded-full bg-gray-200'>
                <img src={laptop} alt="image" className='w-full h-full rounded-full' />
              </div>
              <div className='px-7'>
                <h1 className='text-[22px] font-bold text-center'>
                  Can your item be dropped off in several places?
                </h1>
              </div>
              <div className='px-7 py-4'>
                <p className='text-[14px] text-center'>
                  You might be able to bring the item to work and meet up there? Add more addresses to
                  increase the chance of getting your item rented out              </p>
              </div>
            </div>

          </div>

        </div>


      </div>

    </>
  )
}

export default Listing