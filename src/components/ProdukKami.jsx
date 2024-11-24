import React from "react";
import produk from "../assets/produk_group.png";

const ProdukKami = () => {
  return (
    <div className='flex justify-around items-center px-20 bg-[url("./assets/bg_1.png")] w-[100%]  bg-cover bg-center relative'>
      <div className="h-[100vh] flex flex-col py-[20%]">
        <h1 className="text-white text-5xl font-bold">Produk kami</h1>
        <h4 className="text-white text-2xl font-normal mt-[20px]">
          Produk yang kami berikan <br /> sesuai dengan yang anda <br /> bayangkan dan
          bayarkan
        </h4>
        <a href="" className="bg-white w-32 rounded-full text-black text-sm lg:text-lg font-normal flex items-center justify-center lg:w-[100%] h-9 py-[20px] w-10 hover:bg-blue-600 mt-10 ">
        Cek Harga
        </a>
      </div>
      <div className="w-[60%] h-[100vh] flex items-end">
      <img className="" src={produk} alt="" />
      </div>
    </div>
  );
};

export default ProdukKami;
