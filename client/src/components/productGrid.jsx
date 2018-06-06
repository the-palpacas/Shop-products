import React from 'react';
import ProductInfo from './productInfo.jsx'

const ProductGrid = (props) => {
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
