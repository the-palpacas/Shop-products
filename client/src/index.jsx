import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap';
import axios from 'axios';
import ShopInfo from './components/shopInfo.jsx';
import SearchBar from './components/searchBar.jsx';
import ProductGrid from './components/productGrid.jsx';


class ShopProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopInfo: null,
      shopProducts: {}
    }
  }

  componentDidMount() {
    console.log(`${window.location.href}shopproducts`)
    axios.get(`${window.location.href}shopproducts`)
    .then(response => {
    let products = response.data[1];
    let sortByProductsId = {};
    products.forEach((item)=>{
      let prodName = item.name;
    
      sortByProductsId[prodName]
      ? sortByProductsId[prodName].imgs_url.push(item.image_url)
      : sortByProductsId[prodName] = {
        id: item.id,
        price: item.price,
        liked: item.liked,
        imgs_url: [item.image_url]
      }
       
      
    })

     this.setState({
      shopInfo: response.data[0][0],
      shopProducts: sortByProductsId 
     })
      console.log('axio request successful!', response.data[0], response.data[1])
    }) 
    .catch(error => {
      console.log('axio request fail', error)

    })
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
