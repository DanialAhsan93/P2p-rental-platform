import React, { useState } from 'react';
import { categorybtn, film } from '../countrydata';

function Homeheroleft() {
    const [isCategory, setIsCategory] = useState('allcategory')
    return (
        <div>
            <h1 className='text-[28px] font-semibold'>
                Or browse our most popular categories...
            </h1>


            <div className='flex justify-center'>
                <div className='w-[290px]'>
                    <div className='flex gap-3 justify-center rounded-full bg-gray-100 
                     cursor-pointer'>
                        <span
                            onClick={() => setIsCategory('allcategory')}
                            className={`${isCategory === 'allcategory' ? 'text-[14px] py-3 px-4 rounded-full bg-cyan-500 text-white' : 'text-[14px] py-3 px-4 rounded-full bg-gray-100 text-gray-500'}`}>
                            All Categories
                        </span>
                        <span onClick={() => setIsCategory('film')} className={`${isCategory === 'film' ? 'text-[14px] py-3 px-4 rounded-full bg-cyan-500 text-white' : 'text-[14px] py-3 px-4 rounded-full bg-gray-100 text-gray-500'}`}>
                            Film & Photography
                        </span>
                    </div>
                </div>

            </div>


            {isCategory === 'allcategory' && (
                <div className='flex flex-wrap pt-4 gap-4'>
                    {
                        categorybtn.map((item) => {
                            return (
                                <button key={item.id} className='text-cyan-500 bg-white border border-cyan-500 rounded-full px-4 py-1 
                                text-[14px] hover:bg-cyan-500 hover:text-white transition-colors duration-200
                                cursor-pointer'>
                                    {item.name}
                                </button>
                            )
                        })
                    }


                </div>
            )}

            {isCategory === 'film' && (
                <div className='flex flex-wrap pt-4 gap-4'>
                    {
                        film.map((item) => {
                            return (
                                <button key={item.id} className='text-cyan-500 bg-white border border-cyan-500 rounded-full px-4 py-1 
                                text-[14px] hover:bg-cyan-500 hover:text-white transition-colors duration-200
                                cursor-pointer'>
                                    {item.name}
                                </button>
                            )
                        })
                    }
                </div>
            )}

            <button className='text-cyan-500 bg-white border border-cyan-500 rounded-2xl px-5 py-3 
                                text-[14px] hover:bg-cyan-500 hover:text-white transition-colors duration-200
                                cursor-pointer mt-4'>
                Go to Category Overview
            </button>


        </div>
    )
}

export default Homeheroleft