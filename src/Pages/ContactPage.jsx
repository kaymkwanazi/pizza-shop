import React from 'react'
import pizzaCont from '../images/pizza-home.jpg'
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaLocationDot, FaLocationPin, FaPhone } from 'react-icons/fa6'

export const ContactPage = () => {
  return (
    <>
    <div className='relative h-fit bg-cover bg-center' 
      style={{backgroundImage:`url(${pizzaCont})`}}>
        <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center'>
            <h1 className='text-6xl font-bold text-white pt-20'>CONTACT US</h1>
           
        </div>
        <div className='relative flex justify-center items-center pt-20'>
            <div className='text-white px-10 py-10 rounded-2xl mt-28'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-2xl font-bold mb-3'>INQUIRIES</h1>
                    <p className='text-xl mb-5'>Visit us today or reach out to place your oder online.</p>
                        <div className='text-xl ml-5 mt-5'>
                            <p className='pb-5'><FaEnvelope className='inline text-2xl'/> info@thepizzashop.co.za</p>
                            <p className='pb-5'><FaPhone className='inline text-2xl'/> +27 12 459 2652</p>
                            <p className='pb-5'><FaLocationDot className='inline text-2xl'/> 125 Church street, Pretoria CBD</p>
                        </div>
                        <div className='ml-5 mt-10'>
                            <h1 className='text-2xl font-bold'>STAY CONNECTED WITH US</h1>
                            <div className='flex justify-center gap-5 mt-5 mb-5'>
                                <FaTwitter size={36} />
                                <FaFacebook size={36}  /> 
                                <FaInstagram size={36}/>
                                <FaYoutube size={36} />
                            </div>
                        </div>                  
                </div>
            </div>
        </div>
    </div>
        
        
    
    
    </>
    
  )
}
