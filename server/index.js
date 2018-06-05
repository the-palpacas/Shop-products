var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world')
});


app.listen(5000, ()=>console.log('App listening to port 5000'));