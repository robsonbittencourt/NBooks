var restify = require('restify'), 
fs = require('fs'), 
mongoose = require('mongoose');

module.exports = function (app, config) {
	var routes_path = config.root + '/routes'
      
   app.get('/api', function (req, res) {
      res.send({'message':'Success'});
   });
      
   require(routes_path + '/routes-livros.js')(app, config);
   //require(config_path + '/users.js')(app, config, auth, smtpTransport);   
   //require(config_path + '/.js')(app, config, auth);
}
