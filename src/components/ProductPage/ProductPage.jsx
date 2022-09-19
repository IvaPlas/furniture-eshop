import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetail } from '../ProductDetail/ProductDetail';

export const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`https://apps.kodim.cz/react-2/xxxmuck/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <div className="product-detail">
        <ProductDetail product={product} />
      </div>
    </>
  );
};
