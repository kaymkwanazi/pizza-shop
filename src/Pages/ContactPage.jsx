import React from 'react'
import pizzaCont from '../images/pizza-home.jpg'

export const ContactPage = () => {
  return (
    <>
    <div className='relative h-screen bg-cover bg-center' 
      style={{backgroundImage:`url(${pizzaCont})`}}>
      <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
        <h1 className='text-2xl md:text-6xl font-bold text-white'>CONTACT</h1>
        </div>
    </div>
    </>
    
  )
}
