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

//{ mapParams: false }
app.use(restify.bodyParser());
app.use(restify.acceptParser(app.acceptable));
app.use(restify.queryParser());

app.listen(config.port, function() {
  console.log('%s listening at %s', app.name, app.url);
});

var database = require('./database')(config);

require('./routes/routes')(app, config);



//preflightEnabler = require('se7ensky-restify-preflight');
// Bootstrap auth middleware
//var auth = require(config_path + '/middlewares/authorization.js');
// allows authenticated cross domain requests
//preflightEnabler(app);