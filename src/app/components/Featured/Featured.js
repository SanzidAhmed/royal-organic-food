import Image from 'next/image';
import React from 'react';

const Featured = () => {
    return (
        <div className='container mx-auto mb-10'>
            <h1 className='text-center text-3xl font-semibold mb-10'>Featured Collections</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 text-center justify-center mx-auto gap-10 '>
                <div className="card w-full glass  rounded-none hover:shadow-2xl">
                    <figure><Image src="https://i.ibb.co/2n9MpRX/close-up-jar-with-organic-honey-board.jpg" alt='Feature Collection' width={500} height={500} className='min-h-[300px]'></Image></figure>
                    <div className="card-body text-center border-t border-[#53361C]">
                        <h2 className=" text-center text-2xl font-bold">Royal Organic Pure Ghee</h2>
                        <p>Experience the rich taste of Royal Organic Pure Ghee, a natural and wholesome addition to your kitchen.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary bg-[#53361C] rounded-3xl border-[#53361C] text-white px-16">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full glass rounded-none hover:shadow-2xl">
                    <figure><Image src="https://i.ibb.co/wyZ1y9k/fresh-honeycombs.jpg" alt='Feature Collection' width={500} height={500} className='min-h-[300px]'></Image></figure>
                    <div className="card-body text-center border-t border-[#53361C]">
                        <h2 className=" text-center text-2xl font-bold">Royal Organic Gold Honey</h2>
                        <p>Enjoy the delicious and natural flavor of our Organic Gold Honey, made by bees in pesticide-free hives.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary bg-[#53361C] rounded-3xl border-[#53361C] text-white px-16">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full glass  rounded-none hover:shadow-2xl">
                    <figure><Image src="https://i.ibb.co/M5d8zM1/pitcher-with-some-milk.jpg" alt='Feature Collection' width={500} height={500} className='min-h-[300px]'></Image></figure>
                    <div className="card-body text-center border-t border-[#53361C]">
                        <h2 className=" text-center text-2xl font-bold">Royal Organic Creamy Milk</h2>
                        <p>Royal Organic Creamy Milk, sourced from organically raised cows, offers pure and wholesome goodness in every glass.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary bg-[#53361C] rounded-3xl border-[#53361C] text-white px-16">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full glass  rounded-none hover:shadow-2xl ">
                    <figure><Image src="https://i.ibb.co/hX2xQrT/concept-fresh-natural-farm-product-eggs-space-text.jpg" alt='Feature Collection' width={500} height={500} className='min-h-[300px] w-full'></Image></figure>
                    <div className="card-body text-center border-t border-[#53361C]">
                        <h2 className=" text-center text-2xl font-bold">Organic Eggs</h2>
                        <p>Discover the natural goodness of our Organic Eggs, where happy, free-range hens lay nutritious and delicious eggs, raised without synthetic pesticides or antibiotics.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary bg-[#53361C] rounded-3xl border-[#53361C] text-white px-16">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;