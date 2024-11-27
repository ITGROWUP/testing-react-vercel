import React from 'react';
import Cargo from '../assets/layanan_cargo.png';
import Langsung from '../assets/layanan_langsung.png';

const Layanan = () => {
  return (
    <div id='layanan' className='bg-[url("./assets/bg_2.png")] w-full h-auto lg:h-[100vh] bg-cover bg-center relative'>
      <h1 data-aos="fade-down" data-aos-duration="1000" className="text-blue-700 text-4xl md:text-5xl lg:text-6xl font-bold flex justify-center mt-8 md:mt-12 lg:mt-16">layanan</h1>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 px-5 md:px-10 lg:px-20'>
        <div data-aos="flip-right" data-aos-duration="1000" className='flex flex-col justify-center items-center'>
          <img className='w-[70%] md:w-[60%] lg:w-[55%] mt-8 md:mt-10' src={Cargo} alt="Pengiriman Cargo" />
          <p className='text-gray-700 text-2xl md:text-3xl lg:text-4xl font-bold mt-4'>Pengiriman</p>
          <p className='text-gray-700 text-2xl md:text-3xl lg:text-4xl font-bold'>Cargo</p>
        </div>
        <div data-aos="flip-left" data-aos-duration="1000" className='flex flex-col justify-center items-center'>
          <img className='w-[70%] md:w-[60%] lg:w-[55%] mt-8 md:mt-10' src={Langsung} alt="Pelayanan Langsung" />
          <p className='text-gray-700 text-2xl md:text-3xl lg:text-4xl font-bold mt-4'>Pelayanan</p>
          <p className='text-gray-700 text-2xl md:text-3xl lg:text-4xl font-bold'>Langsung</p>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
