"use client"


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


// import required modules
import { Autoplay } from 'swiper/modules';

import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                effect='fade'
                className="mySwiper h-[700px] w-full mb-10"
            >
                <SwiperSlide><Image fill sizes='100vh' src="https://i.ibb.co/4tyF47L/ghee-clarified-butter-jar-wooden-table-ai-generative.jpg" alt='slider image' ></Image></SwiperSlide>
                <SwiperSlide><Image fill sizes='100vh' src="https://i.ibb.co/9nty8Y5/ave-calvar-KDmk-I7e8ma8-unsplash-1.jpg" alt='slider image' ></Image></SwiperSlide>
                <SwiperSlide><Image fill sizes='100vh' src="https://i.ibb.co/HxYfpF2/aleksey-melkomukov-v-Eyp-Neg-A9k-unsplash.jpg" alt='slider image' ></Image></SwiperSlide>
                <SwiperSlide><Image fill sizes='100vh' src="https://i.ibb.co/4tyF47L/ghee-clarified-butter-jar-wooden-table-ai-generative.jpg" alt='slider image' ></Image></SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Banner;