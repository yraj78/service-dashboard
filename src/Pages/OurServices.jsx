import React from 'react';
import '../styles/services.css'; 
const OurServices = () => {
  return (
    <div id="assignment" className="relative w-full h-screen overflow-hidden">

      {/*first TRIANGLE */}
      <div className="absolute top-0 right-0 w-full h-full bg-navy-blue clip-triangle-top-right z-0">
        <div className="absolute left-10 top-1 z-20">
          <h1 className="text-white text-[3rem] font-bold">Our Services</h1>
        </div>
      </div>
      
      {/*second TRIANGLE */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-light-gray clip-triangle-bottom-left z-10"></div>

      <div className='absolute flex flex-nowrap justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'>
       
        <div className="bg-white shadow-lg rounded-lg m-4 p-6 w-64 h-64 relative transition-transform duration-500 hover:rotate-360">
          <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-16 h-16 border-4 border-[rgb(87,70,175)] rounded-full flex justify-center items-center bg-white">
            <i className="fas fa-wrench text-[rgb(87,70,175)] text-2xl"></i>
          </div>
          <h2 className="font-bold text-xl mb-2 mt-2">Emergency Plumbing Services</h2>
          <p className="flex-grow">Our plumbers are ready to go 24/7 for emergencies including nights, weekends, and holidays.</p>
          <h2 className="mt-4 text-md font-bold text-[rgb(87,70,175)] cursor-pointer">EXPLORE THIS SERVICE <i className="fas fa-chevron-right text-[rgb(87,70,175)]"></i></h2>
        </div>

        <div className="bg-white shadow-lg rounded-lg m-4 p-6 w-64 h-64 relative transition-transform duration-500 hover:rotate-360">
          <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-16 h-16 border-4 border-[rgb(87,70,175)] rounded-full flex justify-center items-center bg-white">
            <i className="fas fa-water text-[rgb(87,70,175)] text-2xl"></i>
          </div>
          <h2 className="font-bold text-xl mb-2 mt-2">Plumbing and Drains</h2>
          <p className="flex-grow">As the largest plumbing and drain service company, we make thousands of repairs every day.</p>
          <h2 className="mt-4 text-md font-bold text-[rgb(87,70,175)] cursor-pointer">EXPLORE THIS SERVICE <i className="fas fa-chevron-right text-[rgb(87,70,175)]"></i></h2>
        </div>

        <div className="bg-white shadow-lg rounded-lg m-4 p-6 w-64 h-64 relative transition-transform duration-500 hover:rotate-360">
          <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-16 h-16 border-4 border-[rgb(87,70,175)] rounded-full flex justify-center items-center bg-white">
            <i className="fas fa-tint text-[rgb(87,70,175)] text-2xl"></i>
          </div>
          <h2 className="font-bold text-xl mb-2 mt-2">Water Damage</h2>
          <p className="flex-grow">Our teams are equipped with state-of-the-art water extraction and cleanup equipment.</p>
          <h2 className="mt-4 text-md font-bold text-[rgb(87,70,175)] cursor-pointer">EXPLORE THIS SERVICE <i className="fas fa-chevron-right text-[rgb(87,70,175)]"></i></h2>
        </div>

        <div className="bg-white shadow-lg rounded-lg m-4 p-6 w-64 h-64 relative transition-transform duration-500 hover:rotate-360">
          <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-16 h-16 border-4 border-[rgb(87,70,175)] rounded-full flex justify-center items-center bg-white">
            <i className="fas fa-fire text-[rgb(87,70,175)] text-2xl"></i>
          </div>
          <h2 className="font-bold text-xl mb-2 mt-2">Water Heaters</h2>
          <p className="flex-grow">Trust Roto-Rooter for repair and replacement of gas, electric, and tankless water heaters.</p>
          <h2 className="mt-4 text-md font-bold text-[rgb(87,70,175)] cursor-pointer">EXPLORE THIS SERVICE <i className="fas fa-chevron-right text-[rgb(87,70,175)]"></i></h2>
        </div>
      </div>
    </div>
  );
};

export default OurServices;