import React from 'react';
import { feedbackdata } from '../countrydata';
import { IoIosHeart } from "react-icons/io";


function Feedbackcarousel() {
    console.log(typeof feedbackdata)
    return (
        <>
            {
                feedbackdata?.length > 0 && (
                    <>
                        <div className='bg-[#f2f2f2] pb-5'>
                            <div className='flex justify-center lg:text-2xl md:text-xl text-lg 
                font-bold text-gray-800 md:pt-6 md:pb-3 pt-4 pb-2' >
                                <h1>
                                    Some love from our users
                                </h1>
                            </div>
                            <div className="overflow-x-auto no-scrollbar" style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none"
                            }}>

                                <div className="flex gap-4 w-max ps-4" style={{ WebkitOverflowScrolling: "touch" }}>
                                    {feedbackdata.map((item, index) => (
                                        <div key={index} className="cursor-pointer md:p-5 p-2 my-4 
                        md:w-[400px] w-[260px] bg-[#ffffff] rounded-2xl">
                                            <div className="">
                                                <div className='flex items-center justify-between'>
                                                    <div className='text-[12px] text-[#9090b5]'>{item.time}</div>
                                                    <div className='flex'>
                                                        {[...Array(item.rating)].map((_, i) => (
                                                            <IoIosHeart
                                                                key={i}
                                                                className="md:text-[16px] text-[14px] text-[#ff4262]"
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                <h3 className="pt-2">{item.comment.length > 80
                                                    ? item.comment.slice(0, 80) + "..."
                                                    : item.comment}</h3>
                                                <p className="text-cyan-600 text-[14px] font-semibold">
                                                    {item.name}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </>
                )
            }

        </>



    )
}

export default Feedbackcarousel
