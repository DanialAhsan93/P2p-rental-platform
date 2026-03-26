import React from 'react'
import { choosedata } from '../countrydata';
import { Link } from 'react-router-dom';

function Choose() {
    return (
        <div className='py-10'>
            <div className='text-center py-4'>
                <h1 className='text-2xl font-bold text-gray-800'>
                    Why choose us?
                </h1>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 lg:p-0 p-2">
                {
                    choosedata.map((item, i) => {
                        return (
                            <Link to='/blog' key={i} className='w-[100%] lg:w-[23%] lg:h-[430px] flex flex-col items-center
                         p-5 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] cursor-pointer'>
                                <div className=' flex w-[145px] h-[145px] rounded-full'>
                                    <img src={item.image} alt="image here" className='w-full h-full  rounded-full' />
                                </div>

                                <div className='w-full pt-4  '>
                                    <h2 className='m-0 text-[15px] min-h-[45px] text-center font-bold
                                    text-gray-800'>
                                        {item.title}
                                    </h2>
                                </div>



                                <div className='pt-4 flex-1'>
                                    <h2 className='text-center'>
                                            {item.desc}
                                        </h2>
                                    </div>




                            </Link>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Choose;