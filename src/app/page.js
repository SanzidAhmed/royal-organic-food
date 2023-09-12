import React from 'react';
import Information from './components/Information/information';
import Banner from './components/Banner/banner';
import Featured from './components/Featured/Featured';
import MilkFeatures from './components/Featured/MilkFeatures';


const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <Information></Information>
      <MilkFeatures></MilkFeatures>
    </div>
  );
};

export default page;