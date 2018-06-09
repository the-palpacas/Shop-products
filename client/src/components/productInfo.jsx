import React from 'react';
import PhotoCarousel from './photoCarousel.jsx';

function ProductInfo(props) {
  return (
    <div className="productInfo">
      <PhotoCarousel imgs_url={props.prodInfo[1].imgs_url} prodId={props.prodInfo[1].id} />
      <div>
        <div className="bold text-truncate" name="productName">{props.prodInfo[0]}</div>
        <div className="price" name="price">${props.prodInfo[1].price} <span className="shippingInfo">Free shipping</span></div>
      </div>
    </div>
  );
}

export default ProductInfo;

