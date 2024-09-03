import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6">
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm">
                &copy; 2023 Greenair Air Conditioning - All Rights Reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
            <nav className="">
          <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8 ">
            <li>
              <Link to="/" className="hover:text-gray-400 text-sm md:text-base">Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-400 text-sm md:text-base">Services</Link>
            </li>
            <li>
              <Link to="/work" className="hover:text-gray-400 text-sm md:text-base">Our Work</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400 text-sm md:text-base">Contact</Link>
            </li>
          </ul>
        </nav>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
