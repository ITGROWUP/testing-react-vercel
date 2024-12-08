import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col-reverse lg:flex-row justify-center mb-20 mt-10 lg:mt-32 w-[90%] lg:w-[80%]">
        {/* Bagian Kiri */}
        <div data-aos="fade-right" data-aos-duration="1000" className="flex flex-col items-start gap-8 w-full lg:w-1/2">
          <div className="text-gray-700 text-4xl lg:text-5xl font-extrabold pt-10 lg:pt-20">
            <div>Lengkapi kebutuhan</div>
            <div>Rumah anda</div>
            <div>
              dengan <span className="text-[#0345D9]">ANTORMA</span>
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
              href="https://api.whatsapp.com/send?phone=6287845620888&text=Halo%20Antorma."
              className="bg-[#0345D9] rounded-full text-white text-sm lg:text-lg font-normal flex items-center justify-center w-20 lg:w-40 h-8 hover:bg-blue-600"
            >
              Order
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=6287845620888&text=Halo%20Antorma."
              className="border border-[#0345D9] rounded-full text-[#0345D9] text-sm lg:text-lg font-normal flex items-center justify-center w-28 lg:w-40 h-8 hover:bg-blue-600 hover:text-white"
            >
              Cek Barang
            </a>
          </div>
        </div>

        {/* Bagian Kanan */}
        <div data-aos="fade-left" data-aos-duration="1000"  className="w-full lg:w-1/2 flex justify-center pt-10 lg:pt-7 order-first lg:order-none">
          <img
            src="images/object_jumbtorton.png"
            alt="jumbotron"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
