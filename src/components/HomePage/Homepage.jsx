import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../Product/Product';

export const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect (() => {
    fetch('https://apps.kodim.cz/react-2/xxxmuck/products')
    .then((response) => response.json()
    .then((data) => setProducts(data);
    
  }, [])

    return (
      <>
        <div className='intro-text'>
          <h1>XXXMuck</h1>
          <p>Nejnovější nové produkty od předních českých designérů.</p>
          <p>Doprava zdarma až k vám domů, na cenu nehleďte.</p>
        </div>
        <div className='product-list'>
          {products.map((product)=> <Product key={product.id} name={product.name}
        image={product.image}/>)} 
        </div>
      </>
    )

};