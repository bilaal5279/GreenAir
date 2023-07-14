import { Close } from '@mui/icons-material'
import React from 'react'
import { Link } from "react-router-dom";
const MenuItems = ({showMenu,active}) => {
  const gradientStyle = {
    background:
      'white',
    color: 'black',
  };
  return (
    <div className='text-bold z-10'> 
            <ul style={gradientStyle} className={active ?  ' text-bold flex-col flex items-center fixed inset-0 left-1/4 uppercase  bg-opacity-30 	bg-blur-20 gap-8 p-8 justify-center md:hidden'  : 'hidden' }>
            <Close onClick={showMenu} className="cursor-pointer"/>
            <li ><Link to ="/" className="hover:underline">Home</Link></li>
            <li><Link to ="/services" className="hover:underline">Services</Link></li>
            <li><Link to ="/Work" className="hover:underline">Our work</Link></li>
            <li><Link to ="/Contact" className="hover:underline">Contact</Link></li>
          </ul>
          </div>
  )
}

export default MenuItems