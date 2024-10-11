import React from 'react'
import { useLocation } from 'react-router-dom'

export const IngredientsList = () => {
  const location = useLocation();
  const {item} = location.state;

  return (
    <div className='container mx-auto px-4 mt-5'>
      <h1 className='text-4xl font-bold mb-5'>{item.name}</h1>
      <h2 className='text-2xl font-semibold mb-3'>Ingredients</h2>
      <ul>
        {item.ingredients.map((ingredients, index) => (
          <li key={index}>{ingredients}</li>
        ))}
      </ul>
        
    </div>
  )
}
