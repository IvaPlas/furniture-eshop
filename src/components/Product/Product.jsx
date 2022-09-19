import React from 'react';
import { Link } from 'react-router-dom';

export const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.name} />
      <h3 className="product-name">{product.name}</h3>
    </Link>
  );
};
