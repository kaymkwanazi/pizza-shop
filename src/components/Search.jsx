import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DialogForm from './DialogForm';

export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);

    const handleSearch = () => {
        const result = menuData.products.filter((product) =>
            product.category.toLowerCase().includes(searchQuery.toLowerCase())
          );
    };

    const filteredResults = data.filter(item => 
        item.name.toLowerCase() === searchQuery.toLowerCase() ||
        item.country.toLowerCase() === searchQuery.toLowerCase()
    );
    
    const Count = filteredResults && filteredResults.length;

    return (
      <>
       {Count === 1 && (
            <DialogForm data={filteredResults} />
        )}
        <div className='flex items-center'>
            <input
                type='text'
                placeholder='Search destination'
                className='px-4 py-2 border rounded-l-full focus:outline-none'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
                className='border-cyan-600 rounded-r-full font-semibold px-5 py-2 bg-cyan-600 hover:bg-cyan-700'
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
        </>
    );
};
