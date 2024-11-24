import React, { useState } from "react";
import logoNav from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-gray-800 text-xl font-bold">
              <img className="w-24" src={logoNav} alt="Logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            <a
              href="#"
              className="text-black text-lg font-semibold hover:text-blue-500"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black text-lg font-semibold hover:text-blue-500"
            >
              Barang
            </a>
            <a
              href="#"
              className="text-black text-lg font-semibold hover:text-blue-500"
            >
              Layanan
            </a>
            <a
              href="#"
              className="bg-blue-500 rounded-full text-white text-lg font-semibold px-4 py-1 hover:bg-blue-600"
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black">
          <div className="space-y-2 px-4 py-3 text-white">
            <a
              href="#"
              className="block text-lg font-semibold hover:text-blue-400"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-lg font-semibold hover:text-blue-400"
            >
              Barang
            </a>
            <a
              href="#"
              className="block text-lg font-semibold hover:text-blue-400"
            >
              Layanan
            </a>
            <a
              href="#"
              className="block bg-blue-500 rounded-full text-white text-lg font-semibold px-4 py-1 text-center hover:bg-blue-600"
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
