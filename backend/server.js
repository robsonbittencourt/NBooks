// Load configurations
var env = process.env.NODE_ENV || 'development', 
	config = require('./config/config')[env];

// Modules
var restify = require("restify"), 
	mongoose = require('mongoose'), 
	fs = require('fs');
	//preflightEnabler = require('se7ensky-restify-preflight');

// Paths
var models_path = config.root + '/models';
var config_path = config.root + '/config';


var database = require('database')(config);

// Bootstrap auth middleware
//var auth = require(config_path + '/middlewares/authorization.js');

// Configure the server
var app = restify.createServer({
  name: config.app.name
  version: config.version
});

// allows authenticated cross domain requests
preflightEnabler(app);