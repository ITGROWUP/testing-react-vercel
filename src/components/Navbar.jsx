import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the hamburger (bars) and close (times) icons
import logoNav from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow-md px-4 sm:px-6 lg:px-[10%] py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-gray-800 text-xl font-bold">
            <img className="w-[50%]" src={logoNav} alt="Logo" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <a
            href="#"
            className="text-black text-lg font-light hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="#barang"
            className="text-black text-lg font-light hover:text-blue-500"
          >
            Barang
          </a>
          <a
            href="#layanan"
            className="text-black text-lg font-light hover:text-blue-500"
          >
            Layanan
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=6287845620888&text=Halo%20Antorma."
            target="_blank"
            className="bg-[#0345D9] rounded-full text-white text-lg font-light px-4 py-1 hover:bg-blue-600"
          >
            Tanya
          </a>
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white">
          <div className="space-y-2 px-4 py-3 text-gray-700">
            <a
              href="#"
              className="block text-lg font-light hover:text-blue-400"
            >
              Home
            </a>
            <a
              href="#barang"
              className="block text-lg font-light hover:text-blue-400"
            >
              Barang
            </a>
            <a
              href="#layanan"
              className="block text-lg font-light hover:text-blue-400"
            >
              Layanan
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=6287845620888&text=Halo%20Antorma."
              target="_blank"
              className="block bg-[#0345D9] rounded-full text-white text-lg font-light px-4 py-1 text-center hover:bg-blue-600"
            >
              Tanya
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
