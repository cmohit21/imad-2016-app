var express = require('express');// this is source code of webserver express is library to listen to hhtp 
var morgan = require('morgan');// output logs
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {//if /' path is requested , this function is executed
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));//we send content of this file
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-1.html'));//we send content of this file
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-2.html'));//we send content of this file
});


app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-3.html'));//we send content of this file
});









app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
