import React from 'react';
import ProductInfo from './productInfo.jsx';

const ProductGrid = (props) => {
  return (
    <div>
      {Object.entries(props.shopProducts).map((item, index) => {
        return (
          <div className="productGrid" key={index.toString()} >
            <ProductInfo prodInfo={item} />
          </div>
        );
      })}
    </div>
  );
}

export default ProductGrid;
