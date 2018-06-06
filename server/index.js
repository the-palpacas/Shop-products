var express = require('express');
var app = express();
app.use(express.static(__dirname + '/../public/dist'));

app.get('/', function(req, res){
  res.send()
});


app.listen(5000, ()=>console.log('App listening to port 5000'));

