import React from 'react'

const Home = () => {
  return (
    <div className="flex py-10 px-20 mb-20">
      {/* Bagian Kiri */}
      <div className="flex flex-col items-start gap-8 w-1/2">
        <div className="text-gray-700 text-5xl font-bold pt-20">
          <div>Lengkapi Kebutuhan</div>
          <div>Rumah Anda</div>
          <div>dengan <span className='text-blue-700'>ANTORMA</span></div>
        </div>
        <div className="text-black text-5xs font-outfit">
          <div>
            Antorma menyediakan kelengkapan interior berkualitas, seperti</div>
          <div>
          sofa, meja, dan berbagai furnitur lainnya, yang dirancang untuk
          </div>
          <div>mempercantik dan meningkatkan kenyamanan ruang anda.</div>
        </div>
        <div className="flex gap-4 justify-start">
          <div>
            <a href="#" 
            className="bg-blue-500 rounded-full text-white text-lg font-bold flex items-center justify-center w-24 h-8 hover:bg-blue-600">
              Order
            </a>
          </div>
          <div>
            <a href="#" 
            className="border border-blue-500 rounded-full text-blue-500 text-lg font-bold flex items-center justify-center w-32 h-8 hover:bg-blue-600 hover:text-white">
              Cek Barang 
            </a>
          </div>
        </div>
      </div>
      {/* Bagian Kanan */}
      <div className="w-1/2 pl-10">
        <div className="pt-7 flex justify-center">
          <img src="images/object_jumbtorton.png" alt="jumbotron" className='w-10/12'/>
        </div>
      </div>
    </div>
  );
};

export default Home;
