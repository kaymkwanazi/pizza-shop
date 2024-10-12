import React, {useState} from 'react'
import pizzaPic from '../images/pizzaMenu.jpg'
import pasta from '../images/pasta-top.png'
import pizzaTop from '../images/top-pizza.png'
import dessert from '../images/dessert-2.jpg'
import menuData from '../../Database/menu.json'
import { MenuComp } from '../components/MenuComp'
import { useNavigate } from 'react-router-dom'

export const OurMenu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState (menuData.products);
  const navigate = useNavigate();

  console.log('Menu data:',menuData);

  const handleSearch = () => {
    if (menuData?.products?.length) {
      const result = menuData.products.filter((product) =>
        product.category.toLowerCase() === 'pizza'
      );
      setFilteredProducts(result);
      console.log('filtered results', result)

    }   
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(event.target.value);

    console.log('search query', value)
  
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
    <div className="grid cols-1 gap-4 mt-52 md:mt-64">
         <div className="container mx-auto px-4 flex items-center justify-center">
        {/* Search bar */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by category..."
          className="w-72 p-3 border rounded-l-xl"
        />
        <button onClick={handleSearch}
          className='bg-blue-500 text-white p-3 rounded-r-xl'> Search </button>

        {/* Filtered products based on the search query */}
        {filteredProducts?.length > 0 ? (
          <MenuComp products={filteredProducts} onItemClick= {handleItemClick} />
        ) : (
          <p className='pl-3 text-sm'>No products found</p>
        )}
      </div>
    </div>
    <MenuComp products={filteredProducts} onItemClick= {handleItemClick}/>
  </>
  )
}

