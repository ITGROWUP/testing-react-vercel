import React from "react";
import produk from "../assets/produk_group.png";

const ProdukKami = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-around items-center px-5 md:px-10 lg:px-20 bg-[url("./assets/bg_1.png")] w-full bg-cover bg-center relative'>
      <div data-aos="fade-up" data-aos-duration="1000" className="h-auto lg:h-[100vh] flex flex-col py-20 lg:py-[20%] text-center lg:text-left">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">Produk Kami</h1>
        <h4 className="text-white text-lg md:text-xl lg:text-2xl font-normal mt-4 lg:mt-[20px]">
          Produk yang kami berikan <br className="hidden lg:block" /> sesuai dengan yang anda <br className="hidden lg:block" /> bayangkan dan bayarkan
        </h4>
        <a 
          href="https://api.whatsapp.com/send?phone=6287845620888&text=Halo%20Antorma." target="_blank" 
          className="bg-white w-32 lg:w-40 xl:w-52 rounded-full text-black hover:text-white text-sm md:text-base lg:text-lg font-normal flex items-center justify-center h-9 py-2 hover:bg-blue-600 mt-6 lg:mt-10 mx-auto lg:mx-0">
          Cek Harga
        </a>
      </div>
      <div data-aos="fade-down" data-aos-duration="1000" className="w-full lg:w-[60%] h-auto lg:h-[100vh] flex items-center justify-center lg:items-end">
        <img className="max-w-full max-h-full object-contain" src={produk} alt="Produk Kami" />
      </div>
    </div>
  );
};

export default ProdukKami;
