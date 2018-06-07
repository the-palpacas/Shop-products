const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public/dist'));

app.get('/:id/shopproducts', function(req, res){
  console.log('=====>',req.params.id);
  db.query(
    `SELECT products.id, products.name, products.price, products.liked, 
            shops.name, shops.city, shops.state, shops.shop_image_url 
     FROM products INNER JOIN shops 
     WHERE products.id_shops = shops.id AND products.id = ${req.params.id};

     SELECT image_url 
     FROM images  
     WHERE id_product = 100;`,
     (error, result) => {
       error ? console.log('mySQL query error', error) : console.log('results ===>', result);
     }
  )
  res.status(500).send('response working');
});


app.listen(5000, ()=>console.log('App listening to port 5000'));

