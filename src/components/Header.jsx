import React, { useState } from 'react';
import logo from '../images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center  w-20 h-20 ">
            <img src={logo} alt="Logo" className="object-cover" />
          </div>
          <nav className="hidden md:flex ml-10 space-x-4">
            <a className="text-gray-600 hover:text-gray-800" href="#home">
              Home
            </a>
            <a className="text-gray-600 hover:text-gray-800" href="#about">
              About Us
            </a>
            <a className="text-gray-600 hover:text-gray-800" href="#contact">
              Contact Us
            </a>
            <a className="text-gray-600 hover:text-gray-800" href="#blog">
              Blog
            </a>
            <a className="text-white bg-green-400  px-4 py-2 rounded hidden md:block hover:bg-green-800" href="/products">
              Product Page
            </a>
          </nav>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded hidden md:block">
          Donate
        </button>
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex justify-between items-center p-4">
            <nav className="flex flex-col space-y-2">
              <a className="text-gray-600 hover:text-gray-800" href="#home">
                Home
              </a>
              <a className="text-gray-600 hover:text-gray-800" href="#about">
                About Us
              </a>
              <a className="text-gray-600 hover:text-gray-800" href="#contact">
                Contact Us
              </a>
              <a className="text-gray-600 hover:text-gray-800" href="#blog">
                Blog
              </a>
            </nav>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">
              Donate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
