import React from 'react';
import ProductInfo from './productInfo.jsx'

const ProductGrid = (props) => {
  return (
    <div>
      {Object.entries(props.shopProducts).map((item, key) => {
        return (
          <div className="productGrid">
            <ProductInfo prodInfo={item} />
          </div>
        );
      })}
  </div>
  )
}

export default ProductGrid;