import React from "react";
import { useState } from "react";
import logoNav from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-1 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="text-gray-800 text-xl font-bold">
              <img className="w-1/3" src={logoNav} alt="" />
            </a>
          </div>
          <div className="hidden md:flex space-x-7">
            <a
              href="#"
              className="text-black text-lg font-bold hover:text-blue-500"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black text-lg font-bold hover:text-blue-500"
            >
              Barang
            </a>
            <a
              href="#"
              className="text-black text-lg font-bold hover:text-blue-500"
            >
              Layanan
            </a>
            <a
              href="#"
              className="bg-blue-500 rounded-full text-white text-lg font-bold flex items-center justify-center w-24 h-8 hover:bg-blue-600"
            >
              Tanya
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
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
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <a href="#" className="block text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" className="block text-gray-300 hover:text-white">
              About
            </a>
            <a href="#" className="block text-gray-300 hover:text-white">
              Services
            </a>
            <a href="#" className="block text-gray-300 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
