import React from 'react';
import Reusabletitle from './Reusabletitle';
import { FileInput, TextInput } from 'flowbite-react';
import Imageuploader from './Imageuploader';
import Dashprice from './Dashprice';
import { useDispatch, useSelector } from 'react-redux';
import { openChat } from '../redux/chatbot/chatbotSlice';
import Reusablebtn from './Reusablebtn';

function Dashitemdesc() {
    const dispatch = useDispatch();

    return (
        <div className=''>
            <div className='md:ps-5 px-1'>
                <Reusabletitle number={1} title="Select category" size='text-[18px]' />
                <div className='md:ps-12 py-3 md:pe-8'>
                    <div className='border border-gray-300 rounded-md md:px-3 px-1 py-1 flex items-center 
                    justify-between shadow-[0_4px_15px_rgba(0,0,0,0.15)]'>
                        <span className='text-[14px] '>
                            Select category
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"></path></svg>
                        </span>
                    </div>


                </div>
            </div>

            <div className='md:ps-5 px-1'>
                <Reusabletitle number={2} title="Describe your item" size='text-[18px]' />
                <div className='md:ps-12 py-3 md:pe-8'>
                    <div className='rounded-md md:px-3 px-1 py-1 flex flex-col
                    justify-between'>
                        <span className='text-[14px] font-semibold'>
                            Title
                        </span>
                        <input
                            type="text"
                            required
                            className='!bg-transparent rounded-md w-full border border-gray-300'
                        />
                        <span className='text-[14px] font-semibold'>
                            Describe the item in as much detail as possible
                        </span>

                        <textarea
                            rows={5}
                            className='!bg-transparent rounded-md w-full border border-gray-300'
                        />




                    </div>


                </div>
            </div>

            <div className='md:ps-5 px-1'>
                <Reusabletitle number={3} title="Pictures" size='text-[18px]' />
                <div className='md:ps-12 py-3 md:pe-8'>
                    <div className='rounded-md md:px-3 px-1 py-1 flex flex-col
                    justify-between'>
                        <span className='text-[14px] font-normal'>
                            Upload pitures in landscape format (4:3)
                        </span>
                        <span className='text-[14px] font-normal pb-4'>
                            In order for the pictures to look good, they should be landscaped. Portrait picture will not be fully displayed.
                        </span>
                        <Imageuploader />
                    </div>


                </div>
            </div>

            <div className='md:ps-5 px-1'>
                <Reusabletitle number={4} title="Price" size='text-[18px]' />
                <div className='md:ps-12 py-3 md:pe-8'>
                    <div className='rounded-md md:px-3 px-1 py-1 flex flex-col
                    justify-between'>
                        <span className='text-[14px] font-normal pb-4'>
                            You can offer lower prices for longer bookings. The rental price is calculated according to the lowest possible price level.
                        </span>
                        <Dashprice />
                        <span className='text-[12px] md:text-[14px] py-3'>
                            Price suggestions for Air blaster
                        </span>
                        <span className='text-[12px] md:text-[14px]'>
                            Price per day: £20
                        </span>
                        <span className='text-[12px] md:text-[14px]'>
                            Price for 3 days: £20
                        </span>
                        <span className='text-[12px] md:text-[14px]'>
                            Price for 7 days: £20
                        </span>
                    </div>


                </div>
            </div>
            <div className='md:ps-5 px-1'>
                <Reusabletitle number={5} title="Where can the items be handed over? " size="text-[16px]" />
                <div className='md:ps-12 py-3 md:pe-8'>
                    <div className='rounded-md md:px-3 px-1 py-1 flex flex-col
                    justify-between'>
                        <span className='text-[14px] font-normal'>
                            Your exact address will not be shown before the rentals is paid and verified.
                            <span onClick={() => dispatch(openChat("help"))} to="/help"
                                className='text-blue-500 hover:underline cursor-pointer'>
                                Read more</span>
                        </span>

                    </div>

                    <Reusablebtn
                        text={'+ Add a Location'}
                        sm={'text-[16px]'}
                        lg={'text-[20px]'}
                        rounded={'rounded-md'}
                    />


                </div>
            </div>

            <div className='md:ps-5 px-1'>
                <Reusabletitle number={6} title="Cancellation Terms" size="text-[18px]" />

                <div className='md:ps-12 py-3 md:pe-8'>

                    <div className='flex md:flex-row flex-col items-center justify-between'>
                        <div className='md:w-[32%] w-[100%]'>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="option" // make sure all radios in a group share the same name
                                    defaultChecked
                                    className="w-4 h-4 text-cyan-500 accent-cyan-500 border-gray-300 focus:ring-2 focus:ring-cyan-300 cursor-pointer"
                                />
                                <span className="text-gray-900 text-[14px] md:text-[16px]">Flexible</span>
                            </label>
                        </div>
                        <div className='md:w-[32%] w-[100%]'>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="option" // make sure all radios in a group share the same name
                                    className="w-4 h-4 text-cyan-500 accent-cyan-500 border-gray-300 focus:ring-2 focus:ring-cyan-300 cursor-pointer"
                                />
                                <span className="text-gray-900 text-[14px] md:text-[16px]">Medium</span>
                            </label>
                        </div>
                        <div className='md:w-[32%] w-[100%]'>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="option" // make sure all radios in a group share the same name
                                    className="w-4 h-4 text-cyan-500 accent-cyan-500 border-gray-300 focus:ring-2 focus:ring-cyan-300 cursor-pointer"
                                />
                                <span className="text-gray-900 text-[14px] md:text-[16px]">Strict</span>
                            </label>
                        </div>

                    </div>

                    <div className='rounded-md md:px-3 px-1 py-1 flex flex-col
                    justify-between'>
                        <span className='text-[14px] font-normal'>
                            Flexible - If cancelled 2 days before the rental period, 100% of the rental
                            amount will be refunded. If cancelled the day before the rental period, 50%
                            of the rental amount will be refunded.
                        </span>
                        <span onClick={() => dispatch(openChat("help"))} to="/help"
                            className='text-cyan-500 hover:text-cyan-300 font-bold text-[14px] 
                                md:text-[18px] cursor-pointer'>
                            Read more about the cancellation policy
                        </span>

                    </div>


                </div>
            </div>

            <div className='md:ps-5 px-1'>
                <Reusabletitle number={7} title="Value of item" size="text-[18px]" />
                <div className='md:ps-12 py-3 md:pe-8'>
                    <div className='rounded-md md:px-3 px-1 py-1 flex flex-col
                    justify-between'>
                        <span className='text-[14px] font-normal'>
                            If you would sell it today on e.g. Facebook Marketplace - what would it be worth?

                        </span>
                        <span onClick={() => dispatch(openChat("help"))} to="/help"
                            className='text-cyan-500 hover:text-cyan-300 font-bold cursor-pointer'>
                            Read more about item valuation


                        </span>

                    </div>
                </div>
            </div>

            <div className='md:ps-5 px-1'>
                <div className='md:ps-12 py-3 md:pe-8'>
                    <button className={`text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                            hover:bg-gradient-to-bl font-medium text-[16px] sm:text-[20px]  md:px-5 md:py-2
                            px-3 py-1.5 rounded-md focus:outline-none focus:ring-0 cursor-pointer`}>
                        Publish Listing !

                    </button>
                </div>
            </div>




        </div>
    )
}

export default Dashitemdesc;