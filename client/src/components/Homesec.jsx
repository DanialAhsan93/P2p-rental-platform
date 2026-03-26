import React from 'react';
import Carousel from './Carousel';

function Homesec() {


    return (
        <div className='ps-4 py-7'>
            <h1 className='text-[24px] font-semibold text-gray-800'>
                Recently active items
            </h1>

            <div className="slider-container">
                <Carousel />
            </div>

        </div>
    )
}

export default Homesec