import React from 'react'
import Pizza2 from '../images/pizzaMenu.jpg'
import Founder from '../images/founder.jpeg'
import { MdOutlineLocalPizza, MdOutlineStorefront } from "react-icons/md";
import { IoReceiptSharp } from "react-icons/io5";

export const About = () => {
  return (
  <>
    <div className='relative h-screen bg-center bg-cover' 
        style={{backgroundImage: `url(${Pizza2})`}}>
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
          <h1 className='text-white font-bold text-8xl md:text-4xl'>ABOUT</h1> 
          <p className='text-white md:first-line:text-2xl text-center px-28 mt-20'>At The Pizza Shop, we are passionate about providing our customers with the most delicious and authentic Italian cuisine. 
            Our team of skilled chefs use only the freshest ingredients to create a menu of classic and unique dishes that will delight your taste buds. 
            From our homemade pasta and wood-fired pizzas to our selection of desserts, we strive to make every dining experience at The Pizzeria a memorable one. 
            We invite you to come and taste the difference for yourself.</p> 
         </div>  
    </div>

    <div className=' bg-slate-200'>
      <div className='container mx-auto px-4'>
        <h1 className='text-blue-700 font-bold text-2xl pt-10 mb-5'>OUR STORY</h1>
        <p className='font-bold text-3xl md:text-6xl mb-10'>FROM TRADITION TO INNOVATION</p>
        <div className='grid cols-1 md:grid-cols-2 space-x-10'>
            <div className='mb-10'>
              <img src= {Founder} className='w-full h rounded-2xl'></img>
              <p className='font-bold pt-3'>PATIENCE</p>
              <p>Founder of The Pizza Shop</p>
            </div>

          <div className='py-48'>
            <div>
                <h1 className='font-bold text-2xl mb-5'>OUR TRADITION</h1>
                <p className='mb-10'>The Pizza Shop was founded by two friends who shared a passion for pizza. 
                  They started experimenting with different doughs and sauces in a small kitchen. 
                  After many trials and errors, they finally found the perfect recipe and decided to open a pizzeria.
                  </p>
            </div>

            <div>
                <h1 className='font-bold text-2xl mb-5'>MODERN TWIST</h1>
                <p>As the years went by, The Pizza Shop became more and more popular. People came from all over the city to taste their delicious pizzas. 
                  They started to expand their menu, adding pasta dishes and desserts, and opened more locations. Today, 
                  The Pizza Shop is a beloved institution in the community, known for its authentic Italian cuisine and friendly service.
                  </p>
            </div>
        
        </div>
      </div>
    </div>
  </div>

  <div className='bg-purple-900 text-white rounded-xl mb-16'>
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='border border-purple-950 rounded-2xl bg-purple-950 mt-20 mb-20 px-10 py-10'>
          <h3 className='text-pink-200 font-bold text-2xl mb-5'>IN STORE</h3>
          <h3 className=' text-white font-bold text-3xl mb-10'>VISIT US</h3>
          <p className=' text-gray-300 mb-6'>At The Pizza Shop, we invite you to come and enjoy authentic Italian cuisine in our cozy and welcoming environment.</p>
          
          {/* Location section */}
          <div className='flex items-start mb-6 mt-16'>
            <MdOutlineStorefront className='text-pink-200 text-6xl mr-4'/>
            <div className='ml-5'>
              <h1 className='font-bold text-xl text-yellow-100 mb-3'>LOCATION</h1>
              <p className='text-gray-300'>Find the nearest location to enjoy our food.</p>
            </div>
          </div>  

           {/* Dine section */}
           <div className='flex items-start mt-10'>
            <MdOutlineLocalPizza className='text-pink-200 text-6xl mr-4'/>
            <div className='ml-5'>
              <h1 className='font-bold text-xl text-yellow-100 mb-3'>Dine-In</h1>
              <p className='text-gray-300 mb-5'>Enjoy your meal in our comfortable dining room.</p>
            </div>
           </div>
        </div>

      {/* 2nd column */}
        <div className='border border-purple-950 rounded-2xl bg-purple-950 mt-20 mb-20 px-10 py-10'>
          <h3 className='text-pink-200 font-bold text-2xl mb-5'>AT HOME</h3>
          <h3 className=' text-white font-bold text-3xl mb-10'>GET CREATIVE</h3>
          <p className=' text-gray-300 mb-6'>At The Pizza Shop, we want to inspire you to get creative with your cooking and try making your own pizzas at home.</p>
          
          {/* Location section */}
          <div className='flex items-start mb-6 mt-16'>
          <MdOutlineLocalPizza className='text-pink-200 text-6xl mr-4'/>
            <div className='ml-5'>
              <h1 className='font-bold text-xl text-yellow-100 mb-3'>Take-Out</h1>
              <p className='text-gray-300'>Grab a slice or two to go.</p>
            </div>
          </div>  

           {/*  */}
           <div className='flex items-start mt-10'>
            <IoReceiptSharp className='text-pink-200 text-6xl mr-4'/>
            <div className='ml-5'>
              <h1 className='font-bold text-xl text-yellow-100 mb-3'>Recipes</h1>
              <p className='text-gray-300 mb-5'>Try our authentic pizza recipes at home.</p>
            </div>
           </div>
        </div>

      </div>

    </div>

  </div>
     
  </>
  )
}
