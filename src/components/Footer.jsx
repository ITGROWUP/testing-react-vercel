import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
        <div className='w-[100%] h-[250px] bg-[#4800DD] flex justify-center gap-40 pt-6 text-gray-200'>
            <div className='flex flex-col'>
                <div className='text-xl mb-5'>ANTORMA</div>
                <div className='text-lg font-nexa-light mb-1'>Pusat Bantuan</div>
                <div className='text-lg font-nexa-light mb-1'>Cek Orderan</div>
                <div className='text-lg font-nexa-light mb-1'>Hubungi Kami</div>
                <div className='text-lg font-nexa-light mb-1'>Lainnya</div>
            </div>
            <div className='flex flex-col'>
                <div className='text-xl mb-5'>Tentang Perusahaan</div>
                <div className='text-lg font-nexa-light mb-1'>Work With Us</div>
                <div className='text-lg font-nexa-light mb-1'>Visi & Misi</div>
                <div className='text-lg font-nexa-light mb-1'>antorma.com</div>
            </div>
            <div className='flex flex-col'>
                <div className='text-xl mb-5'>Discover</div>
                <div className='text-lg font-nexa-light mb-1'>Jadi Mitra</div>
                <div className='text-lg font-nexa-light mb-1'>Catalog</div>
                <div className='text-lg font-nexa-light mb-1'>Tag Furniture</div>
            </div>
        </div>
        <div className='flex flex-col gap-6'>
            <div className='text-center text-xl font-light'>Ikuti Kami</div>
            <div className='flex gap-4 items-center justify-center'>
                <img className='w-10' src="/images/Facebook.png" alt="facebook" />
                <img className='w-10' src="/images/Facebook.png" alt="facebook" />
            </div>
            <div>
                <div className='font-nexa-light'>
                    Copyright 2024 Antorma Interior Solution. All right reserved.
                </div>
                <div className='text-center'>
                <a href="#" className='font-nexa-light underline justify-center'>antorma.com</a>
                </div>
            </div>
        </div>
        <div className='flex gap-8'>
            <img className='w-8' src="/images/Facebook.png" alt="facebook" />
            <img className='w-8' src="/images/Facebook.png" alt="facebook" />
            <img className='w-8' src="/images/Facebook.png" alt="facebook" />
            <img className='w-8' src="/images/Facebook.png" alt="facebook" />
            <img className='w-8' src="/images/Facebook.png" alt="facebook" />
            <img className='w-8' src="/images/Facebook.png" alt="facebook" />
            <img className='w-8' src="/images/Facebook.png" alt="facebook" />
            <img className='w-8' src="/images/Facebook.png" alt="facebook" />
            <img className='w-8' src="/images/Facebook.png" alt="facebook" />
            <img className='w-8' src="/images/Facebook.png" alt="facebook" />
            <img className='w-8' src="/images/Facebook.png" alt="facebook" />
            <img className='w-8' src="/images/Facebook.png" alt="facebook" />
        </div>
    </div>
    )
}

export default Footer