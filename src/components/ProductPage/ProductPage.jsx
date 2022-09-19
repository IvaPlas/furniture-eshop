import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetail } from '../ProductDetail/ProductDetail';

export const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState('loading');

  useEffect(() => {
    fetch(`https://apps.kodim.cz/react-2/xxxmuck/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="product-detail">
      {product === 'loading' ? (
        <p>loading...</p>
      ) : (
        <ProductDetail product={product} />
      )}
    </div>
  );
};
