import React from 'react'
import { CiPizza } from 'react-icons/ci'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaLocationDot, FaRegCopyright } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className=' bg-blue-900'>
      <div className='container mx-auto px-4'>
      <div className='grid cols-1 mb-5 space-y-0 md:grid-cols-2 gap-10 md:space-y-5'>
        <div>
          <p className='italic text-white text-xl md:text-2xl cursor-pointer mt-5'><CiPizza size={28} className='inline'/>Pizza-shop</p>
           <div className='text-white flex space-x-5 mt-5'>
              <FaTwitter size={28} />
              <FaFacebook size={28}/>
              <FaInstagram size={28} />
              <FaYoutube size={28} />
            </div>
            <div className='text-white mt-5 mb-5'>
              <p className='mb-3'><FaLocationDot className='inline'/> 125 Church street, Pretoria CBD</p>
              <p className='mb-3'><FaPhone className='inline' /> +27 12 459 2652</p>
              <p className='mb-3 '><FaEnvelope className='inline' /> info@thepizzashop.co.za</p>
            </div>
        </div>
        <div className='mt-5 font-bold text-center'>
        <Link to = '/' className='px-6 py-2 rounded-2xl hover:text-gray-300 text-white'>Home</Link>
        <Link to = '/menu' className='px-6 py-2 rounded-2xl hover:text-gray-300 text-white'>Menu</Link>
        <Link to = '/about' className='px-6 py-2 rounded-2xl hover:text-gray-300 text-white'>About</Link>
        <Link to = '/contact' className='px-6 py-2 rounded-2xl hover:text-gray-300 text-white'>Contact</Link>
        </div>
      </div>
      <div className='text-white border-t'>
        <p className='text-center text-sm p-2'><FaRegCopyright className='inline' /> The Pizza Shop. All rights reserved</p>
      </div>
      </div>
    </div>
  )
}
