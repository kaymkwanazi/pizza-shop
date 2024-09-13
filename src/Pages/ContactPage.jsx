import React from 'react'
import pizzaCont from '../images/pizza-home.jpg'
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaLocationDot, FaLocationPin, FaPhone } from 'react-icons/fa6'

export const ContactPage = () => {
  return (
    <>
    <div className='relative min-h-screen bg-cover bg-center' 
      style={{backgroundImage:`url(${pizzaCont})`}}>
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
            <h1 className='text-2xl md:text-6xl font-bold text-white'>CONTACT</h1>
            <p className='text-white mt-10 text-xl'> At The Pizza Shop, we are always looking for ways to improve to ensure you get the best service.
            </p>
        </div>
    </div>
        
        <div className='flex justify-center pb-20 bg-slate-200'>
            <div className='bg-white border px-10 py-10 rounded-2xl mt-10'>
                <div className='flex flex-col'>
                    <h1 className='text-2xl font-bold text-gray-700 mb-5 ml-5'>PRESS INQUIRIES</h1>
                    <p className='mb-5 ml-5'>Reach out to us, we're dying to hear from you today</p>
                        <div className='ml-5 mt-10'>
                            <p className='pb-5'><FaEnvelope className='inline text-2xl'/> info@thepizzashop.co.za</p>
                            <p className='pb-5'><FaPhone className='inline text-2xl'/> +27 12 459 2652</p>
                            <p className='pb-5'><FaLocationDot className='inline text-2xl'/> 125 Church street, Pretoria CBD</p>
                        </div>
                        <div className='ml-5 mt-10'>
                            <h1 className='text-2xl font-bold text-gray-700'>STAY CONNECTED WITH US</h1>
                            <div className='flex gap-5 mt-5 mb-5'>
                                <FaTwitter size={32} />
                                <FaFacebook size={32}/>
                                <FaInstagram size={32} />
                                <FaYoutube size={36}/>
                            </div>
                        </div>                  
                </div>
            </div>
        </div>
    
    
    </>
    
  )
}
