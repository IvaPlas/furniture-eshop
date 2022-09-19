import React, { useEffect, useState } from 'react';
import { Product } from '../Product/Product';

export const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://apps.kodim.cz/react-2/xxxmuck/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="intro-text">
        <h1>Aktuální nabídka</h1>
        <p>Nejnovější nové produkty od předních českých designérů.</p>
        <p>Doprava zdarma až k vám domů, na cenu nehleďte.</p>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
