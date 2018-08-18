
// app.js

var exphbs  = require('express-handlebars');
var express = require('express');
var app = express();

app.get('/hello-world', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
