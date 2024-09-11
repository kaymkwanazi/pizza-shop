import React from 'react'
import { Link } from 'react-router-dom'
import pasta from '../images/pasta-top.png'
import pizzaTop from '../images/top-pizza.png'
import dessert from '../images/dessert-2.jpg'

export const Specialities = () => {
  return (
    <div className='bg-slate-200 bg-opacity-50'>
        <div className='container mx-auto md:px-48 flex flex-col justify-center items-center'>
            <h1 className='text-lg font-bold text-blue-600 mt-20 mb-10'>OUR SPECIALITIES</h1>
            <h1 className='text-2xl md:text-6xl font-semibold text-blue-950 mb-10'>DISCOVER THE TASTE OF ITALY</h1>
            <p className='text-center mb-10 md:text-lg text-gray-400 '>At The Pizza Shop, we specialize in authentic italian cuisine. From homemade pasta to our firewood-fired pizzas, 
                every dish is made with care and the freshest ingredientes.
            </p>
            <Link to= '/menu'>
                <button className='text-white text-xs bg-blue-600 px-5 py-2 rounded-2xl mb-10'>VIEW ALL MENU</button>
            </Link>
        </div>
        <div className= 'container mx-auto px-20 pb-10'>
            <div className='grid cols-1 md:grid-cols-3 gap-14'>
                <div>
                    <img src={pasta} className='rounded-full size-60'></img>
                    <p className='text-2xl text-blue-700 font-bold ml-20 mt-5'>PASTA</p>
                    <p className='text-xs md:text-base mt-5'>Our homemade pasta is made with only the finest semolina flour and eggs for a taste 
                        that's truly authentic.
                    </p>
                </div>
                <div>
                    <img src={pizzaTop} className='rounded-full size-60'></img>
                    <p className='text-2xl text-blue-700 font-bold ml-20 mt-5'>PIZZA</p>
                    <p className='mt-5 mb-10 text-xs md:text-base'>Our wood-fired pizzas are made with homemade dough and sauce for a tastes 
                        that's trulu authentic.
                    </p>
                </div>
                <div>
                    <img src={dessert} className='rounded-full size-60'></img>
                    <p className='text-2xl text-blue-700 font-bold ml-20 mt-5'>DESERT</p>
                    <p className='mt-5 mb-10 text-xs md:text-base'>Our desserts are homemade with the freshest ingredients, including homemade cannoli shells, 
                        for a taste that's truly authentic.
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}
