var restify = require('restify'), 
fs = require('fs'), 
mongoose = require('mongoose');

module.exports = function (app, config) {
	var config_path = config.root + '/config'
      
   app.get('/api', function (req, res) {
      res.send({'message':'Success'});
   });
      
   require(config_path + '/routes-livros.js')(app, config);
   //require(config_path + '/users.js')(app, config, auth, smtpTransport);   
   //require(config_path + '/.js')(app, config, auth);
}
