import React from "react";
import Interior from "../assets/3d_interior.png";
import kursiSofa from "../assets/kursi_sofa.png";
import meja_1 from "../assets/meja_1.png";
import meja_2 from "../assets/meja_2.png";
import meja_3 from "../assets/meja_3.png";
import meja_makan from "../assets/set_meja.png";

const Ecommerce = () => {
  return (
    <div className="flex flex-wrap justify-center px-5 py-10 gap-6 md:px-10 lg:gap-8 lg:px-20 lg:py-20">
      {/* Card 1 */}
      <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[30%] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
        <img className="w-full rounded-t-lg" src={Interior} alt="" />
        <div className="p-2">
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold">
            Desain Interior premium
          </h3>
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-orange-500">
            Rp 3.500.000,-
          </h3>
          <div className="flex gap-2 items-center mt-5">
            <span className="material-icons text-yellow-600">star</span>
            <p className="text-gray-400 text-sm">5.0 | 70 Terjual</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <p className="text-gray-400 text-sm">Stock terbatas</p>
          </div>
          <button className="bg-orange-500 w-full text-white p-2 mt-2 rounded-[5px] flex justify-center items-center gap-1">
            <span className="material-symbols-outlined">shopping_cart</span> Check
            Out
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[30%] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
        <img className="w-full rounded-t-lg" src={kursiSofa} alt="" />
        <div className="p-2">
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold">
            Kursi Sofa premium
          </h3>
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-orange-500">
            Rp 2.450.000,-
          </h3>
          <div className="flex gap-2 items-center mt-5">
            <span className="material-icons text-yellow-600">star</span>
            <p className="text-gray-400 text-sm">4.8 | 103 Terjual</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <p className="text-gray-400 text-sm">Stock terbatas</p>
          </div>
          <button className="bg-orange-500 w-full text-white p-2 mt-2 rounded-[5px] flex justify-center items-center gap-1">
            <span className="material-symbols-outlined">shopping_cart</span> Check
            Out
          </button>
        </div>
      </div>
      <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[30%] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
        <img className="w-full rounded-t-lg" src={meja_1} alt="Meja 1" />
        <div className="p-2">
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold">
            Set Meja Dekorasi
          </h3>
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-orange-500">
            Rp 1.500.000,-
          </h3>
          <div className="flex gap-2 items-center mt-5">
            <span className="material-icons text-yellow-600">star</span>
            <p className="text-gray-400 text-sm">4.7 | 24 Terjual</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <p className="text-gray-400 text-sm">Stock terbatas</p>
          </div>
          <button className="bg-orange-500 w-full text-white p-2 mt-2 rounded-[5px] flex justify-center items-center gap-1">
            <span className="material-symbols-outlined">shopping_cart</span> Check
            Out
          </button>
        </div>
      </div>
       {/* Card 4 */}
       <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[30%] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
        <img className="w-full rounded-t-lg" src={meja_2} alt="Meja 2" />
        <div className="p-2">
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold">
            Meja Kaki Tinggi
          </h3>
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-orange-500">
            Rp 950.000,-
          </h3>
          <div className="flex gap-2 items-center mt-5">
            <span className="material-icons text-yellow-600">star</span>
            <p className="text-gray-400 text-sm">4.2 | 21 Terjual</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <p className="text-gray-400 text-sm">Stock terbatas</p>
          </div>
          <button className="bg-orange-500 w-full text-white p-2 mt-2 rounded-[5px] flex justify-center items-center gap-1">
            <span className="material-symbols-outlined">shopping_cart</span> Check
            Out
          </button>
        </div>
      </div>

      {/* Card 5 */}
      <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[30%] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
        <img className="w-full rounded-t-lg" src={meja_makan} alt="Meja 3" />
        <div className="p-2">
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold">
            Set Meja Makan Premium
          </h3>
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-orange-500">
            Rp 2.947.000,-
          </h3>
          <div className="flex gap-2 items-center mt-5">
            <span className="material-icons text-yellow-600">star</span>
            <p className="text-gray-400 text-sm">4.9 | 147 Terjual</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <p className="text-gray-400 text-sm">Stock terbatas</p>
          </div>
          <button className="bg-orange-500 w-full text-white p-2 mt-2 rounded-[5px] flex justify-center items-center gap-1">
            <span className="material-symbols-outlined">shopping_cart</span> Check
            Out
          </button>
        </div>
      </div>

       {/* Card 6 */}
       <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[30%] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
        <img className="w-full rounded-t-lg" src={meja_3} alt="Meja 3" />
        <div className="p-2">
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold">
            Meja Ruang Tamu
          </h3>
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-orange-500">
            Rp 700.000,-
          </h3>
          <div className="flex gap-2 items-center mt-5">
            <span className="material-icons text-yellow-600">star</span>
            <p className="text-gray-400 text-sm">4.5 | 61 Terjual</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <p className="text-gray-400 text-sm">Stock terbatas</p>
          </div>
          <button className="bg-orange-500 w-full text-white p-2 mt-2 rounded-[5px] flex justify-center items-center gap-1">
            <span className="material-symbols-outlined">shopping_cart</span> Check
            Out
          </button>
        </div>
      </div>

      {/* Tambahkan card lainnya dengan struktur yang sama */}
    </div>
  );
};

export default Ecommerce;
