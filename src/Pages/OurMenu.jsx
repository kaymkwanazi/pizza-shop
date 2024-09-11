import React, {useEffect, useState} from 'react'
import pizzaPic from '../images/pizzaMenu.jpg'
import pasta from '../images/pasta-top.png'
import pizzaTop from '../images/top-pizza.png'
import dessert from '../images/dessert-2.jpg'
import axios from 'axios'

export const OurMenu = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    axios.get('/menu.json')
      .then(response => {
        console.log(response.data);
        setMenuData(response.data);
      })

      .catch(error => console.error('Error fetching the menu data:', error));
  }, []);
  
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

    {/* Menu */}
    <div className='container mx-auto px-4 my-80'>
      <div className='border-y'>
        <div className='container mx-auto md:pr-96'>
          <h1 className='text-6xl md:text-4xl text-blue-700 font-bold mt-20 mb-5'>PASTA</h1>
          <p className='text-base md:text-lg mb-20'>At The Pizza Shop, we take pride in our homemade pasta dishes made with only the freshest ingredients. 
            From classic spaghetti to more unique pasta creations, our menu has something for everyone to enjoy.</p>
          <div>
          {menuData.map((category, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
          <ul className="list-disc list-inside">
            {category.items.map((item, idx) => (
              <li key={idx} className="ml-4">
                <span className="font-semibold">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
          </div>
        </div>

      </div>
    </div>
   
    </>
  )
}

