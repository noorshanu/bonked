import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ffad2d] sm:bg-transparent py-4 relative  sm:absolute top-0 w-full z-40">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 mr-6">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="images/logo.png" className="h-[100px]" alt="Flowbite Logo" />
        </a>

        </div>

        {/* Navigation menu */}
        <div className="hidden md:flex flex-grow justify-center">
          <a href="#" className="text-black px-3 py-2">Home</a>
          <a href="#" className="text-black px-3 py-2">About</a>
          <a href="#" className="text-black px-3 py-2">Services</a>
          <a href="#" className="text-black px-3 py-2">Contact</a>
        </div>

        {/* Wallet Connect button */}
        <div className="md:flex items-center">
          <button className="hidden md:block bg-[#fff] border-2 border-[#000] rounded-full hover:bg-blue-600 text-black font-bold py-2 px-4 ">
            Wallet Connect
          </button>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="md:hidden bg-gray-800 px-2 pt-2 pb-3 space-y-1"
          >
            <a href="#" className="text-black block px-3 py-2">Home</a>
            <a href="#" className="text-black block px-3 py-2">About</a>
            <a href="#" className="text-black block px-3 py-2">Services</a>
            <a href="#" className="text-black block px-3 py-2">Contact</a>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
