import React from 'react'
import homeImg from '../images/pizza-home.jpg'
import pizza from '../images/pizza3.jpg'
import { Link } from 'react-router-dom'
import { Ingredients } from '../components/Ingredients'
import { Specialities } from '../components/Specialities'


export const Home = () => {
  return (
    <>
    
      <div className='flex items-center justify-center relative h-screen bg-cover bg-slate-200' style={{backgroundImage: `url(${pizza})`}}>
        <div className='absolute inset-0 bg-black bg-opacity-50'>
          <div className="absolute inset-0 flex items-center justify-center">
          <div className='text-center'>
            <h1 className='text-6xl md:text-6xl italic font-bold text-white mb-10'>The</h1>
            <h1 className='text-6xl md:text-9xl font-bold text-white mb-5'>PIZZA SHOP</h1>
            <p className='text-white font-semibold text-xl md:text-2xl'>Welcome to The Pizza Shop, where we are committed to deliever pizzas hot, fresh and deliciously to you.</p>
            <Link to='/menu'>
              <button className='text-white bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-2xl mt-10'>View our menu</button>
            </Link>
            <Link to = '/order'>
              <button className='border-2 bg-white hover:bg-slate-300 border-blue-700 px-5 py-3 ml-10 rounded-2xl mt-10'>Order Online Now</button>
            </Link>
            
          </div>
          </div>
        </div>
      </div>
      <Ingredients />
      <Specialities />
    </>
  )
}
