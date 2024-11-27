import React from "react";
import keunggulan_1 from "../assets/keunggulan_1.png";
import keunggulan_2 from "../assets/keunggulan_2.png";
import keunggulan_3 from "../assets/keunggulan_3.png";

const Keunggulan = () => {
  return (
    <div className='flex flex-col justify-center items-center px-5 md:px-10 lg:px-20 bg-[url("./assets/bg_1.png")] w-full bg-cover bg-center relative'>
      <div className="h-auto py-10 lg:py-[7%] flex flex-col items-center">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center"
        >
          apa yang membuat kami
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-10 lg:mb-12"
        >
          lebih unggul ?
        </div>
        <div className="flex flex-wrap justify-center items-center gap-20 md:gap-8 lg:gap-12 mt-20">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="bg-white md:bg-white w-60 h-[29vh] md:w-72 md:h-[30vh] rounded-[20px] flex justify-center items-end lg:h-[41vh]"
          >
            <div className="flex flex-col text-gray-700 text-xl md:text-2xl lg:text-1xl font-bold justify-center items-center text-center">
              <img src={keunggulan_1} alt="" className="w-[95%]" />
              <div>Dibuat oleh</div>
              <div>tenaga Profesional</div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
className="bg-white md:bg-white w-60 h-[29vh] md:w-72 md:h-[30vh] rounded-[20px] flex justify-center items-end lg:h-[41vh]"
          >
            <div className="flex flex-col text-gray-700 text-xl md:text-2xl lg:text-1xl font-bold justify-center items-center text-center">
              <img src={keunggulan_2} alt="" className="w-[95%]" />
              <div>Quality control</div>
              <div>di setiap pengerjaan</div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
className="bg-white md:bg-white w-60 h-[29vh] md:w-72 md:h-[30vh] rounded-[20px] flex justify-center items-end lg:h-[41vh]"
          >
            <div className="flex flex-col text-gray-700 text-xl md:text-2xl lg:text-1xl font-bold justify-center items-center text-center">
              <img src={keunggulan_3} alt="" className="w-[95%]" />
              <div>Waktu pengerjaan</div>
              <div>cepat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keunggulan;
