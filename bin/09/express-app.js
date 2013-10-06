var express = require('express');
var hbs = require('hbs');

var app = express();

app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', function(request, response) {
	response.render('index', { title: "Express App v.0.2", header: "Hello from Node+Express+Handlebars" });
});

app.get('/api', function(request, response) {
   response.send({name:"Raymond",age:40});
});
 
app.listen(3000);