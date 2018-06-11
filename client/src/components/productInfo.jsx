import React from 'react';
import PhotoCarousel from './photoCarousel.jsx';
import $ from 'jquery';

const ProductInfo = (props) => {
  $(() => {
    $('[data-toggle="tooltip"]').tooltip({
      trigger: 'hover',
      delay: { "show": 500, "hide": 100 }
    });
  });

  return (
    <div className="productInfo">
      <PhotoCarousel imgs_url={props.prodInfo[1].imgs_url} prodId={props.prodInfo[1].id} />
      <div>
        <div className="text-truncate" data-toggle="tooltip" data-placement="right" title={props.prodInfo[0]} name="productName">{props.prodInfo[0]}</div>
        <div className="bold price" name="price">${props.prodInfo[1].price} <span className="shippingInfo">Free shipping</span></div>
      </div>
    </div>
  );
};

export default ProductInfo;

