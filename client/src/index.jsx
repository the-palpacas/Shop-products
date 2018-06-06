import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap';
import axios from 'axios';
import ShopInfo from './components/shopInfo.jsx';
import SearchBar from './components/searchBar.jsx';
import ProductGrid from './components/productGrid.jsx'


class ShopProducts extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className="shopProductsContainer">
        <ShopInfo />
        <SearchBar />
        <ProductGrid />
      </div>
    )
  }
}

ReactDOM.render(<ShopProducts />, document.getElementById('shopProducts'));
