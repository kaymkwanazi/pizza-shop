import React from 'react'

export const TestAPI = () => {
    // const fetch = require('node-fetch');

const url = 'https://pizza-and-desserts.p.rapidapi.com/pizzas/1';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'd6bed46b05msh14085a441ed3af2p14da66jsnd25b01121073',
    'x-rapidapi-host': 'pizza-and-desserts.p.rapidapi.com'
  }
};

try {
	const response =  fetch(url, options);
	const result =  response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
  return (
    <div>

    </div>
  )
}
