import React, { useState } from 'react'
import { laptop } from '../index'
import { FaRegUser } from "react-icons/fa6";
import Reusablebtn from '../components/Reusablebtn';

function Useredit() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };
  return (
    <div className='max-w-[2200px] w-[93%] mx-auto min-h-screen lg:p-4 border border-1'>
      <h1 className='text-[30px] lg:text-[40px] font-bold md:py-4 py-2'>
        Edit profile
      </h1>
      <div className='lg:flex lg:flex-row lg:justify-between'>

        <div className='w-[100%] lg:w-[65%] border border-gray-300 
          md:py-4 py-2 shadow-[0_4px_15px_rgba(0,0,0,0.09)] rounded-2xl md:ps-5 mb-2 border border-1'>
          {preview ? (
            <div className='flex flex-row border border-1 items-center md:gap-4'>

              <div className='flex md:w-[80px] md:h-[80px] w-[50px] h-[50px] items-center justify-center'>
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-full border"
                />

              </div>

              <div className='ps-4'>
                <h1 className='md:text-[30px] text-[20px] font-semibold'>
                  User Name
                </h1>

              </div>

            </div>

          ) :
            (
              <div className='flex flex-row border border-1 items-center md:gap-4'>
                <div className='flex md:w-[80px] md:h-[80px] w-[50px] h-[50px] items-center justify-center'>
                  <label className="cursor-pointer w-full h-full border-1 border-gray-500
            rounded-full hover:bg-gray-100 transition flex justify-center items-center">
                    <span>
                      <FaRegUser className='md:text-[35px] text-[22px]' />
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>

                </div>
                <div className='ps-4'>
                  <h1 className='md:text-[30px] text-[20px] font-semibold'>
                    User Name
                  </h1>

                </div>
              </div>

            )
          }

          <div className='flex flex-col md:flex-row items-center justify-center md:pt-8 pt-0'>

            <div className='md:w-[65%] w-[100%] border border-1 md:py-0 py-1'>
              <h3 className='font-semibold text-[14px] md:text-[16px] md:py-2'>
                Email
              </h3>
              <p className='text-[14px] md:text-[16px] pb-2'>
                user@example.com
              </p>

            </div>

            <div className='md:w-[35%] w-[100%] border border-1 gap-2 flex md:justify-end md:pe-8'>

              <Reusablebtn
                text={'Change'}
                sm={'text-[14px]'}
                lg={'text-[16px]'}
                rounded='rounded-xl'
              />

              <Reusablebtn
                text={'verify'}
                sm={'text-[14px]'}
                lg={'text-[16px]'}
                rounded='rounded-xl'
              />

            </div>



          </div>

          <div className='flex flex-col md:flex-row items-center justify-center md:pt-8 pt-0'>
            <div className='md:w-[65%] w-[100%] border border-1 md:py-0 py-1'>
              <h3 className='font-semibold text-[14px] md:text-[16px] md:py-2'>
                Phone number
              </h3>
              <p className='text-[14px] md:text-[16px] pb-2'>
                +923353173799
              </p>
            </div>

            <div className='md:w-[35%] w-[100%] border border-1 gap-2 flex md:justify-end md:pe-8'>

              <Reusablebtn
                text={'Change'}
                sm={'text-[14px]'}
                lg={'text-[16px]'}
                rounded='rounded-xl'
              />

            </div>
          </div>




        </div>

        <div className='hidden lg:block lg:w-[30%] border border-1'>
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
  )
}

export default Useredit