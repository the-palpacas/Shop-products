import React from 'react';
import ProductInfo from './productInfo.jsx'

const ProductGrid = function(props) {
  return (
    <div>
      <div className="productGrid">
        <ProductInfo />
        <ProductInfo />
      </div>
      <div className="productGrid">
      <ProductInfo />
      <ProductInfo />
    </div>
    <div className="productGrid">
      <ProductInfo />
      <ProductInfo />
    </div>
  </div>
  )
}

export default ProductGrid;
