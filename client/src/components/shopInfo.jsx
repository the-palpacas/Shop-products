import React from 'react';
import styled from 'styled-components';

const ShopInfoWrapper = styled.div`
  left: 50%;
  font-size: 18px;
`

const ShopLogo = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`
const ShopName = styled.div`
  font-weight: bold; 
`

const ShopLocation = styled.div`
  font-size: 14px;
  color: gray;
`

const ShopInfo = (props) => { 
  return (
    <ShopInfoWrapper>
      <ShopLogo src={props.info.shop_image_url} alt="" />
      <ShopName>{props.info.name}</ShopName>
      <ShopLocation className="shopLocation">{props.info.city}, {props.info.state}</ShopLocation>
    </ShopInfoWrapper>
  );
};

export default ShopInfo;

