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
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);

  };
  console.log('selected category', selectedCategory);

  const filteredMenu = selectedCategory === 'All' 
  ? menu
  : menu.filter((selectedCategory) => menuData.category === selectedCategory);

  console.log('filtered menu', filteredMenu);

  const handleItemClick = (item) => {
    navigate(`/ingredientsList/${item.id}`, {state: {item}})
  };
  
  return (
    <>
    <div className='relative h-96 bg-cover bg-center' 
      style={{backgroundImage:`url(${pizzaPic})`}}>
      <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
        <h1 className='text-6xl font-bold text-white'>MENU</h1>
      
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
      </div>
    </div>
      <div className=''>
          {/* displaying filtered menu */}
        {Array.isArray(menu) && menu.length > 0 &&  (
          menu.map((menuCategory) => (
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
      )}
      </div>
   {/* Search and filtering */}
    <div className='flex justify-center space-x-5 pt-64 pb-10'>
        <h2 className='text-lg'>Filter</h2>
        <select value={selectedCategory} onChange={handleCategoryChange} className='border-2'>
          <option value='All'>All</option>
            <option value='Pasta'>Pasta</option>
            <option value='Pizza'>Pizza</option>
            <option value='Dessert'>Dessert</option>  
          </select>
            <input type='text' placeholder='search item' className=' pl-2 rounded-full border-2'/>
            
    </div>
    <MenuComp selectedCategory={selectedCategory}/>
  </>
  )
}

