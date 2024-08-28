// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <footer className="text-center md:text-left font-semibold mb-4 md:mb-0">
            <p>Copyright © 2023 Greenair Air Conditioning - All Rights Reserved.</p>
          </footer>
          <footer className="text-center md:text-right font-semibold mb-4 md:mb-0">
            <p>Designed by Adhere Creative</p>
          </footer>
        </div>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4 md:space-x-8">
            <li>
              <Link to="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-400">Services</Link>
            </li>
            <li>
              <Link to="/work" className="hover:text-gray-400">Our Work</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
