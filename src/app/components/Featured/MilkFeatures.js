import Image from 'next/image';
import React from 'react';
import Milk from '../../../../public/Milk feature.png'

const MilkFeatures = () => {
    return (
        <div className='container mx-auto relative'>
            <Image src={Milk} alt='' width={1920} height={500}></Image>
            <div className='absolute top-10 right-0 text-white w-1/3'>
                <h1 className='text-2xl font-semibold mb-4'>Royal Organic Creamy Milk</h1>
                <p>Discover the pure essence of freshness with our Royal Organic Creamy Milk. Sourced from cows raised in harmony with nature, this milk embodies the commitment to health, sustainability, and uncompromising quality. Our organic milk is a testament to the beauty of simplicity.</p>
            </div>
        </div>
    );
};

export default MilkFeatures;