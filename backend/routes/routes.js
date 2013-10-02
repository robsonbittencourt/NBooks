var restify = require('restify'), 
fs = require('fs'), 
mongoose = require('mongoose');

module.exports = function (app, config, auth, smtpTransport) {
   var config_path = config.root + '/config'
      
   app.get('/api', function (req, res) {
      res.send({'message':'Success'});
   });
      
   require(config_path + '/books.js')(app, config, auth, smtpTransport);
   //require(config_path + '/users.js')(app, config, auth, smtpTransport);   
   //require(config_path + '/.js')(app, config, auth);
}
