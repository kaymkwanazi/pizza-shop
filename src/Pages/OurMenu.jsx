import React, {useEffect, useState} from 'react'
import pizzaPic from '../images/pizzaMenu.jpg'
import pasta from '../images/pasta-top.png'
import pizzaTop from '../images/top-pizza.png'
import dessert from '../images/dessert-2.jpg'
import axios from 'axios'
import menuData from '../../Database/menu.json'
import { MenuComp } from '../components/MenuComp'
import { useNavigate } from 'react-router-dom'

export const OurMenu = () => {
  console.log(menuData);

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredProducts = menuData?.products?.filter((product) =>
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  
  };

  const handleItemClick = (item) => {
    navigate(`/ingredientsList/${item.id}`, {state: {item}})
  };
  
  return (
    <>
    <div className='relative h-96 bg-cover bg-center' 
      style={{backgroundImage:`url(${pizzaPic})`}}>
      <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
        <h1 className='text-2xl md:text-6xl font-bold text-white'>MENU</h1>
      
      <div className= 'absolute inset-0 flex justify-center items-center space-x-28 md:space-x-64 my-80 h-56 md:h-72'>
            <div className='text-center'>
              <div className='size-20 md:size-56 bg-cover bg-center rounded-full'
                style={{backgroundImage:`url(${pizzaTop})`}}></div>
                <p className='mt-2 text-lg text-blue-600 font-bold'>PIZZA</p>
                
            </div>
            <div className='text-center'>
              <div className='size-20 md:size-56 bg-cover bg-center rounded-full'
                style={{backgroundImage:`url(${pasta})`}}></div>
                <p className='mt-2 text-lg text-blue-600 font-bold'>PASTA</p>
                
            </div>
            <div className='text-center'>
              <div className='size-20 md:size-56 bg-cover bg-center rounded-full'
                style={{backgroundImage:`url(${dessert})`}}></div>
                <p className='mt-2 text-lg text-blue-600 font-bold'>DESSERT</p>
                
            </div>
        </div>
        
        
    </div>
    </div>
    <div className="grid cols-1 gap-4 mt-80">
         <div className="container mx-auto px-4 border-y mb-36">
        {/* Search bar */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by category..."
          className="w-full p-3 mb-6 border rounded-md"
        />

        {/* Filtered products based on the search query */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={index} className="mb-8 p-4">
              <h2 className="text-4xl md:text-6xl text-blue-700 font-bold mb-4">
                {product.category}
              </h2>
              <p className="text-xl mb-20">{product.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {product.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col cursor-pointer bg-cover bg-center h-52 mb-4 transform transition"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center">
                      <h1 className="font-bold text-xl md:text-2xl mb-3 text-white">
                        {item.name}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl text-gray-600">No categories found.</p>
        )}
      </div>
    </div>
    <MenuComp products={filteredProducts} onItemClick= {handleItemClick} />
   
   
  </>
  )
}

