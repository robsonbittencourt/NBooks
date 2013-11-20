var  restify = require('restify'), 
     fs = require('fs'), 
     mongoose = require('mongoose');

module.exports = function (app, config) {
	var routes_path = config.root + '/routes'
      
   // default routes
   app.get('/api', function (req, res) {
      res.send({'message':'Success'});
   });
      
   // Load routes
   fs.readdirSync(routes_path).forEach(function (file) {
  		console.log("Loading route: " + file);
	  	require(routes_path + '/' + file)(app, config);
	});	
}
