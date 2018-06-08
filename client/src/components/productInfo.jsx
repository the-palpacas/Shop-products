import React from 'react';

const ProductInfo = (props) => {
  return (
    <div className="productInfo">
      <img className="img-thumbnail" src={props.prodInfo[1].imgs_url[0]} alt="" />
      <div>
        <div className="bold text-truncate" name="productName">{props.prodInfo[0]}</div>
        <div className="price" name="price">${props.prodInfo[1].price} <span className="shippingInfo">Free shipping</span></div>
      </div>
    </div>
  );
};

export default ProductInfo;
