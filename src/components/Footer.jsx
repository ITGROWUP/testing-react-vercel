import React from 'react'
import payment from "../assets/payment.png"

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      {/* Bagian Utama Footer */}
      <div className="w-full h-auto bg-[#0345D9] flex flex-wrap justify-center sm:justify-center  gap-10 sm:gap-60 p-6 text-gray-200">
        {/* Kolom 1 */}
        <div className="flex flex-col text-center sm:text-left">
          <div className="text-xl mb-5">ANTORMA</div>
          <a href='#' className="text-lg font-nexa-light mb-1">Pusat Bantuan</a>
          <a href='#' className="text-lg font-nexa-light mb-1">Cek Orderan</a>
          <a href='https://wa.me/6287845620888' target='_blank' className="text-lg font-nexa-light mb-1">Hubungi Kami</a>
          <a href='#' className="text-lg font-nexa-light mb-1">Lainnya</a>
        </div>
        {/* Kolom 2 */}
        <div className="flex flex-col text-center sm:text-left">
          <a href='#' className="text-xl mb-5">Tentang Perusahaan</a>
          <a href='#' className="text-lg font-nexa-light mb-1">Work With Us</a>
          <a href='#' className="text-lg font-nexa-light mb-1">Visi & Misi</a>
          <a href='#' className="text-lg font-nexa-light mb-1">antorma.id</a>
        </div>
        {/* Kolom 3 */}
        <div className="flex flex-col text-center sm:text-left">
          <div className="text-xl mb-5">Discover</div>
          <a href='#' className="text-lg font-nexa-light mb-1">Jadi Mitra</a>
          <a href='#' className="text-lg font-nexa-light mb-1">Catalog</a>
          <a href='#' className="text-lg font-nexa-light mb-1">Tag Furniture</a>
        </div>
      </div>

      {/* Ikuti Kami */}
      <div className="flex flex-col gap-6 w-full items-center text-center px-4">
        <div className="text-xl font-light">Ikuti Kami</div>
        <div className="flex gap-4 items-center justify-center">
            <a href="https://web.facebook.com/profile.php?id=100072133058904" target='_blank'>
            <img className="w-10" src="/images/Facebook.png" alt="facebook" />
            </a>
        </div>
        <div className="text-sm sm:text-base font-nexa-light">
          <div>
            Copyright 2024 Antorma Interior Solution. All right reserved.
          </div>
          <div>
            <a
              href="#"
              className="font-nexa-light underline block text-center"
            >
              antorma.id
            </a>
          </div>
        </div>
      </div>

      {/* Ikon Media Sosial */}
      <div className="flex flex-wrap gap-4 justify-center items-center mb-10">
        <img src={payment} alt="" />
      </div>
    </div>
  );
};

export default Footer;
