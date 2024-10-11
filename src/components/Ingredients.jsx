import React from 'react'
import pizza from '../images/pizza2.jpg'
import vegetables from '../images/veges-2.jpg'
import sauce from '../images/pizza-sauce.jpg'

export const Ingredients = () => {
  return (
    
        <div className='container mx-auto px-20  flex justify-center items-center'>
            <div className='grid cols-1 md:grid-cols-3 gap-20 mt-20 mb-20'>
                <div>
                    <img src={vegetables} className='rounded-full size-56' ></img>
                    <h3 className='text-2xl text-blue-700 font-bold ml-10 mt-5 mb-5'>Fresh Vegetables</h3>
                    <p className='text-xs md:text-base mt-5'>We use the freshest vegetables for our toppings to give you the most flavourful and healthy options.</p>
                </div>
                <div>
                    <img src={pizza} className='rounded-full size-56' ></img>
                    <h3 className='text-2xl text-blue-700 font-bold ml-20 mt-5 mb-5'>Pizza</h3>
                    <p className='text-xs md:text-base mt-5'>Our pizzas are made from only the finest ingredients, including homemade dough and sauce, to give you an authentic pizza experience.</p>
                </div>
                <div>
                    <img src={sauce} className='rounded-full size-56' ></img>
                    <h3 className='text-2xl text-blue-700 font-bold ml-16 mt-5 mb-5'> Pizza Sauce</h3>
                    <p className='text-xs md:text-base mt-5'>Our homemade pizza sauce is made with the freshest tomatoes, herbs, and spices for a taste you won't find anywhere else.</p>
                </div>

            </div>
        </div>
    
  )
}
