import React from 'react'
import { guarantee } from '../countrydata';

function Homefifth() {
    return (
        <div className='py-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-0 px-2 lg:max-w-5xl lg:mx-auto'>
            {
                guarantee.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div key={item.id} className='w-full p-5 rounded-xl flex flex-col items-center'>
                            <div className='mb-3 lg:w-[100px] lg:h-[100px] w-[75px] h-[75px] flex items-center justify-center
                             bg-cyan-500 rounded-full'>
                                <Icon className='lg:text-[35px] text-[25px] text-white ' />
                            </div>
                            <div className='text-center'>
                                <h2 className='font-bold lg:text-[25px] text-[18px] text-gray-900'>{item.title}</h2>
                                <p className='text-sm text-gray-600'>{item.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Homefifth;