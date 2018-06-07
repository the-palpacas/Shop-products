import React from 'react';

const ShopInfo = (props) => {
  return (
    <div className="shopInfo">
      <img className="img-rounded" src={props.info.shop_image_url}/> 
      <div className="bold">{props.info.name}</div>
      <div className="shopLocation">{props.info.city}, {props.info.state}</div>
    </div>
  )
}

export default ShopInfo;

