import React, {useEffect, useState} from 'react'
import pizzaPic from '../images/pizzaMenu.jpg'
import pasta from '../images/pasta-top.png'
import pizzaTop from '../images/top-pizza.png'
import dessert from '../images/dessert-2.jpg'
import axios from 'axios'
// import Menu from '../../Database/menu.json'
import { MenuComp } from '../components/MenuComp'

export const OurMenu = () => {
  // console.log(Menu[0]);
  
  return (
    <>
    <div className='relative h-96 bg-cover bg-center' 
      style={{backgroundImage:`url(${pizzaPic})`}}>
      <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
        <h1 className='text-2xl md:text-6xl font-bold text-white'>MENU</h1>
      
      <div className= 'absolute inset-0 flex justify-center items-center space-x-64 my-80 h-72'>
            <div className='text-center'>
              <div className='size-56 bg-cover bg-center rounded-full'
                style={{backgroundImage:`url(${pizzaTop})`}}></div>
                <p className='mt-2 text-lg text-blue-600 font-bold'>PIZZA</p>
                
            </div>
            <div className='text-center'>
              <div className='size-56 bg-cover bg-center rounded-full'
                style={{backgroundImage:`url(${pasta})`}}></div>
                <p className='mt-2 text-lg text-blue-600 font-bold'>PASTA</p>
                
            </div>
            <div className='text-center'>
              <div className='size-56 bg-cover bg-center rounded-full'
                style={{backgroundImage:`url(${dessert})`}}></div>
                <p className='mt-2 text-lg text-blue-600 font-bold'>DESSERT</p>
                
            </div>
        </div>
      </div>
    </div>
    <MenuComp />
   
   
    </>
  )
}

