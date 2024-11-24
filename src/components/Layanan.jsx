import React from 'react'
import Cargo from '../assets/layanan_cargo.png'
import Langsung from '../assets/layanan_langsung.png'

const Layanan = () => {
  return (
    <div className='bg-[url("./assets/bg_2.png")] w-[100%] h-[100vh] bg-cover bg-center relative'>
        <h1 className="text-blue-700 text-6xl font-bold flex justify-center mt-16">layanan</h1>
        <div className='flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-[55%] mt-10' src={Cargo} alt="" />
                <p className='text-gray-700 text-4xl font-bold'>Pengiriman</p>
                <p className='text-gray-700 text-4xl font-bold'>Cargo</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-[55%]' src={Langsung} alt="" />
                <p className='text-gray-700 text-4xl font-bold'>Pelayanan</p>
                <p className='text-gray-700 text-4xl font-bold'>Langsung</p>
            </div>
        </div>
    </div>
  )
}

export default Layanan