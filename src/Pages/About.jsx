import React from 'react'
import Pizza2 from '../images/pizzaMenu.jpg'
import Founder from '../images/founder.jpeg'

export const About = () => {
  return (
  <>
    <div className='relative h-screen bg-center bg-cover' 
        style={{backgroundImage: `url(${Pizza2})`}}>
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
          <h1 className='text-white font-bold text-8xl md:text-4xl'>ABOUT</h1> 
          <p className='text-white text-2xl text-center px-28 mt-20'>At The Pizza Shop, we are passionate about providing our customers with the most delicious and authentic Italian cuisine. 
            Our team of skilled chefs use only the freshest ingredients to create a menu of classic and unique dishes that will delight your taste buds. 
            From our homemade pasta and wood-fired pizzas to our selection of desserts, we strive to make every dining experience at The Pizzeria a memorable one. 
            We invite you to come and taste the difference for yourself.</p> 
         </div>  
    </div>

    <div className=' bg-slate-200'>
      <div className='container mx-auto px-4 py-5'>
        <h1 className='text-blue-700 font-bold text-2xl mt-20 mb-5'>OUR STORY</h1>
        <p className='font-bold text-6xl mb-10'>FROM TRADITION TO INNOVATION</p>
        <div className='grid cols-1 md:grid-cols-2 space-x-5'>
            <div>
              <img src= {Founder} className='w-full h-3/5 mt-10 '></img>
              <p className='font-bold mt-5'>PATIENCE</p>
              <p>Founder of The Pizza Shop</p>
            </div>

          <div className='mt-10'>
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
  <div className='bg-purple-700'>
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='border border-purple-900 rounded-lg bg-purple-900 mt-20 mb-20 px-10 py-10'>
          <h3 className='text-purple-400 font-bold text-2xl mb-5'>IN STORE</h3>
          <h3 className='text-slate-400 font-bold text-3xl mb-10'>VISIT US</h3>
          <p className=' text-white mb-10'>At The Pizza Shop, we invite you to come and enjoy authentic Italian cuisine in our cozy and welcoming environment.</p>

        </div>

      </div>

    </div>

  </div>
     
  </>
  )
}
