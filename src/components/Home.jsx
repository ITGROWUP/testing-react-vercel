import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col-reverse lg:flex-row justify-center mb-20 mt-10 lg:mt-32 w-[90%] lg:w-[80%]">
        {/* Bagian Kiri */}
        <div className="flex flex-col items-start gap-8 w-full lg:w-1/2">
          <div className="text-gray-700 text-4xl lg:text-5xl font-bold pt-10 lg:pt-20">
            <div>Lengkapi Kebutuhan</div>
            <div>Rumah Anda</div>
            <div>
              dengan <span className="text-blue-700">ANTORMA</span>
            </div>
          </div>
          <div className="text-black text-sm lg:text-base font-light">
            <div>Antorma menyediakan kelengkapan interior berkualitas, seperti</div>
            <div>
              sofa, meja, dan berbagai furnitur lainnya, yang dirancang untuk
            </div>
            <div>mempercantik dan meningkatkan kenyamanan ruang anda.</div>
          </div>
          <div className="flex flex-wrap gap-4 justify-start">
            <a
              href="#"
              className="bg-blue-500 rounded-full text-white text-sm lg:text-lg font-bold flex items-center justify-center w-20 lg:w-24 h-8 hover:bg-blue-600"
            >
              Order
            </a>
            <a
              href="#"
              className="border border-blue-500 rounded-full text-blue-500 text-sm lg:text-lg font-bold flex items-center justify-center w-28 lg:w-32 h-8 hover:bg-blue-600 hover:text-white"
            >
              Cek Barang
            </a>
          </div>
        </div>

        {/* Bagian Kanan */}
        <div className="w-full lg:w-1/2 flex justify-center pt-10 lg:pt-7 order-first lg:order-none">
          <img
            src="images/object_jumbtorton.png"
            alt="jumbotron"
            className="w-full sm:w-11/12"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
