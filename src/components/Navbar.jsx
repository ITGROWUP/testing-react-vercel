import React, { useState } from "react";
import logoNav from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow-md px-4 sm:px-6 lg:px-8 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-gray-800 text-xl font-bold">
            <img className="w-[70px]" src={logoNav} alt="Logo" />
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
            href="#"
            className="text-black text-lg font-light hover:text-blue-500"
          >
            Barang
          </a>
          <a
            href="#"
            className="text-black text-lg font-light hover:text-blue-500"
          >
            Layanan
          </a>
          <a
            href="#"
            className="bg-blue-500 rounded-full text-white text-lg font-light px-4 py-1 hover:bg-blue-600"
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
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
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
              href="#"
              className="block text-lg font-light hover:text-blue-400"
            >
              Barang
            </a>
            <a
              href="#"
              className="block text-lg font-light hover:text-blue-400"
            >
              Layanan
            </a>
            <a
              href="#"
              className="block bg-blue-500 rounded-full text-white text-lg font-light px-4 py-1 text-center hover:bg-blue-600"
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
