import React from 'react';
import SliderImport from "react-slick";
import { carouselData } from '../countrydata';
import { IoIosHeart } from "react-icons/io";
import Avatar from '@mui/material/Avatar';
import { userdummy } from '../index';
const Slider = SliderImport.default;

function Carousel() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4.1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2.1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }
        ]
    }

    return (
        <div className='overflow-x-auto no-scrollbar' style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none"
        }}>
            <div className="flex md:gap-2 w-max" style={{ WebkitOverflowScrolling: "touch" }}>

                {
                    carouselData.map((item, index) => {

                        return (
                            <div key={index} className='cursor-pointer p-2 my-4 md:w-[318px] w-[280px]'>
                                <div className='hover:shadow-xl transition-shadow duration-300'>
                                    <div className='flex items-center justify-center border border-gray-300
                          rounded-tl-[35px] rounded-br-[35px] rounded-bl-[10px] rounded-tr-[10px] 
                          overflow-hidden relative'>
                                    <div className='flex w-[100%] h-[200px] md:w-[100%] md:h-[230px]'>
                                        <img src={item.image} alt={item.product} className='w-full h-full 
                            rounded-tl-[35px] rounded-br-[35px] rounded-bl-[10px] rounded-tr-[10px] 
                            hover:scale-105 transition-transform duration-300 object-cover' />
                                    </div>

                                        <div className='flex absolute bottom-2 left-2'>
                                            {[...Array(item.rating)].map((_, i) => (
                                                <IoIosHeart
                                                    key={i}
                                                    className="md:text-[16px] text-[14px] text-[#ff4262]"
                                                />
                                            ))}
                                        </div>
                                        <div className='absolute bottom-3 right-3'>
                                            <Avatar src={userdummy} alt={item.name} sx={{ width: 30, height: 30 }} />
                                        </div>

                                        <div className='absolute top-3 right-7'>
                                            <div className='bg-[#813181] text-white text-[12px] px-2 py-1 rounded-lg'>
                                                <span>very popular</span>
                                            </div>
                                        </div>


                                    </div>
                                    <h3 className='pt-2'>{item.product}</h3>
                                    <p className='text-cyan-600 text-[14px] font-semibold'>{item.price}/day</p>

                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Carousel