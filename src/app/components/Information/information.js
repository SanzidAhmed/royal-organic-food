import Image from 'next/image';
import React from 'react';
import { BsArrowBarRight } from "react-icons/bs";
import '../Information/information.css'
const Information = () => {
    return (
        <div className=' pb-10 container mx-auto w-full '>
            <div className='flex justify-between items-center gap-10 '>
                <div className='space-y-8 text-black text-justify w-1/2'>
                    <h1 className='md:text-5xl'>Welcome to Royal Organics</h1>
                    <h2 className='md:text-3xl '>Nature is Elegance in Every Product</h2>
                    <p>Royal Organics, an esteemed organic ghee company, stands as a paragon of purity and quality. At the heart of its mission lies an unwavering commitment to sourcing the finest organic ingredients, often derived from grass-fed or pasture-raised cows, ensuring a superior product. With a strong emphasis on health and wellness, Royal Organics ghee is celebrated for its potential health benefits, boasting a rich composition of healthy fats like omega-3 fatty acids and CLA. Employing traditional methods and rigorous organic certification standards, Royal Organics produces ghee renowned for its clarity, free from additives or artificial elements. Moreover, the company champions sustainability, endorsing eco-friendly practices and transparent labeling to provide consumers with not only a delectable culinary ingredient but also a conscientious choice for both personal health and the environment.</p>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='inline-flex items-center gap-4'>
                            <BsArrowBarRight></BsArrowBarRight> <span>Special Ingredients</span>
                        </div>
                        <div className='inline-flex items-center gap-4'>
                            <BsArrowBarRight></BsArrowBarRight> <span>Traditional Methods</span>
                        </div>
                        <div className='inline-flex items-center gap-4'>
                            <BsArrowBarRight></BsArrowBarRight> <span>Quality and Purity</span>
                        </div>
                        <div className='inline-flex items-center gap-4'>
                            <BsArrowBarRight></BsArrowBarRight> <span>Honesty</span>
                        </div>
                    </div>
                </div>
                <Image className='Image w-1/2' src="https://i.ibb.co/FbqWXy2/laura-ohlman-XJMCa-D-c-Z7-Y-unsplash.jpg" alt='cow image' width={1920} height={500} ></Image>

            </div>
        </div>
    );
};

export default Information;