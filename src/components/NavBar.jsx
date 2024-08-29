import React, { useState } from 'react';
import MenuItems from './MenuItems';
import { MenuOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => setActive(!active);

  return (
    <nav className="fixed w-full bg-white z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/qt=q_95.webp" alt="Greenair logo" className="h-12 pr-3" />
          <h1 className="text-3xl font-semibold text-bold">GREENAIR</h1>
        </div>
        <div className="md:hidden">
          <MenuOutlined onClick={showMenu} className="cursor-pointer text-4xl" />
        </div>
        <ul className="hidden md:flex font-light gap-8 text-bold mt-2">
          <li>
            <Link to="/" className="hover:underline hover:opacity-50">Home</Link>
          </li>
          <li>
            <Link to="/Services" className="hover:underline hover:opacity-50">Services</Link>
          </li>
          <li>
            <Link to="/Work" className="hover:underline hover:opacity-50">Our Work</Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:underline hover:opacity-50">Contact</Link>
          </li>
        </ul>
      </div>
      <MenuItems showMenu={showMenu} active={active} />
    </nav>
  );
};

export default NavBar;
