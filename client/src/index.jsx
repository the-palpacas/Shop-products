import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ShopInfo from './components/shopInfo.jsx'
import axios from 'axios';


class ShopProducts extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div>
        <ShopInfo />
      </div>
    )
  }
}

ReactDOM.render(<ShopProducts />, document.getElementById('shopProducts'));
