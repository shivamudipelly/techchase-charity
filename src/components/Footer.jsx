// components/Footer.js
import React from 'react';
import logo from '../images/logo.png'
const Footer = () => {
  return (
    <footer className="bg-green-800 m-4 text-white rounded-3xl overflow-hidden  pt-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Image Section */}
        <div className="flex items-center justify-center md:col-span-1">
          <img src={logo} alt="Company Logo" className="h-16" />
        </div>
        
        {/* Company Info Section */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold mb-2">Company</h2>
          <ul className="space-y-1">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold mb-2">Help</h2>
          <ul className="space-y-1">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold mb-2">Resources</h2>
          <ul className="space-y-1">
            <li>Free Ebooks</li>
            <li>Development Tutorials</li>
            <li>How-to Blog</li>
            <li>YouTube Playlist</li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold mb-2">Follow Us</h2>
          <ul className="flex flex-wrap justify-center md:justify-start gap-2 overflow-x-auto">
            <li>
              <i className="fab fa-facebook-f p-2 bg-white text-gray-800 rounded cursor-pointer"></i>
            </li>
            <li>
              <i className="fab fa-twitter p-2 bg-white text-gray-800 rounded cursor-pointer"></i>
            </li>
            <li>
              <i className="fab fa-instagram p-2 bg-white text-gray-800 rounded cursor-pointer"></i>
            </li>
            <li>
              <i className="fab fa-youtube p-2 bg-white text-gray-800 rounded cursor-pointer"></i>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 px-4 py-4 bg-gray-900 text-center space-y-4 md:space-y-0 md:flex md:justify-between md:items-center border-t border-gray-700">
        {/* Contact Info and Social Links */}
        <div className="text-sm">
          © 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
