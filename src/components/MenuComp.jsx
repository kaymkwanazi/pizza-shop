import React from 'react';
import Menu from '../../Database/menu.json';

export const MenuComp = () => {
  return (
    <div className="grid cols-1 gap-4 mt-80">
      <div className='container mx-auto px-4 border-y'>
      {Menu[0].menu.map((products, index) => (
        <div key={index} className="mb-8 p-4">
          <h2 className="text-4xl md:text-6xl text-blue-700 font-bold mb-4">{products.category}</h2>
          <p className="text-xl mb-20">{products.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {products.items.map((item) => (
              <div key={item.id} className="flex flex-col">
                <img src={item.imageUrl} alt={item.name} className="w-52 h-52 object-cover mb-4" />
                <h1 className="font-bold text-xl md:text-2xl mb-3">{item.name}</h1>
                <p className="mb-5 ">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};
