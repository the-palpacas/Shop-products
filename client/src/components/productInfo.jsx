import React from 'react';

const ProductInfo = (props) => {
  return(
    <div className="productInfo">
      <img className="img-thumbnail" src="https://s3-us-west-1.amazonaws.com/shopsproductsphotos/img104.jpg" />
      <div>
        <div className="bold" name="productName">Dog painting</div>
        <div className="price" name="price">$300.99 <span className="shippingInfo">Free shipping</span></div>
      </div>
    </div>
  )
}

export default ProductInfo;
