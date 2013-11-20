var mongoose = require('mongoose'),    
    User = mongoose.model('Users'),
    ObjectId = mongoose.Types.ObjectId,    
    restify = require('restify');

module.exports = function (app, config) {    
    function findOne(req, res, next) {
        if (!req.params.id)
            return next(new restify.MissingParameterError('Id is required.'));

        User.findById(req.params.id, function (err, user) {            

            if (err) 
                res.send(new restify.MissingParameterError('User not found.'));

            res.send(user);
            return next();            
        });
    }
    
    function create(req, res, next) {                             
        var user = new User(
        {
            name: req.body.name, 
            email: req.body.email,
            password: req.body.password,
            type: req.body.type
        });               

        user.save();

        res.send(user);
        return next();
    }

    function identify(req, res, next) {                             
        var query = {};

        if (req.params.email)
            query.email = req.params.email;
        
        if (req.params.password)
            query.password = req.params.password;
        
        User.find(query, function(err, user){    
            res.send(user);
            return next();  
        });
    }

    function update(req, res, next) {
        if (!req.params.id)
            return next(new restify.MissingParameterError('Id is required.'));

        User.findById(req.params.id, function (err, user) {
            if (err || !user)
                res.send(new restify.MissingParameterError('User not found.'));

            user.name = req.body.name;            
            user.password = req.body.password;

            user.save(function (err) { 
                res.send(user);
                return next();
            });            
        });
    }

    
    app.post('/api/users/identify', identify);
    app.post('/api/users/', create);    
    app.get('/api/users/:id', findOne);
    app.put('/api/users/:id', update);    
}
