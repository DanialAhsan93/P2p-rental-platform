import React, { useState } from 'react'
import Reusablebtn from '../components/Reusablebtn'
import { FaRegUser } from 'react-icons/fa6'
import { laptop, renterlogo, test5 } from '../index';
import { MdOutlineCheckCircle } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { GrMapLocation } from "react-icons/gr";
import { FaCircleRadiation } from "react-icons/fa6";
import Item1stcards from '../components/Item1stcards';
import Daterangepicker from '../components/Daterangepicker';
import Itemdesc from '../components/Itemdesc';


function Item() {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setImage(file);
        setPreview(URL.createObjectURL(file));
    };
    return (
        <div className='max-w-[2200px] w-[93%] mx-auto min-h-screen lg:p-4'>


            <div className='lg:flex lg:flex-row flex-col lg:justify-between'>

                <div className='w-[100%] lg:w-[60%]  md:py-4 py-2 md:ps-5 mb-2 '>
                    <Item1stcards />
                    <h1 className='md:text-[40px] sm:text-[28px] text-[22px] font-semibold lg:hidden'>
                        Smoke ninja pro hazer kit | portable handheld smoke machine, mini fogger & atmospheric
                        haze generator (like “micro fogger 2 pro”)
                    </h1>


                    <div className='w-[100%] border border-gray-300 flex md:flex-row flex-col
                items-center justify-center md:py-4 py-2 shadow-[0_4px_15px_rgba(0,0,0,0.09)]
                 rounded-2xl md:ps-5 mb-2'>
                        <div className='md:w-[60%] w-[100%]'>
                            {preview ? (
                                <div className='flex flex-row items-center md:gap-4'>

                                    <div className='flex md:w-[80px] md:h-[80px] w-[50px] h-[50px] items-center justify-center'>
                                        <img
                                            src={preview}
                                            alt="Preview"
                                            className="w-full h-full object-cover rounded-full border"
                                        />

                                    </div>

                                    <div className='ps-4'>
                                        <h1 className='md:text-[24px] text-[18px] font-semibold'>
                                            Owned by db cinema rental
                                        </h1>

                                    </div>

                                </div>

                            ) :
                                (
                                    <div className='flex flex-row items-center md:gap-4'>
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
                                            <h1 className='md:text-[24px] text-[18px] font-semibold'>
                                                User Name
                                            </h1>

                                        </div>
                                    </div>

                                )
                            }

                            <div className='flex flex-col  md:my-5 my-2 border border-1'>
                                <div className='flex items-center gap-2'>
                                    <span>
                                        <MdOutlineCheckCircle className='text-green-500 text-[18px]' />
                                    </span>
                                    <p>
                                        Identified
                                    </p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span>
                                        <CiClock2 className='text-gray-900 text-[18px]' />
                                    </span>
                                    <p>
                                        Usually responds the same day
                                    </p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span>
                                        <IoChatboxEllipsesOutline className='text-gray-900 text-[18px]' />
                                    </span>
                                    <p>
                                        73% response rate
                                    </p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span>
                                        <GrMapLocation className='text-gray-900 text-[18px]' />
                                    </span>
                                    <p>
                                        Whitechapel 2.5 mi
                                    </p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span>
                                        <FaCircleRadiation className='text-gray-900 text-[18px]' />
                                    </span>
                                    <p>
                                        Damages are covered without any excess. Read more
                                    </p>
                                </div>

                            </div>

                            <button className='text-[14px] md:text-[16px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                                hover:bg-gradient-to-bl font-medium py-2 px-2 rounded-xl cursor-pointer'>
                                Send Message
                            </button>
                        </div>

                        <div className='md:w-[35%] w-[100%] border border-1'>
                            right
                        </div>
                    </div>

                    <Itemdesc />



                </div>

                <div className='w-[100%] lg:w-[35%] '>

                    <h1 className='md:text-[40px] sm:text-[28px] text-[22px] font-semibold lg:block hidden'>
                        Smoke ninja pro hazer kit | portable handheld smoke machine, mini fogger & atmospheric
                        haze generator (like “micro fogger 2 pro”)
                    </h1>
                    <div className=' border border-gray-300 md:overflow-none overflow-x-auto
                    md:py-4 py-2 shadow-[0_4px_15px_rgba(0,0,0,0.09)]
                 rounded-2xl md:ps-5 mb-2'
                    >
                        <Daterangepicker />

                    </div>
                    <div>
                        
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Item