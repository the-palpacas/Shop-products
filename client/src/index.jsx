import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap';
import ShopInfo from './components/shopInfo.jsx';
import SearchBar from './components/searchBar.jsx';

var axios = require('axios');

class ShopProducts extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className="shopProductsContainer">
        <ShopInfo />
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(<ShopProducts />, document.getElementById('shopProducts'));
