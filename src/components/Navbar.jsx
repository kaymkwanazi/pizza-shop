import React, {useState, useEffect} from 'react'
import { CiPizza } from "react-icons/ci";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
   <nav className='z-50 w-full bg-slate-600'>
    <div className='container px-2 flex justify-between items-center h-16'>
      <Link to='/'>
        <p className='italic text-white md:text-2xl cursor-pointer'><CiPizza size={28} className='inline'/>Pizza-shop</p>
      </Link>
      <div className='hidden md:flex items-center justify-center space-x-5 text-sm font-bold'>
        <Link to = '/' className='px-6 py-2 rounded-2xl hover:bg-blue-600 text-white'>Home</Link>
        <Link to = '/menu' className='px-6 py-2 rounded-2xl hover:bg-blue-600 text-white'>Menu</Link>
        <Link to = '/about' className='px-6 py-2 rounded-2xl hover:bg-blue-600 text-white'>About</Link>
        <Link to = '/contact' className='px-6 py-2 rounded-2xl hover:bg-blue-600 text-white'>Contact</Link>
      </div>
    </div>
    <div className='md:hidden text-white flex items-center'>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
    {isOpen && (
      <div className='md:hidden flex flex-col space-y-6 py-20 bg-white items-center'>
        <Link to = '/' className='px-6 py-2 rounded-2xl hover:bg-blue-600 '>Home</Link>
        <Link to = '/menu' className='px-6 py-2 rounded-2xl hover:bg-blue-600 '>Menu</Link>
        <Link to = '/order' className='px-6 py-2 rounded-2xl hover:bg-blue-600 '>Online Orders</Link>
        <Link to = '/about' className='px-6 py-2 rounded-2xl hover:bg-blue-600 '>About</Link>
        <Link to = '/contact' className='px-6 py-2 rounded-2xl hover:bg-blue-600 '>Contact</Link>
      </div>
    )}
    
   </nav>
  )
}
