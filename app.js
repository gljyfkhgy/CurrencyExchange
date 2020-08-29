var express = require('express');
var app = express();
var path = require('path');

// ROUTERS
var frontEnd = require('./front-end-routers.js');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use('/', frontEnd);


app.listen(80, function() {
    console.log("Server running at port 3000, http://localhost:3000 ...");
});