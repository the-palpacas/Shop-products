import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var axios = require('axios');

class ShopProducts extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div>
        Shop modules
      </div>
    )
  }
}

ReactDOM.render(<ShopProducts />, document.getElementById('shopProducts'));
