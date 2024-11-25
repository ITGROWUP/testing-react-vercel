import React from "react";
import Interior from "../assets/3d_interior.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kursiSofa from "../assets/kursi_sofa.png";
import meja_1 from "../assets/meja_1.png"
import meja_2 from "../assets/meja_2.png"
import meja_3 from "../assets/meja_3.png"
import meja_makan from "../assets/set_meja.png"

const Ecommerce = () => {
  return (
    <div className="flex flex-wrap justify-center px-20 py-20 gap-[80px]">
      {/* Card 1 */}
      <div className="w-[21%] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
        <img className="w-[100%] rounded-t-lg" src={Interior} alt="" />
        <div className="p-2">
          <h3 className="text-[20px] font-bold">Desain Interior premium</h3>
          <h3 className="text-[20px] font-bold text-orange-500">
            Rp 3.500.000,-
          </h3>
          <div className="flex gap-2 items-center mt-5">
            <span className="material-icons text-yellow-600">star</span>
            <p className="text-gray-400">5.0 | 70 Terjual</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <p className="text-gray-400">Stock terbatas</p>
          </div>
          <button className="bg-orange-500 w-[100%] text-white p-2 mt-2 bor rounded-[5px] flex justify-center items-center gap-1">
            <span class="material-symbols-outlined">shopping_cart</span> Check
            Out
          </button>
        </div>
      </div>
      {/* Card 2 */}
      <div className="w-[21%] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
        <img className="w-[100%] rounded-t-lg" src={kursiSofa} alt="" />
        <div className="p-2">
          <h3 className="text-[20px] font-bold">Kursi Sofa premium</h3>
          <h3 className="text-[20px] font-bold text-orange-500">
            Rp 2.450.000,-
          </h3>
          <div className="flex gap-2 items-center mt-5">
            <span className="material-icons text-yellow-600">star</span>
            <p className="text-gray-400">4.8 | 103 Terjual</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <p className="text-gray-400">Stock terbatas</p>
          </div>
          <button className="bg-orange-500 w-[100%] text-white p-2 mt-2 bor rounded-[5px] flex justify-center items-center gap-1">
            <span class="material-symbols-outlined">shopping_cart</span> Check
            Out
          </button>
        </div>
      </div>
      {/* Card 3 */}
      <div className="w-[21%] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
        <img className="w-[100%] rounded-t-lg" src={meja_1} alt="" />
        <div className="p-2">
          <h3 className="text-[20px] font-bold">Set Meja Dekorasi</h3>
          <h3 className="text-[20px] font-bold text-orange-500">
            Rp 1.500.000,-
          </h3>
          <div className="flex gap-2 items-center mt-5">
            <span className="material-icons text-yellow-600">star</span>
            <p className="text-gray-400">4.7 | 24 Terjual</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <p className="text-gray-400">Stock terbatas</p>
          </div>
          <button className="bg-orange-500 w-[100%] text-white p-2 mt-2 bor rounded-[5px] flex justify-center items-center gap-1">
            <span class="material-symbols-outlined">shopping_cart</span> Check
            Out
          </button>
        </div>
      </div>
      {/* Card 4 */}
      <div className="w-[21%] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
        <img className="w-[100%] rounded-t-lg" src={meja_2} alt="" />
        <div className="p-2">
          <h3 className="text-[20px] font-bold">Meja kaki tinggi</h3>
          <h3 className="text-[20px] font-bold text-orange-500">
            Rp 950.000,-
          </h3>
          <div className="flex gap-2 items-center mt-5">
            <span className="material-icons text-yellow-600">star</span>
            <p className="text-gray-400">4.0 | 21 Terjual</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <p className="text-gray-400">Stock terbatas</p>
          </div>
          <button className="bg-orange-500 w-[100%] text-white p-2 mt-2 bor rounded-[5px] flex justify-center items-center gap-1">
            <span class="material-symbols-outlined">shopping_cart</span> Check
            Out
          </button>
        </div>
      </div>
      {/* Card 5 */}
      <div className="w-[21%] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
        <img className="w-[100%] rounded-t-lg" src={meja_makan} alt="" />
        <div className="p-2">
          <h3 className="text-[20px] font-bold">Set Meja Makan premium</h3>
          <h3 className="text-[20px] font-bold text-orange-500">
            Rp 2.947.000,-
          </h3>
          <div className="flex gap-2 items-center mt-5">
            <span className="material-icons text-yellow-600">star</span>
            <p className="text-gray-400">4.9 | 409 Terjual</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <p className="text-gray-400">Stock terbatas</p>
          </div>
          <button className="bg-orange-500 w-[100%] text-white p-2 mt-2 bor rounded-[5px] flex justify-center items-center gap-1">
            <span class="material-symbols-outlined">shopping_cart</span> Check
            Out
          </button>
        </div>
      </div>
      {/* Card 6 */}
      <div className="w-[21%] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
        <img className="w-[100%] rounded-t-lg" src={meja_3} alt="" />
        <div className="p-2">
          <h3 className="text-[20px] font-bold">Meja Ruang tamu</h3>
          <h3 className="text-[20px] font-bold text-orange-500">
            Rp 700.000,-
          </h3>
          <div className="flex gap-2 items-center mt-5">
            <span className="material-icons text-yellow-600">star</span>
            <p className="text-gray-400">4.5 | 61 Terjual</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <p className="text-gray-400">Stock terbatas</p>
          </div>
          <button className="bg-orange-500 w-[100%] text-white p-2 mt-2 bor rounded-[5px] flex justify-center items-center gap-1">
            <span class="material-symbols-outlined">shopping_cart</span> Check
            Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
