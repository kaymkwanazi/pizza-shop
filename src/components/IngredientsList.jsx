import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const IngredientsList = () => {
  const location = useLocation();
  const {item} = location.state;

  return (
  <>

    <div className='bg-no-repeat bg-cover' 
        style={{backgroundImage: `url(${item.imageUrl})`}}>
      <div className="bg-black bg-opacity-60 flex flex-col items-center justify-center text-white">
        <h1 className=' text-4xl font-bold mb-5 mt-10'>{item.name}</h1>
          <h2 className='flex justify-center items-center text-3xl font-semibold pb-5'>Ingredients</h2>
          <ul className='flex flex-col justify-center items-center mb-10 font-semibold'>
            {item.ingredients.map((ingredients, index) => (
              <li key={index}>{ingredients}</li>
            ))}
          </ul>
       
        <div className='flex items-center justify-center pb-7 cursor-pointer transform transition duration-300 hover:scale-110'>
          <Link to = '/menu'>
              <button className='bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full text-sm text-white'>Back</button>
          </Link>
        </div> 
      </div> 
      
    </div>
     



   </>
  )
}
