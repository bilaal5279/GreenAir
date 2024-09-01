import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = ({ showMenu, active }) => {
  return (
    <div
      className={
        active
          ? 'fixed top-0 left-0 w-full h-full bg-white ease-in-out duration-300 z-10'
          : 'fixed top-0 left-[-100%] w-full h-full bg-white ease-in-out duration-300 z-10'
      }
    >
      <div className="flex justify-end p-1">
        <button onClick={showMenu} className="text-black text-3xl font-semibold">
          &times;
        </button>
      </div>
      <ul className="flex flex-col items-center gap-6 text-black text-xl font-medium mt-10">
        <li className="w-full text-center py-1">
          <Link to="/" onClick={showMenu}>
            Home
          </Link>
          <div className="w-3/4 h-[1px] bg-gray-300 mx-auto my-4"></div>
        </li>
        <li className="w-full text-center py-1">
          <Link to="/Services" onClick={showMenu}>
            Our Services
          </Link>
          <div className="w-3/4 h-[1px] bg-gray-300 mx-auto my-4"></div>
        </li>
        <li className="w-full text-center py-1">
          <Link to="/Work" onClick={showMenu}>
            About Us
          </Link>
          <div className="w-3/4 h-[1px] bg-gray-300 mx-auto my-4"></div>
        </li>
        <li className="w-full text-center py-1">
          <Link to="/Contact" onClick={showMenu}>
            Contact
          </Link>
          <div className="w-3/4 h-[1px] bg-gray-300 mx-auto my-4"></div>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
