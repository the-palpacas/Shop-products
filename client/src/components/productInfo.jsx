import React from 'react';
import styled from 'styled-components';
// import $ from 'jquery';
import PhotoCarousel from './photoCarousel.jsx';

// const ProductInfoWrapper = styled.div`
//   top: 20px;
//   float: left;
//   width: 45%;
//   margin: 2.5%;
//   font-size: 14px;
// `

// const ProductName = styled.div`
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   padding-top: 8px;
//   text-align: left;
// `
// const Price = styled.div`
//   font-weight: bold; 
//   float: left;
//   padding-left: 3px;
//   text-align: left;
// `

const ProductInfo = (props) => {

  return (
    <div className="productInfoWrapper">
      <PhotoCarousel imgs_url={props.prodInfo[1].imgs_url} prodId={props.prodInfo[1].id} />
      <div>
        <div className="productName" title={props.prodInfo[0]}>{props.prodInfo[0]}</div>
        <div name="price">${props.prodInfo[1].price}</div>
      </div>
    </div>
  );
};

export default ProductInfo;

