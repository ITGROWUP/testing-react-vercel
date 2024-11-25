import React from 'react';

const Keunggulan = () => {
  return (
    <div className='flex flex-col justify-center items-center px-5 md:px-10 lg:px-20 bg-[url("./assets/bg_1.png")] w-full bg-cover bg-center relative'>
      <div className="h-auto py-10 lg:py-[7%] flex flex-col items-center">
        <div className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          apa yang membuat kami
        </div>
        <div className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-10 lg:mb-12">
          lebih unggul ?
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
          <div className='bg-white w-60 h-60 md:w-72 md:h-72 flex justify-center items-center'>
            <div className='flex flex-col text-gray-700 text-xl md:text-2xl lg:text-3xl font-bold justify-center items-center text-center'>
              <div>Dibuat oleh</div>
              <div>tenaga Profesional</div>
            </div>
          </div>
          <div className='bg-white w-60 h-60 md:w-72 md:h-72 flex justify-center items-center'>
            <div className='flex flex-col text-gray-700 text-xl md:text-2xl lg:text-3xl font-bold justify-center items-center text-center'>
              <div>Quality control</div>
              <div>di setiap pengerjaan</div>
            </div>
          </div>
          <div className='bg-white w-60 h-60 md:w-72 md:h-72 flex justify-center items-center'>
            <div className='flex flex-col text-gray-700 text-xl md:text-2xl lg:text-3xl font-bold justify-center items-center text-center'>
              <div>Waktu pengerjaan</div>
              <div>Cepat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keunggulan;
