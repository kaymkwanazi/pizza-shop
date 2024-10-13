import React, {useEffect, useState} from 'react'
import pizzaPic from '../images/pizzaMenu.jpg'
import pasta from '../images/pasta-top.png'
import pizzaTop from '../images/top-pizza.png'
import dessert from '../images/dessert-2.jpg'
import menuData from '../../Database/menu.json'
import { MenuComp } from '../components/MenuComp'
import { useNavigate } from 'react-router-dom'

export const OurMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [menu, setMenu] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (Array.isArray(menuData.menu)) {
      setMenu(menuData.menu);
    }
  }, []);
  console.log('Menu data:',menuData);

  //handle category filter
  const handleCategoryChange = (e) => {
    setMenu(e.target.value);
  };

  const filteredMenu = selectedCategory === 'All' 
  ? menu
  : menu.filter((menuCategory) => menuCategory.category === selectedCategory);

  console.log('filtered', filteredMenu);
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
            <div className='text-center cursor-pointer'>
              <div className='size-20 md:size-56 bg-cover bg-center rounded-full'
                style={{backgroundImage:`url(${pizzaTop})`}}></div>
                <p className='mt-2 text-lg text-blue-600 font-bold'>PIZZA</p>
                
            </div>
            <div className='text-center cursor-pointer'>
              <div className='size-20 md:size-56 bg-cover bg-center rounded-full'
                style={{backgroundImage:`url(${pasta})`}}></div>
                <p className='mt-2 text-lg text-blue-600 font-bold'>PASTA</p>
                
            </div>
            <div className='text-center cursor-pointer'>
              <div className='size-20 md:size-56 bg-cover bg-center rounded-full'
                style={{backgroundImage:`url(${dessert})`}}></div>
                <p className='mt-2 text-lg text-blue-600 font-bold'>DESSERT</p>
                
            </div>
        </div>
        <div className='pl-5'>
          {/* category filter */}
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value='All'>All</option>
            <option value='Pasta'>Pasta</option>
            <option value='Pizza'>Pizza</option>
            <option value='Dessert'>Dessert</option>
            
          </select>

          {/* displaying filtered menu */}
        {Array.isArray(filteredMenu) && filteredMenu.length > 0 ? (
          filteredMenu.map((menuCategory) => (
          <div key={menuCategory.category}>
            <h2>{menuCategory.category}</h2>
            <p>{menuCategory.description}</p>
            {Array.isArray(menuCategory.items) && menuCategory.items.map((item) => (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <img src={item.imageUrl} alt={item.name} style={{ width: '150px' }} />
                <ul>
                  {Array.isArray(item.ingredients) && item.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          ))
        ) : (
          <p>No items found for this category.</p>
        )}
      </div>
        
      </div>
    </div>
    
    <MenuComp />
  </>
  )
}

