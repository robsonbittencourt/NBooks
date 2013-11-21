// Load configurations
var env = process.env.NODE_ENV || 'development', 
	config = require('./config/config')[env];

// Modules
var restify = require("restify"), 
	mongoose = require('mongoose'), 
	fs = require('fs');
	
// Paths
var models_path = config.root + '/models';
var config_path = config.root + '/config';

// Configure the server
var app = restify.createServer({
  name: config.app.name,
  version: config.version
});

app.use(restify.bodyParser());
app.use(restify.acceptParser(app.acceptable));
app.use(restify.queryParser());


// app asstes
var database = require('./database')(config);
var routes = require('./routes')(app, config);

// start listening
app.listen(config.port, function() {
  console.log('%s listening at %s', app.name, app.url);
});