import React from 'react';

export const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="order">
        <h3>{product.name}</h3>
        <button>Objednat</button>
      </div>
    </div>
  );
};
