// app.js

var exphbs  = require('express-handlebars');
var express = require('express');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
	console.log(req.query)
	res.render('home')
});

app.get('/hello-world', function (req, res) {
	res.send('Hello World!');
});

app.get('/hello-gif', function (req, res) {
	var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
	res.render('hello-gif', {gifUrl: gifUrl})
});

app.get('/greetings/:name', function (req, res) {
	var name = req.params.name;
	res.render('greetings', {name: name});
});

app.get('/?term=:term', function (req, res) {
	res.render('term')
});