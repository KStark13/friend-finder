//set up dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//create express server and sets up port
var app = express();
var PORT = /*process.eng.PORT || */3000;

//set up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.text());

//router
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


//starts the server to begin listening
app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});